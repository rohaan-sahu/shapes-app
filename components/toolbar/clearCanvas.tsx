import styles from "@/styles";
import { Text, TouchableOpacity, View } from 'react-native';

function ClearCanvas(){
    return(
        <View style = {styles.bottomRow}>
            <TouchableOpacity
                style = {styles.clearButton}
                //onPress(handleClearCanvas)
            >
                <Text style ={styles.clearButtonText}>
                    X
                </Text>
            </TouchableOpacity>
        </View>
    )
}

function _handleClearCanvas(){}

export default ClearCanvas;