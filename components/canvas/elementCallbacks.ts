import db from "@/db";
import { useColorState, useElementIdState, useShapeState } from "@/zustandState";
import { id } from "@instantdb/react";

const selectedColor = useColorState.getState().color;
const selectedTool = useShapeState.getState().shape;
const setSelectedElementId = useElementIdState.getState().updateElementId;


function addElement(x: number, y: number) {
    const elementId = id();
    let width = 60;
    let height = 60;

    if (selectedTool === "star") {
        width = 80;
        height = 80;
    }
    console.log(`Shape: ${selectedTool} Color: ${selectedColor}`)

    db.transact(
        db.tx.elements[elementId].update({
        type: selectedTool,
        x,
        y,
        color: selectedColor,
        width,
        height,
        createdAt: Date.now(),
        })
    );

    setSelectedElementId(elementId);
};


const selectElement = (id: string) => {
    setSelectedElementId(id);
};

const moveElement = (elementId: string,x: number, y: number) => {
    db.transact(db.tx.elements[elementId].update({x,y}));
};

// const clearCanvas = () => {    
//     if (elementsHook.length > 0){
//         const elementIds = elementsHook.map((el: any) => el.id);
//       db.transact(
//         elementIds.map((elementId: string) =>
//           db.tx.elements[elementId].delete()
//         )
//       );
//     } 
//     setSelectedElementId(null)
// }

export { addElement, moveElement, selectElement };

