import Canvas from "@/components/canvas";
import ClearCanvas from "@/components/toolbar/clearCanvas";
import ColorPalatte from "@/components/toolbar/colorPalatte";
import ShapeToolButtons from "@/components/toolbar/shapeToolButton";
import styles from "@/styles";
import { View } from "react-native";

export default function Index() {

  return (
    <View style={styles.container}>
      {/**/}
        <Canvas/>
      {/* Toolbar */}
      <View style = {styles.toolbar}>
        <ShapeToolButtons/>
        
        <ClearCanvas/>

        <ColorPalatte/>

      </View>
    </View>
  );
}
