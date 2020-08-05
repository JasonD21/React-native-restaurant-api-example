import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const searchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome5 name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#DAD9D7",
    height: 40,
    borderRadius: 8,
    marginHorizontal: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default searchBar;
