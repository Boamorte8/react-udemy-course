import React from 'react';

const validation = (props) => {
    const message = props.text.length <= 5 ? 'Text too short' : 'Text long enough';
    return (
        <p className="Validation">{message}</p>
    )
}

export default validation;