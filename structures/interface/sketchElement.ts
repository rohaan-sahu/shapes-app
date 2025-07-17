type Shape = "rectangle"|"triangle"|"circle"|"diamond"|"square"|"star";

interface SketchElement {
    id : string,
    type : Shape,
    x : number,
    y : number,
    color : string,
    width? : number,
    height? : number
}

export default SketchElement;