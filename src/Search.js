import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Sizes } from "../Constants/Constants";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import axios from "axios";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      axios
        .get(`https://api.tvmaze.com/search/shows?q=all`)
        .then((response) => {
          //   console.log(response.data);
          setMovieData(response.data);
        });
    };
    fetchArticles();
  }, []);
  const [filterData, setfilterData] = useState();
  const searchFilter = (text) => {
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = movieData.filter(function (item) {
        const itemData = item.show.name
          ? item.show.name.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setfilterData(movieData);
      setSearch(text);
    }
  };
  useEffect(() => {}, [search]);
  const regex = /(<([^>]+)>)/gi;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://media.gettyimages.com/photos/bearded-businessman-against-gray-background-picture-id1179627332?s=612x612",
            }}
            style={{
              height: 30,
              width: 30,
              borderRadius: 10,
              marginLeft: 20,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        style={{
          width: "90%",
          alignSelf: "center",
          alignItems: "center",
          color: "black",
          backgroundColor: "white",
          borderRadius: 3,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginTop: 30,
        }}
        placeholder="Search"
        placeholderTextColor={"grey"}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        data={filterData}
        keyExtractor={(item) => item.show.id}
        style={{ paddingTop: 30 }}
        ListFooterComponent={() => {
          return (
            <View style={{ marginBottom: 70 }}>
              <Text></Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                width: Sizes.width - 20,
                marginBottom: 10,
                elevation: 15,
                backgroundColor: "#2d2d2d",
                paddingVertical: 10,
                marginHorizontal: 10,
                borderRadius: 10,
                paddingHorizontal: 10,
                flexDirection: "row",
              }}
              onPress={() =>
                props.navigation.navigate("Details", { item: item })
              }
            >
              <Image
                source={{ uri: item.show.image.original }}
                style={{ width: "30%", height: 150 }}
              />
              <View style={{ paddingHorizontal: 5 }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                >
                  {item.show.name}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  {item.show.genres?.map((genres) => {
                    return (
                      <View
                        key={genres}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: 3,
                        }}
                      >
                        <Octicons
                          name="primitive-dot"
                          size={15}
                          color="white"
                        />
                        <Text
                          style={{ color: "white", fontSize: 15, margin: 3 }}
                        >
                          {genres}
                        </Text>
                      </View>
                    );
                  })}
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    margin: 3,
                    maxWidth: "80%",
                  }}
                  numberOfLines={5}
                  ellipsizeMode="tail"
                >
                  {item.show.summary.replace(regex, "")}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    marginTop: 40,
  },
  textInput: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    color: "black",
    backgroundColor: "white",
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 30,
  },
});
