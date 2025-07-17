import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
  canvas: {
    flex: 1,
    position: "relative",
  },
  elementContainer: {
    position: "absolute",
    padding: 6,
  },
  selectedElement: {
    borderWidth: 2,
    borderColor: "#6366F1",
    borderStyle: "dashed",
    borderRadius: 8,
    elevation: 3,
    //boxShadow: "0 2px 4px 0 rgba(99, 102, 241, 0.3)",
  },
  rectangleElement: {
    borderRadius: 8,
    elevation: 3,
    //boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  },
  circleElement: {
    borderRadius: 100,
    elevation: 3,
    //boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  },
  triangleElement: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  diamondElement: {
    transform: [{ rotate: "45deg" }],
    borderRadius: 4,
    elevation: 3,
    //boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  },
  starContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  starElement: {
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.1)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  squareContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  squareElement: {
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.1)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  toolbar: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 20,
    padding: 16,
    elevation: 3,
    //boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.1)",
    //backdropFilter: "blur(10px)",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  colorRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  toolButtons: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#f5f3f6ff",
    borderRadius: 16,
    padding: 6,
    justifyContent: "center",
  },
  toolButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedTool: {
    backgroundColor: "#6366F1",
    elevation: 3,
    //boxShadow: "0 2px 4px 0 rgba(99, 102, 241, 0.3)",
  },
  toolButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#6B7280",
  },
  selectedToolText: {
    color: "#FFFFFF",
  },
  colorPalette: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 8,
  },
  colorButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: "transparent",
    elevation: 3
    //boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.1)",
  },
  selectedColor: {
    borderColor: "#FFFFFF",
    borderWidth: 4,
    elevation: 1.5,
    //boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
    transform: [{ scale: 1.1 }],
  },
  clearButton: {
    width: 44,
    height: 44,
    backgroundColor: "#EF4444",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    //boxShadow: "0 2px 4px 0 rgba(239, 68, 68, 0.3)",
  },
  clearButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;