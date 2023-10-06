import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TVShowScreen from "../screens/TVShowScreen";
import DetailsScreen from "../screens/DetailsScreen";

export default function Navigator() {
  const Tab = createMaterialTopTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Movies App"
          options={{
            headerStyle: { backgroundColor: "#273646" },
            headerTintColor: "#FFFFFF",
            title: "Movies App",
            headerTitleAlign: "center",
          }}
        >
          {() => (
            <Tab.Navigator
              initialRouteName="Movie"
              screenOptions={{
                tabBarLabelStyle: { textTransform: "none" },
                tabBarActiveTintColor: "#273646",
                tabBarIndicatorStyle: { backgroundColor: "#273646" },
              }}
            >
              <Tab.Screen
                name="Movie"
                component={HomeScreen}
                options={{ tabBarLabel: "Movies" }}
              />
              <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{ tabBarLabel: "Search Results" }}
              />
              <Tab.Screen
                name="TV Show"
                component={TVShowScreen}
                options={{ tabBarLabel: "TV Shows" }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            headerStyle: { backgroundColor: "#FFFFFF" },
            headerTintColor: "#273646",
            headerTitleAlign: "center",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
