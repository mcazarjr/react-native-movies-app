import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Pressable,
  StyleSheet,
} from "react-native";

import { API_IMG_URL, API_IMG_URL_w185 } from "../config/apiConfig";

const MovieItem = ({ movie, onPress }) => {
  return (
    <View style={styles.card_container}>
      <Image
        source={{
          uri: `${API_IMG_URL_w185}${movie.poster_path}`,
        }}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.card_description}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.description}>Popularity: {movie.popularity}</Text>
        <Text style={styles.description}>
          Release Date: {movie.release_date}
        </Text>
        <Pressable
          onPress={onPress}
          style={styles.touchable}
        >
          <Text style={styles.touchable_text}>More Details</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    gap: 8,
    padding: 8,
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
  touchable: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#18ACCC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    width: "90%",
  },
  touchable_text: {
    color: "#fff",
    fontSize: 13,
  },
});

export default MovieItem;
