import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";

const Picker = ({ data, handleSelection, initial }) => {
  const { showActionSheetWithOptions } = useActionSheet();
  const processedData = data.map((item) => item.value);
  const [selected, setSelected] = useState(initial ? data[initial] : data[0]);

  const handleTouch = () => {
    showActionSheetWithOptions(
      {
        options: processedData,
      },
      (buttonIndex) => {
        setSelected(data[buttonIndex]);
        handleSelection(buttonIndex);
      }
    );
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.sub_container}
        onPress={handleTouch}
      >
        <Text style={styles.text}>{selected?.value}</Text>
        <AntDesign
          name="down"
          size={16}
          color="#333"
        />
      </Pressable>
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
