import React from "react";
import { ScrollView, View, Text } from "react-native";
import Item from "./Item";
import { useNavigation } from "@react-navigation/native";

const TVShowList = ({ shows }) => {
  const navigation = useNavigation();

  const nagivateToDetails = (showID, showTitle) => {
    navigation.navigate("Details", { ID: movieID, title: movieTitle });
  };

  return (
    <ScrollView>
      {shows && shows.length > 0 ? (
        shows.map((show) => (
          <Item
            key={show.id}
            type="TVShow"
            data={show}
            onPress={() => nagivateToDetails(show.id, show.title)}
          />
        ))
      ) : (
        <Text>No TV Shows available</Text>
      )}
    </ScrollView>
  );
};

export default TVShowList;
