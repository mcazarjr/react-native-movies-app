import { useState, useEffect } from "react";
import { Text, View } from "react-native";

import {
  getAiringTodayShow,
  getOnTheAirShow,
  getPopularShow,
  getTopRatedShows,
} from "../services/api";

import Picker from "../components/Picker";
import Loader from "../components/Loader";
import TVShowList from "../components/TVShowList";

const TVShowScreen = () => {
  const [shows, setShows] = useState([]);
  const [selected, setSelected] = useState("popular");
  const [isLoading, setIsLoading] = useState(true);

  const selections = [
    { key: "airing_today", value: "Airing Today" },
    { key: "on_the_air", value: "On the Air" },
    { key: "Popular", value: "Popular" },
    { key: "top_rated", value: "Top Rated" },
  ];

  const handleSelection = (item) => {
    setSelected(selections[item].key);
  };

  const fetchShows = async (type) => {
    try {
      let data;
      switch (type) {
        case "airing_today":
          data = await getAiringTodayShow();
          break;
        case "on_the_air":
          data = await getOnTheAirShow();
          break;
        case "popular":
          data = await getPopularShow();
          break;
        case "top_rated":
          data = await getTopRatedShows();
          break;
        default:
          data = await getPopularShow();
          break;
      }

      if (data && data.results) {
        setShows(data.results);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    switch (selected) {
      case "airing_today":
        result = fetchShows("airing_today");
        break;
      case "on_the_air":
        result = fetchShows("on_the_air");
        break;
      case "popular":
        result = fetchShows("popular");
        break;
      case "top_rated":
        result = fetchShows("top_rated");
        break;
      default:
        result = fetchShows("popular");
        break;
    }
  }, [selected]);

  return (
    <View style={{ backgroundColor: "#FFF" }}>
      <Picker
        data={selections}
        handleSelection={handleSelection}
        initial={2}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <View>
          <TVShowList shows={shows} />
        </View>
      )}
    </View>
  );
};

export default TVShowScreen;
