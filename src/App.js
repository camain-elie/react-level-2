import SearchInput from './components/searchInput/searchInput';

import './App.css';

function App() {

    const getInputValue = (value) => {
        console.log(value);
    };

    return (
        <div className="App">
            <SearchInput 
                getInputValue={getInputValue}
                searchIcon="search"
            />
        </div>
    );
}

export default App;
