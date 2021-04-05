import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuid(), backgroundColor: "green", height: 100, width: 100}
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid() }]);
    }

    const remove = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <div>
            <h1>Boxes Emporium!</h1>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({ id, backgroundColor, width, height }) => <Box id={id} backgroundColor={backgroundColor} width={width} height={height} handleRemove={remove}/>)}
            </div>
        </div>
    )
}

export default BoxList;