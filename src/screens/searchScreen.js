import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/searchBar";
import useResults from "../hooks/useResults";
import RestaurantList from "../components/restaurantList";

const searchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterRestaurants = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <RestaurantList
          header="Cost Effective"
          results={filterRestaurants("$")}
        />
        <RestaurantList
          header="Bit Pricier"
          results={filterRestaurants("$$")}
        />
        <RestaurantList
          header="Big Spender"
          results={filterRestaurants("$$$")}
        />
        <RestaurantList
          header="Millionaire"
          results={filterRestaurants("$$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default searchScreen;
