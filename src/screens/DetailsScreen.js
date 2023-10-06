import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { getDetails } from "../services/api";
import Loader from "../components/Loader";
import DetailedItem from "../components/DetailedItem";

const DetailsScreen = (props) => {
  const { params } = useRoute();
  const id = params?.ID;
  const title = params?.title;

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovie = async () => {
    try {
      const response = await getDetails(id);
      if (response) {
        setItem(response);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setTitle = () => {
    props.navigation.setOptions({
      title: `${title}`,
      headerBackTitle: "Back to List",
    });
  };

  useEffect(() => {
    setTitle();
    fetchMovie();
  }, []);

  return <>{isLoading ? <Loader /> : <DetailedItem item={item} />}</>;
};

export default DetailsScreen;
