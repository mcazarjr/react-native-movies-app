import { StyleSheet, Text, View } from "react-native";
const FormLabel = ({ label, isImportant }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_style}>{label}</Text>
      {isImportant && <Text style={styles.isImportant_style}>*</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 4,
    gap: 4,
  },
  text_style: {
    color: "#2c3e50",
    fontSize: 14,
  },
  isImportant_style: {
    color: "#FF0000",
    fontSize: 14,
  },
});

export default FormLabel;
