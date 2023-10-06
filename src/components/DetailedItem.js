import { Image, StyleSheet, Text, View } from "react-native";

import { API_IMG_URL, API_IMG_URL_w342 } from "../config/apiConfig";

const DetailedItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title ? item.title : item.name}</Text>
      <View style={styles.detail_container}>
        <Image
          source={{
            uri: `${API_IMG_URL_w342}${item.poster_path}`,
          }}
          style={styles.image}
        />
        <Text style={styles.overview}>{item.overview}</Text>
        <View style={styles.tag_container}>
          <Text style={styles.tag_text}>Popularity: {item.popularity}</Text>
          <Text style={styles.tag_text}> | </Text>
          <Text style={styles.tag_text}>Release Date: {item.release_date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  tag_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  tag_text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 50,
    paddingBottom: 50,
  },
  detail_container: {
    width: "80%",
    gap: 20,
  },
  image: {
    alignSelf: "center",
    width: 250,
    height: 250,
  },
  overview: {
    lineHeight: 20,
  },
});

export default DetailedItem;
