import { View, Text } from "react-native";
import Item from "./Item";
import { useNavigation } from "@react-navigation/native";

const List = ({ items, itemsType, searchType }) => {
  const navigation = useNavigation();

  const nagivateToDetails = (item) => {
    if (itemsType === "search" && searchType === "multi") {
      if (item.media_type === "movie") {
        return navigation.navigate("Details", {
          id: item.id,
          type: "movies",
        });
      } else if (item.media_type === "tv") {
        return navigation.navigate("Details", { id: item.id, type: "shows" });
      }
    }

    navigation.navigate("Details", { id: item.id, type: itemsType });
  };

  return (
    <>
      {items && items.length > 0 ? (
        items.map((item) => (
          <Item
            key={item.id}
            data={item}
            onPress={() => nagivateToDetails(item)}
          />
        ))
      ) : (
        <Text>No available data</Text>
      )}
    </>
  );
};

export default List;
