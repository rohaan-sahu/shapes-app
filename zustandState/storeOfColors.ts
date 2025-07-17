import { create } from "zustand";

/* Color state store */

type Color = `#${string}`;

type ColorPalatte = {
    color : Color,
    updateColor : (newColor: Color) => void
}

const useColorState = create<ColorPalatte>(
    (set) => ({
        color: "#8B5CF6",
        updateColor: (newColor) => set(()=>({color: newColor}))
    })
);

export default useColorState;