import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const [boxes, setBoxes] = useState([])

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: Date.now() }])
    }

    const removeBox = (id) => {
        setBoxes(boxes.filter(box => box.id != id));
    }

    return (
        <>
            <h1>Color Box Maker</h1>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(box =>
                    <Box
                        key={box.id}
                        color={box.color}
                        height={box.height}
                        width={box.width}
                        remove={() => removeBox(box.id)}
                    />)}
            </div>
        </>
    );
}

export default BoxList