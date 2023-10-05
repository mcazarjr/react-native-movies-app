import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";

import { getNowPlayingMovies } from "../services/api";
import MovieItem from "../components/MovieItem";
import Loader from "../layout/Loader";
import MovieList from "../components/MovieList";

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const movies = await getNowPlayingMovies();
      if (movies && movies.results) {
        setMovies(movies.results);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <>{isLoading ? <Loader /> : <MovieList movies={movies} />}</>;
};

export default HomeScreen;
