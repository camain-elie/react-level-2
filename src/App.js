import { useEffect, useState } from 'react';

import SearchInput from './components/searchInput/searchInput';
import GithubElement from './components/githubElement/githubElement';
import ResultList from './components/resultList/resultList';
import Pages from './components/pages/pages';
import { searchUser } from './services/github';

import './App.css';

const NO_RESULT = 'Sorry, we were unable to find any user with this username, try again ;)';
/* can't go above page 34 because github
    provides only the first 1000 search results 
    with 30 result per page */
const PAGE_MAX = 34;

function App() {
    const [dataArray, setDataArray] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [userMessage, setUserMessage] = useState('');
    const [currentPage, setCurrentPages] = useState(1);

    const sendUserSearch = (value, page = 1) => {
        if(value){
            searchUser(value, page)
                .then(res => {
                    console.log(res);
                    if(!currentPage){
                        setCurrentPages(1);
                    }
                    
                    setDataArray(res.items);
                    setNumberOfItems(res.total_count);
                    if(!res.total_count){
                        setUserMessage(NO_RESULT);
                    }else{
                        setUserMessage('');
                    }
                })
                .catch(error => {
                    console.log(error.message);
                    
                    setUserMessage(error.message);
                });
        }else{
            setDataArray([]);
            setUserMessage("Enter the user's name you are looking for in the field above.");
            setNumberOfItems(0);
        }
    };

    useEffect(() => {
        sendUserSearch(searchValue, currentPage);
        
    }, [searchValue, currentPage]);

    const changeOnePage = (page) => {
        setCurrentPages(currentPage + page);
    };

    const changeToPage = (page) => {
        setCurrentPages(page);
    };

    return (
        <div className="App">

            <SearchInput 
                getInputValue={setSearchValue}
                searchIcon="search"
                n={numberOfItems}
            />

            <ResultList 
                dataArray={dataArray}
                Component={GithubElement}
                userMessage={userMessage}
            />

            <Pages 
                totalPages={Math.ceil(numberOfItems/30) > PAGE_MAX ? PAGE_MAX : Math.ceil(numberOfItems/30) || 1}
                currentPage={currentPage}
                changeOnePage={changeOnePage}
                changeToPage={changeToPage}
            />
        </div>
    );
}

export default App;
