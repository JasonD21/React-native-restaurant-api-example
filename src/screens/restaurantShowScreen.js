import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const restaurantShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data)
  };
  useEffect(() =>{
    getRestaurant(id);
  }, [])

  if (!result){
      return null;
  }

  return (
    <View>
      <Text style= {styles.Title}>{result.name}</Text>
      <FlatList
        data = {result.photos}
        keyExtractor= {(photo) => photo}
        renderItem= {({item}) => {
            return <Image style= {styles.Image} source = {{uri: item}}/>
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
    Image:{
        height: 200,
        width: 300

    }
});

export default restaurantShowScreen;
