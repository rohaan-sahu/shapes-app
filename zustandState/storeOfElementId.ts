import { create } from "zustand";
/* Store of Element Id */

type ElementId = string | null;

type ElementIdState= {
    elementId: ElementId,
    updateElementId: (newElementId: ElementId) => void
};

const useElementIdState = create<ElementIdState>(
    (set) => ({
        elementId: null,
        updateElementId: (newElementId) => set(()=>({elementId: newElementId}))
    })
);

export default useElementIdState;