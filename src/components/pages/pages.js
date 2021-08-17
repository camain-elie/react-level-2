import PropTypes from 'prop-types';

import './pages.css';

export default function Pages ({ totalPages, currentPage, changeOnePage, changeToPage }) {

    console.log({totalPages: totalPages, currentPage: currentPage});

    const generatePagesButtons = () => {

        let buttonTab = [];

        const pageMin = 1, pageMax = totalPages;

        
        // fill buttonTab with strings contained in the buttons
        for(let i = 1; i<=pageMax; i++){
            if((i===pageMin) || (i===pageMax) || (i >= currentPage-1 && i<= currentPage+1)){
                buttonTab.push(i);
            }else{
                if((i===currentPage-2) || (i===currentPage+2)){
                    buttonTab.push("...");
                }
            }
        }

        // generate array with the buttons from buttonButton
        let pagesArray = buttonTab.map((item, index) => {
            if(item === "..."){
                return(
                    <div className="pages__more" key={index+1} >
                        <p>{item}</p>
                    </div>
                );
            }

            return(
                <div className={`pages__number ${item === currentPage ? "pages__number--current" : ""}`}
                    key={index+1}
                    onClick={() => changeToPage(item)}
                >
                    <p>{item}</p>
                </div>
            );
        });

        const leftArrow = (
            <div className={`pages__arrow${currentPage === pageMin ? "--disabled" : ""}`}
                onClick={() => changeOnePage(-1)} 
                key={0}    
            >
                <p className="material-icons">
                    chevron_left
                </p>
            </div>
        );
        const rightArrow = (
            <div className={`pages__arrow${currentPage === pageMax ? "--disabled" : ""}`}
                onClick={() => changeOnePage(1)}
                key={pagesArray.length+1} >
                <p className="material-icons">
                    chevron_right
                </p>
            </div>
        );

        // finally we add the left and right arrow buttons to pagesArray
        pagesArray.unshift(leftArrow);
        pagesArray.push(rightArrow);

        return pagesArray;
    };

    //if less than two pages, no need for pages
    if(totalPages < 2) return null; 

    const pages = generatePagesButtons();

    return(
        <div className="pages" >
            {pages}
        </div>
    );
}

Pages.propTypes = {
    totalPages: function(props, propName, componentName){
        if(props[propName] < 0){
            return new Error(
                "Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" +
                propName + "' must be a positive Integer number."
            );
        }
        if(typeof props[propName] != 'number'){
            return new Error(
                "Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" +
                propName + "' must be of type 'Number'."
            );
        }
    },
    currentPage: function(props, propName, componentName){
        if(typeof props[propName] != 'number'){
            return new Error(
                "Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" +
                propName + "' must be of type 'Number'."
            );
        }
        if(props[propName] < 0 || props[propName] > props['totalPages']){

            return new Error(
                "Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" +
                propName + "' must be between 0 and the value of 'totalPages' prop."
            );
        }
    },
    changeOnePage: PropTypes.func.isRequired,
    changeToPage: PropTypes.func.isRequired,
};