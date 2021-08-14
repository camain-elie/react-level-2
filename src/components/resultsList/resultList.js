import PropTypes from 'prop-types';

import './resultList.css';

const generateList = (dataArray, Component) => {

    return dataArray.map(item => {
        return(
            <Component
                key={item.id}
                dataItem={item}
            />);
    });
};

export default function ResultList ({ dataArray, Component, userMessage }) {

    let itemList;

    if(userMessage){
        itemList = <div>{userMessage}</div>;
    }else{
        itemList = generateList(dataArray, Component);
    }

    return(
        <div>
            {itemList}
        </div>
    );
}

ResultList.propTypes = {
    dataArray: PropTypes.arrayOf(PropTypes.any).isRequired,
    Component: PropTypes.elementType.isRequired,
    userMessage: PropTypes.string,
};