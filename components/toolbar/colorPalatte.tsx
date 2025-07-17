import styles from "@/styles";
import { useColorState } from "@/zustandState";
import { TouchableOpacity, View } from 'react-native';

const COLORS = [
  "#6366F1", // Indigo
  "#EC4899", // Pink
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#8B5CF6", // Violet
  "#EF4444", // Red
] as const;

function ColorPalatte(){
    const {color: selectedColor, updateColor: setSelectedColor} = useColorState();

    return (
        <View style={styles.colorRow}>
          <View style={styles.colorPalette}>
                {
                    COLORS.map((color)=> (
                        <TouchableOpacity
                            key = {color}
                            style = {[
                                styles.colorButton,
                                {backgroundColor: color},
                                selectedColor === color && styles.selectedColor
                            ]}
                            onPress = {()=>{
                                setSelectedColor(color)
                                console.log(selectedColor)
                            }}
                        />
                    ))
                }
          </View>
        </View>
    )
}

export default ColorPalatte;