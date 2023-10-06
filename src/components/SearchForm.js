import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import FormLabel from "./FormLabel";
import SearchField from "./SearchField";
import Picker from "./Picker";
import Button from "./Button";

const SearchForm = ({
  onChangeHandler,
  onFormSubmitHandler,
  selectionChangeHandler,
}) => {
  const selections = [
    { key: "spacer1", value: "spacer" },
    { key: "movie", value: "Movies" },
    { key: "multi", value: "Multi" },
    { key: "tv", value: "TV Shows" },
    { key: "spacer2", value: "spacer" },
  ];
  const handleSelection = (item) => {
    selectionChangeHandler(item);
  };

  return (
    <View style={styles.form_container}>
      <View>
        <FormLabel
          label="Search Movies/TV Show Name"
          isImportant={true}
        />
        <SearchField
          placeholder="i.e. James Bond, CSI"
          onChangeHandler={onChangeHandler}
        />
      </View>
      <FormLabel
        label="Choose Search Type"
        isImportant={true}
      />
      <View style={styles.subform_container}>
        <Picker
          data={selections}
          handleSelection={handleSelection}
          initial={2}
        />
        <Button
          onPress={onFormSubmitHandler}
          label={"Search"}
          icon={
            <Entypo
              name="magnifying-glass"
              size={20}
              color={"white"}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form_container: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    gap: 10,
  },
  dropdown_style: {
    width: "40%",
  },
  subform_container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

export default SearchForm;
