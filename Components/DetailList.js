import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sizes } from "../Constants/Constants";

const DetailList = ({ data }) => {
  //   const [similarMovies, setSimilarMovies] = useState([]);
  //   useEffect(() => {
  //     const similarMovies = async () => {
  //       const movies = await axios.get("https://api.tvmaze.com/shows");
  //       setSimilarMovies(movies.data);
  //       console.log(movies.data);
  //     };
  //     similarMovies();
  //   }, []);

  return (
    <View>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{ paddingLeft: 10, alignSelf: "center" }}>
              <Image
                style={{ height: 200, width: 100, resizeMode: "contain" }}
                source={{ uri: item.image.original }}
              />
              <Text style={{ color: "white" }}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default DetailList;

const styles = StyleSheet.create({});
