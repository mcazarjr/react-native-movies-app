import { Image, StyleSheet, Text, View } from "react-native";

import { API_IMG_URL, API_IMG_URL_w342 } from "../config/apiConfig";

const DetailedItem = ({ item }) => {
  console.log(item);
  return (
    <View>
      <Text>{item.title}</Text>
      <Image
        source={{
          uri: `${API_IMG_URL_w342}${item.poster_path}`,
        }}
        style={{ width: 250, height: 250 }}
      />
      <Text>{item.overview}</Text>
      <View>
        <Text>Popularity: {item.popularity}</Text>
        <Text> | </Text>
        <Text>Release Date: {item.release_date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailedItem;
