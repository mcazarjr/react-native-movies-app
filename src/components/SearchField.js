import { Input, StyleSheet, TextInput, View } from "react-native";

import { Entypo } from "@expo/vector-icons";

const SearchField = ({ onChangeHandler, placeholder }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon_container}>
        <Entypo
          name="magnifying-glass"
          size={24}
          style={styles.icon_style}
        />
      </View>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeHandler}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 4,
    gap: 4,
    backgroundColor: "#E8E8E8",
  },
  icon_container: {
    padding: 4,
  },
  icon_style: {
    color: "#A8A8A8",
  },
});

export default SearchField;
