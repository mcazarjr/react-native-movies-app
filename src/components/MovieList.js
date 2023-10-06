import React from "react";
import { ScrollView, View, Text } from "react-native";
import Item from "./Item";
import { useNavigation } from "@react-navigation/native";

const MovieList = ({ movies }) => {
  const navigation = useNavigation();

  const nagivateToDetails = (movieID, movieTitle) => {
    navigation.navigate("Details", { ID: movieID, title: movieTitle });
  };

  return (
    <ScrollView>
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <Item
            key={movie.id}
            type={"movie"}
            data={movie}
            onPress={() => nagivateToDetails(movie.id, movie.title)}
          />
        ))
      ) : (
        <Text>No movies available</Text>
      )}
    </ScrollView>
  );
};

export default MovieList;
