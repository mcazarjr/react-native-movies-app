import { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/api";
import Loader from "../components/Loader";
import Lists from "../components/Lists";
import Picker from "../components/Picker";

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const selections = [
    { key: "spacer1", value: "spacer" },
    { key: "now_playing", value: "Now Playing" },
    { key: "popular", value: "Popular" },
    { key: "top_rated", value: "Top Rated" },
    { key: "upcoming", value: "Upcoming" },
    { key: "spacer2", value: "spacer" },
  ];

  const handleSelection = (item) => {
    setSelected(item.value);
  };

  const fetchMovies = async (type) => {
    try {
      let data;
      switch (type) {
        case "now_playing":
          data = await getNowPlayingMovies();
          break;
        case "popular":
          data = await getPopularMovies();
          break;
        case "top_rated":
          data = await getTopRatedMovies();
          break;
        case "upcoming":
          data = await getUpcomingMovies();
          break;
        default:
          data = await getNowPlayingMovies();
          break;
      }

      if (data && data.results) {
        setMovies(data.results);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let result;
    setIsLoading(true);
    switch (selected) {
      case "now_playing":
        result = fetchMovies("now_playing");
        break;
      case "popular":
        result = fetchMovies("popular");
        break;
      case "top_rated":
        result = fetchMovies("top_rated");
        break;
      case "upcoming":
        result = fetchMovies("upcoming");
        break;
      default:
        result = fetchMovies("now_playing");
        break;
    }
  }, [selected]);

  return (
    <ScrollView style={{ backgroundColor: "#FFF", paddingTop: 40 }}>
      <Picker
        data={selections}
        handleSelection={handleSelection}
        initial={1}
      />

      {isLoading && <Loader />}
      {!isLoading && (
        <View style={{ paddingTop: 35 }}>
          <Lists
            items={movies}
            itemsType="movies"
          />
        </View>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
