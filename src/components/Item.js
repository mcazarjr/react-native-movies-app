import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

import { API_IMG_URL, API_IMG_URL_w185 } from "../config/apiConfig";
import Button from "./Button";

const Item = ({ data, onPress }) => {
  return (
    <View style={styles.card_container}>
      <Image
        source={{
          uri: `${API_IMG_URL_w185}${data.poster_path}`,
        }}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.card_description}>
        <Text style={styles.title}>{data.title ? data.title : data.name}</Text>
        <Text style={styles.description}>Popularity: {data.popularity}</Text>
        <Text style={styles.description}>
          Release Date: {data.release_date}
        </Text>
        <Button
          onPress={onPress}
          label={"More Details"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 8,
    paddingLeft: 15,
    paddingVertical: 10,
    width: "90%",
  },
  card_description: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 13,
    color: "#333",
  },
});

export default Item;
