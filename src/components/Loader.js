import { ActivityIndicator, StyleSheet, View } from "react-native";
const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="#000000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loader;
