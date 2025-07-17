import db from "@/db";
import styles from "@/styles";
import { useColorState, useElementIdState } from "@/zustandState";
import { useMemo } from "react";
import { Dimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { addElement, moveElement, selectElement } from "./elementCallbacks";
import MovableElement from "./movableElement";

const { height: screenHeight } = Dimensions.get("window");

const canvasTapGesture = Gesture.Tap().onEnd((event) => {
    console.log("tap");
    
    if (event.y < screenHeight - 120) {
        // Avoid toolbar area
        runOnJS(addElement)(event.x, event.y);
    }
    
});

function Canvas(){
    const { isLoading, error, data } = db.useQuery({ 
        elements: {}, 
    });

    const elementsHook = useMemo(()=> data?.elements || [] , [data?.elements]);

    const selectedElementId = useElementIdState((state)=>(state.elementId));

    const selectedColor = useColorState((state)=>(state.color));
    console.log(selectedColor)

    return (
        <GestureDetector gesture={canvasTapGesture}>
            <View style = {[
                styles.canvas,
                { backgroundColor: 'rgba(0,0,0,0.1)'},
                { width: '100%', height: '100%' }
                ]}>
                {/*<Text>Hello world. How are you. All good</Text>*/}
                {elementsHook.map(
                    (element:any)=> (
                        <MovableElement 
                            key = {element.id}
                            element = {element}
                            onMove = {moveElement}
                            onSelect = {selectElement}
                            isSelected = {element.id === selectedElementId}
                        />
                    )
                )}
            </View>
        </GestureDetector>
    )
}

export default Canvas;