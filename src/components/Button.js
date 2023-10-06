import { Pressable, Text, View, StyleSheet } from "react-native";

const Button = ({ onPress, label, icon, style }) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={styles.touchable}
      >
        {icon && icon}
        <Text style={styles.touchable_text}>{label}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#18ACCC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minHeight: 30,
    maxHeight: 30,
    gap: 4,
  },
  touchable_text: {
    color: "#fff",
    fontSize: 13,
  },
});

export default Button;
