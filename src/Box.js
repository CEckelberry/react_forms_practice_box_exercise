import React, {useState} from "react";

const Box = ({ id, backgroundColor, width, height, handleRemove }) => {
    const remove = () => handleRemove(id);
    return(
        <div>
            <div id={id} style={{
                backgroundColor:backgroundColor,
                width: `${width}px`,
                height: `${height}px`}}>
            </div>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;