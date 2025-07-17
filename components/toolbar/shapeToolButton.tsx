import styles from "@/styles";
import { useColorState, useShapeState } from "@/zustandState";
import { Text, TouchableOpacity, View } from "react-native";

function ShapeToolButtons(){
  const {shape:selectedTool, updateShape: setSelectedTool, renderShape:getToolIcon} = useShapeState();
  const selectedColor = useColorState((state)=>(state.color));

  return (
    <View style = {styles.topRow}>
      <View style={styles.toolButtons}>
          {(
            (["rectangle","circle","triangle","diamond","star","square"] as const).map((tool)=> (
              <TouchableOpacity
                key={tool}
                style = {[
                  styles.toolButton,
                  selectedTool === tool && styles.selectedColor,
                  selectedTool === tool && {elevation: 3},
                  selectedTool === tool && {backgroundColor: selectedColor}
                ]}
                onPress={()=> setSelectedTool(tool)}
              >
                <Text style={[
                  styles.toolButtonText,
                  selectedTool === tool && styles.selectedToolText
                ]}>
                  {
                      getToolIcon(tool)
                  }
                </Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </View>
  )
}

export default ShapeToolButtons