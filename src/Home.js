import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors, Sizes } from "../Constants/Constants";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import Movies from "../Components/Movies";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await axios.get("https://api.tvmaze.com/shows");
      // console.log(movies.data);
      setMovies(movies.data);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <ScrollView style={{ marginTop: 40 }}>
      {loading ? (
        <View
          style={{
            flex: 1,
            height: Sizes.height,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.backgroundColor,
          }}
        >
          <ActivityIndicator size={"large"} color="red" />
          <Text style={{ color: "white" }}>Loading...</Text>
        </View>
      ) : (
        <>
          <ImageBackground
            style={{
              height: 450,
              width: Sizes.width,
              resizeMode: "cover",
            }}
            source={{
              uri: "https://i.pinimg.com/736x/29/83/f3/2983f36c21368447b4c2e213592e5ee6.jpg",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: Sizes.padding,
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={{
                  uri: "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-N-Symbol-logo-red-transparent-RGB-png.png",
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Search");
                  }}
                >
                  <Feather
                    name="search"
                    size={20}
                    color="white"
                    style={{ paddingRight: 20 }}
                  />
                </TouchableOpacity>
                <Image
                  resizeMode="cover"
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 5,
                  }}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphqmpunOcktIYDIfRzoWH76GnevhjUbgkw-KYFu2mT0uIavZDs4V_Ekyl_c8UTE95wX4&usqp=CAU",
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: Sizes.width,
                padding: Sizes.padding,
              }}
            >
              <TouchableOpacity
                style={{ width: "30%", marginLeft: Sizes.padding + 30 }}
              >
                <Text
                  style={{
                    fontFamily: "Regular-Text",
                    fontSize: 14,
                    color: Colors.white,
                  }}
                >
                  TV Shows
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: "25%" }}>
                <Text
                  style={{
                    fontFamily: "Regular-Text",
                    fontSize: 14,
                    color: Colors.white,
                  }}
                >
                  Movies
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: "22%",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "Regular-Text",
                      fontSize: 14,
                      color: Colors.white,
                    }}
                  >
                    Categories
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    bottom: 6,
                    // paddingLeft: 5,
                  }}
                >
                  <FontAwesome5
                    name="sort-down"
                    size={18}
                    color="white"
                    style={{ paddingLeft: 10, top: 3 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{ top: 300, left: 110, position: "absolute", zIndex: 10 }}
            >
              <Text style={{ color: "white", fontSize: 30 }}>HOME ALONE</Text>
              <Text style={{ color: "white", right: 50 }}>
                {"      "}Action {"     *      "}Thriller {"      *      "}
                Comedy
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ top: 20, right: 40 }}>
                  <AntDesign
                    name="plus"
                    size={24}
                    color="white"
                    style={{ left: 10 }}
                  />
                  <Text style={{ color: "white" }}>My List</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 80,
                    backgroundColor: "white",
                    flexDirection: "row",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    top: 25,
                    borderRadius: 5,
                    right: 5,
                  }}
                >
                  <Entypo name="controller-play" size={24} color="black" />
                  <Text
                    style={{
                      color: "black",
                      paddingLeft: 5,
                      fontWeight: "bold",
                    }}
                  >
                    Play
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ top: 20, left: 40 }}>
                  <MaterialCommunityIcons
                    name="information-outline"
                    size={24}
                    color="white"
                  />
                  <Text style={{ color: "white" }}>Info</Text>
                </TouchableOpacity>
              </View>
            </View>
            <LinearGradient
              colors={["#10101000", "#10101099", "#101010bb", "#101010"]}
              style={{
                height: 90,
                top: 251,
              }}
            ></LinearGradient>
          </ImageBackground>

          <Movies
            data={movies.slice(0, 20)}
            title="Action"
            setSelectedId={setSelectedId}
            navigation={props.navigation}
            selectedId={selectedId}
          />
          <Movies
            data={movies.slice(21, 40)}
            title="Thriller"
            setSelectedId={setSelectedId}
            navigation={props.navigation}
            selectedId={selectedId}
          />
          <Movies
            data={movies.slice(100, 200)}
            title="Drama"
            setSelectedId={setSelectedId}
            navigation={props.navigation}
            selectedId={selectedId}
          />
          <Movies
            data={movies.slice(150, 170)}
            title="Trending Now"
            setSelectedId={setSelectedId}
            navigation={props.navigation}
            selectedId={selectedId}
          />
          <Movies
            data={movies.slice(51, 71)}
            title="Comedy"
            setSelectedId={setSelectedId}
            navigation={props.navigation}
            selectedId={selectedId}
          />
        </>
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  entertainment_text: {},
});
