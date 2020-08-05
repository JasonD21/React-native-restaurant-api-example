import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {withNavigation} from "react-navigation";
import RestaurantDetail from "../components/restaurantDetail";

const restaurantList = ({ header, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>{header} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("restaurantShow", {id: item.id})}
            >
              <RestaurantDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
    borderBottomColor: "#DAD9D7",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});

export default withNavigation(restaurantList);
