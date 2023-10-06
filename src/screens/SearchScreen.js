import { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import { useDebounce } from "../utils/Hooks";
import SearchForm from "../components/SearchForm";
import Loader from "../components/Loader";
import Lists from "../components/Lists";
import { getMultiSearch, getMovieSearch, getTVSearch } from "../services/api";

const SearchScreen = () => {
  const [selected, setSelected] = useState("multi");
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState("");
  // If needed
  const debouncedSearchText = useDebounce(searchText);

  const onChangeHandler = (text) => {
    setSearchText(text);
  };

  const selectionChangeHandler = (item) => {
    setSelected(item.value);
  };

  const onFormSubmitHandler = () => {
    if (searchText.length === 0) {
      console.log("Please enter a search term");
      return;
    }

    setIsSearchInitiated(true);
    setIsLoading(true);
    fetchSearchResults(selected, searchText);
  };

  const fetchSearchResults = async (searchType, query) => {
    try {
      let data;
      switch (searchType) {
        case "movie":
          data = await getMovieSearch(query);
          break;
        case "multi":
          data = await getMultiSearch(query);
          break;
        case "tv":
          data = await getTVSearch(query);
          break;
      }
      setSearchResults(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <SearchForm
        onChangeHandler={onChangeHandler}
        onFormSubmitHandler={onFormSubmitHandler}
        selectionChangeHandler={selectionChangeHandler}
      />

      {!isSearchInitiated && (
        <View style={styles.initiate_container}>
          <Text style={styles.initiate_text}>Please initiate a search</Text>
        </View>
      )}

      {isSearchInitiated && (
        <ScrollView>
          {isLoading ? (
            <Loader />
          ) : (
            <Lists
              items={searchResults}
              itemsType="search"
              searchType={selected}
            />
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  initiate_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  initiate_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default SearchScreen;
