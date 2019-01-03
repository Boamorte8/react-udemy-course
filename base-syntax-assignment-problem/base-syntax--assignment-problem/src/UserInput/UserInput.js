import React from 'react';

const userinput = (props) => {
    const style = {
        textAlign : 'center'
    }

    return (
        <div style={style}>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default userinput;