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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loader;
