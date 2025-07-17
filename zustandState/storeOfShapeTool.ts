import { create } from 'zustand';

/* Shape tool store */

type Shape = "rectangle"|"triangle"|"circle"|"diamond"|"star"|"square";

type ShapeTool = {
    shape: Shape,
    updateShape: (newShape:Shape) => void,
    renderShape: (toolType: Shape) => string
};

const renderShape = (toolType: Shape) => {
    switch (toolType) {
     case "circle":
       return "○";
     case "rectangle":
       return "▭";
     case "triangle":
       return "△";
     case "diamond":
       return "◇";
     case "star":
       return "⁎";
     case "square":
       return "◳";
     default:
       return "ↂ";
    }
};

const useShapeState = create<ShapeTool>(
    (set) => (
        {
            shape: "circle",
            updateShape: (newShape) => set( () => ({shape: newShape}) ),
            renderShape: (toolType) => renderShape(toolType)
        }
    )
);

// console.log('useShapeState created:', typeof useShapeState); // Debug line

export default useShapeState;