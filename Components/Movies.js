import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors, Sizes } from "../Constants/Constants";

import axios from "axios";

const Movies = ({ title, data, navigation, setSelectedId }) => {
  //   const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     const fetchMovies = async () => {
  //       const movies = await axios.get("https://api.tvmaze.com/shows");
  //       console.log(movies.data);
  //       setMovies(movies.data);
  //     };
  //     fetchMovies();
  //   }, []);
  return (
    <View style={{ backgroundColor: Colors.backgroundColor }}>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {title}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => {
          item.id;
        }}
        // numColumns={3}
        horizontal
        // ListHeaderComponent={() => {
        //   return (

        //   );
        // }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Detail", item);
                // setSelectedId(item.id);
              }}
            >
              <View style={{ margin: 5 }}>
                <Image
                  style={{ height: 200, width: Sizes.width / 3 - 10 }}
                  source={{ uri: item.image.original }}
                />
                <Text>{item.id}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({});
