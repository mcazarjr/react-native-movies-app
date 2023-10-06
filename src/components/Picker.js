import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BottomSheet, ListItem } from "@rneui/themed";
import PickerItem from "./PickerItem";

const Picker = ({ data, handleSelection, initial }) => {
  // const { showActionSheetWithOptions } = useActionSheet();
  const [isVisible, setIsVisible] = useState(false);
  // const processedData = data.map((item) => item.value);
  const [selected, setSelected] = useState(initial ? data[initial] : data[0]);

  const handleTouch = (data) => {
    setIsVisible(false);
    setSelected(data);
    handleSelection(data);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.sub_container}
        onPress={() => setIsVisible(true)}
      >
        <Text style={styles.text}>{selected?.value}</Text>
        <AntDesign
          name="down"
          size={16}
          color="#333"
        />
      </Pressable>
      <BottomSheet
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderWidth: 1,
        }}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      >
        {data.map((option) => (
          <PickerItem
            key={option.key}
            item={option}
            onPress={handleTouch}
            isActive={selected.key === option.key}
          />
        ))}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sub_container: {
    display: "flex",
    width: 175,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#AAA",
    borderWidth: 1,
    padding: 4,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Picker;
