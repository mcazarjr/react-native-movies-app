import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Loader from "../components/Loader";
import DetailedItem from "../components/DetailedItem";
import { getMovieDetails, getShowDetails } from "../services/api";

const DetailsScreen = (props) => {
  const { params } = useRoute();
  const id = params?.id;
  const type = params?.type;

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetails = async (type) => {
    try {
      let response;
      switch (type) {
        case "movies":
          response = await getMovieDetails(id);
          break;
        case "shows":
          response = await getShowDetails(id);
          break;
        default:
          console.log("Unknown type");
          break;
      }
      if (response) {
        setItem(response);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setTitle = (title) => {
    props.navigation.setOptions({
      title: `${title}`,
      headerBackTitle: "Back to List",
    });
  };

  useEffect(() => {
    fetchDetails(type);
    setTitle();
  }, []);

  useEffect(() => {
    if (item) {
      setTitle(item.title ? item.title : item.name);
    }
  }, [item]);

  return (
    <View style={styles.container}>
      {isLoading && <Loader />}
      {!isLoading && <DetailedItem item={item} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
});

export default DetailsScreen;
