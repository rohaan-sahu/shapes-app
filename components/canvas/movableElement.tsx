import { MovableElementProps } from "@/structures/interface";
import styles from "@/styles";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

function MovableElement({
  element,
  onMove,
  onSelect,
  isSelected,
}: MovableElementProps) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  // Reset translate values when element position changes from database
  useEffect(() => {
    translateX.value = 0;
    translateY.value = 0;
  }, [element.x, element.y, translateX, translateY]);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      scale.value = withSpring(1.1);
      runOnJS(onSelect)(element.id);
    })
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      scale.value = withSpring(1);
      const finalX = element.x + event.translationX;
      const finalY = element.y + event.translationY;
      runOnJS(onMove)(element.id, finalX, finalY);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: element.x + translateX.value },
      { translateY: element.y + translateY.value },
      { scale: scale.value },
    ],
  }));

  const renderElement = () => {
    switch (element.type) {
      case "rectangle":
        return (
          <View
            style={[
              styles.rectangleElement,
              {
                backgroundColor: element.color,
                width: element.width || 80,
                height: element.height || 60,
              },
            ]}
          />
        );
      case "circle":
        return (
          <View
            style={[
              styles.circleElement,
              {
                backgroundColor: element.color,
                width: element.width || 60,
                height: element.height || 60,
              },
            ]}
          />
        );
      case "triangle":
        return (
          <View
            style={[
              styles.triangleElement,
              {
                borderBottomColor: element.color,
                borderBottomWidth: element.height || 60,
                borderLeftWidth: (element.width || 60) / 2,
                borderRightWidth: (element.width || 60) / 2,
              },
            ]}
          />
        );
      case "diamond":
        return (
          <View
            style={[
              styles.diamondElement,
              {
                backgroundColor: element.color,
                width: element.width || 60,
                height: element.height || 60,
              },
            ]}
          />
        );
      case "star":
        return (
          <View style={styles.starContainer}>
            <Text
              style={[
                styles.starElement,
                {
                  color: element.color,
                  fontSize: (element.width || 70) * 0.8,
                },
              ]}
            >
              ★
            </Text>
          </View>
        );
      case "square":
        return (
          <View style={styles.squareContainer}>
            <Text
              style={[
                styles.squareElement,
                {
                  color: element.color,
                  fontSize: (element.width || 80) * 0.7,
                },
              ]}
            >
              ◳
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={[
          animatedStyle,
          styles.elementContainer,
          isSelected && styles.selectedElement,
        ]}
      >
        {renderElement()}
      </Animated.View>
    </GestureDetector>
  );
}

export default MovableElement;