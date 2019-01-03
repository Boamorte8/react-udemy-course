import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>I'm { props.username } and I am practice react basics.</p>
            <p>lorem ipsum test paragraph</p>
        </div>
    )
}

export default useroutput;