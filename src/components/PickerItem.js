import { Text, StyleSheet, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

const PickerItem = ({ item, onPress, isActive }) => {
  const handlePress = () => {
    onPress(item);
  };
  return (
    <>
      {item.value === "spacer" ? (
        <View
          style={{
            height: 30,
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 3.5,
              backgroundColor: "#AAAAAA",
              width: 40,
              borderRadius: 10,
            }}
          ></View>
        </View>
      ) : null}
      {item.value !== "spacer" ? (
        <Pressable
          style={isActive ? styles.container_active : styles.container}
          onPress={handlePress}
        >
          <Text style={isActive ? styles.text_active : styles.text_item}>
            {item.value}
          </Text>
          {isActive ? (
            <Entypo
              name="check"
              size={16}
              color="#FFFFFF"
            />
          ) : null}
        </Pressable>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  container_active: {
    backgroundColor: "#0e887b",
    paddingVertical: 6,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  text_item: {
    fontSize: 18,
  },
  text_active: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default PickerItem;
