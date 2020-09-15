import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Beeds(props){
    return(
        <button
            className = "button"
            onclick = {props.onClick}
        >
            {props.value}
        </button>
    );
}

function Unit(props){

}


/*============================================*/
ReactDOM.render(
  <Beeds />,
  document.getElementById('root')  
);