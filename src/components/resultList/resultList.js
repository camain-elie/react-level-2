import PropTypes from 'prop-types';

import './resultList.css';

// Generate an array of given Components from an array of data 
const generateList = (dataArray, Component) => {

    return dataArray.map(item => {
        return(
            <Component
                key={item.id}
                dataItem={item}
            />);
    });
};


/**
 * Create a list of a given Component from an array of data or
 * display a message instead if necessary.
 */
export default function ResultList ({ dataArray, Component, userMessage }) {

    let itemList;

    if(userMessage){
        itemList = <div className="result-list__message">{userMessage}</div>;
    }else{
        itemList = generateList(dataArray, Component);
    }

    return(
        <div className="result-list">
            {itemList}
        </div>
    );
}

ResultList.propTypes = {
    dataArray: PropTypes.arrayOf(PropTypes.any),
    Component: PropTypes.elementType.isRequired,
    userMessage: PropTypes.string,
};