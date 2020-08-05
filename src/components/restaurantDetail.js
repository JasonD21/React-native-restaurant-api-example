import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const restaurantDetail = (props) => {
  return (
    <View style= {styles.container}>
      <Image style={styles.Image} source={{ uri: props.result.image_url }} />
      <Text style={styles.Title}>{props.result.name}</Text>
      <Text>
        {props.result.rating} Stars, {props.result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontWeight: "bold",
  },
  Image: {
    borderRadius: 4,
    width: 250,
    height: 120,
    marginBottom: 5,
  },
  container: {
    marginLeft: 10,
  }
});

export default restaurantDetail;
