import SketchElement from "./sketchElement";

interface MovableElementValues {
    element: SketchElement,
    isSelected: boolean
}

interface MovableElementFunctions{
    onMove: (id: string,x: number, y: number) => void;
    onSelect: (id: string) => void;
}

interface MovableElementProps extends MovableElementValues,MovableElementFunctions {};

export default MovableElementProps;