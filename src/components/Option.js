import React from 'react';

const Option = (props) => {
    return  (
        <div>
          {props.optionText}
          <button 
            onClick={(e) =>{
              // wywołuje funkcje z prametrem props.optionText handleDeleteOption opisana w komponencie IndecisionApp
              props.handleDeleteOption(props.optionText)
            }}
          >
            Remove</button>
        </div>
      );
  }
  
  export default Option;