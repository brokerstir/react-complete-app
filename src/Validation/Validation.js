import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text Okay!';

  if (props.inputLength <= 5) {
  	validationMessage = 'Text Too Short!'
  }
  return (
    <div>
        <p>{validationMessage}</p>
    </div>
  	)
}

export default validation;
