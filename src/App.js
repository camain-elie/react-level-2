import { useState } from 'react';

import SearchInput from './components/searchInput/searchInput';
import GithubElement from './components/githubElement/githubElement';
import ResultList from './components/resultList/resultList';
import { searchUser } from './services/github';

import './App.css';

const NO_RESULT = 'Sorry, we were unable to find any user with this username, try again ;)';

function App() {
    const [dataArray, setDataArray] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [userMessage, setUserMessage] = useState('');

    const getInputValue = (value) => {

        if(value){
            searchUser(value)
                .then(res => {

                    if(res.statusText === "Forbidden"){
                        setUserMessage('oops');
                    }
                    console.log(res);
                    console.log('res');
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



    return (
        <div className="App">

            <SearchInput 
                getInputValue={getInputValue}
                searchIcon="search"
                n={numberOfItems}
            />

            <ResultList 
                dataArray={dataArray}
                Component={GithubElement}
                userMessage={userMessage}
            />

        </div>
    );
}

export default App;
