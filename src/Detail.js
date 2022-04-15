import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Colors, Sizes } from "../Constants/Constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import axios from "axios";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import { NavigationHelpersContext } from "@react-navigation/native";
import DetailList from "../Components/DetailList";

const Detail = (props) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  useEffect(() => {
    const similarMovies = async () => {
      const movies = await axios.get("https://api.tvmaze.com/shows");
      setSimilarMovies(movies.data);
      console.log(movies.data);
    };
    similarMovies();
  }, []);
  const item = props.route.params;

  return (
    <ScrollView
      style={{
        backgroundColor: Colors.backgroundColor,
        marginTop: 40,
        height: Sizes.height,
        width: Sizes.width,
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
        {/* <Image
          style={{ height: 50, width: 50 }}
          source={{
            uri: "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-N-Symbol-logo-red-transparent-RGB-png.png",
          }}
        /> */}
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
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

      <View>
        <Image
          style={{ height: 200, width: Sizes.width, resizeMode: "cover" }}
          source={{ uri: item.image.original }}
        />
        <View
          style={{
            backgroundColor: "#101010cc",
            borderRadius: 20,
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <MaterialCommunityIcons name="volume-mute" size={24} color="white" />
        </View>
        <View
          style={{
            backgroundColor: "#101010cc",
            borderRadius: 2,
            position: "absolute",
            bottom: 10,
            width: 60,
            alignItems: "center",
            justifyContent: "center",
            left: 10,
          }}
        >
          <Text style={{ color: "white" }}>Preview</Text>
        </View>

        <ProgressBar progress={0.4} color={"red"} style={{ marginTop: 20 }} />
      </View>

      <Text
        style={{
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
          marginTop: Sizes.margin,
        }}
      >
        {item.name}
      </Text>
      <View style={{ flexDirection: "row", marginTop: Sizes.margin }}>
        <Text style={{ color: "white" }}>{item.type}</Text>
        <Text
          style={{
            color: "white",
            backgroundColor: Colors.grey,
            borderRadius: 2,
            marginLeft: 10,
            width: 55,
          }}
        >
          U/A 13+
        </Text>
        <Text style={{ color: "white", paddingLeft: Sizes.padding }}>
          {item.network.country.name}
        </Text>
        <Text
          style={{
            color: "white",
            backgroundColor: "grey",
            borderRadius: 2,
            marginLeft: 10,
            // width: 55,
            fontWeight: "bold",
          }}
        >
          HD
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: Sizes.width - 30,
          height: 50,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          alignSelf: "center",
          borderRadius: 7,
          marginTop: 10,
        }}
      >
        <FontAwesome5 name="play" size={24} color="black" />
        <Text style={{ fontWeight: "bold", paddingLeft: 10 }}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: Sizes.width - 30,
          height: 50,
          backgroundColor: Colors.lightgrey,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          alignSelf: "center",
          borderRadius: 7,
          marginTop: 10,
        }}
      >
        <Ionicons name="download-outline" size={24} color="white" />
        <Text style={{ fontWeight: "bold", paddingLeft: 10, color: "white" }}>
          Download
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: "white",
          paddingLeft: Sizes.padding + 10,
          paddingTop: 10,
        }}
      >
        {item.summary.replace(/(<([^>]+)>)/gi, "")}
      </Text>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ marginLeft: Sizes.margin + 40, marginTop: Sizes.margin }}
        >
          <AntDesign name="plus" size={24} color="white" style={{ left: 10 }} />
          <Text style={{ color: "grey", paddingTop: 5 }}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: Sizes.margin + 60, marginTop: Sizes.margin }}
        >
          <SimpleLineIcons name="like" size={24} color="white" />
          <Text style={{ color: "grey", paddingTop: 5 }}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: Sizes.margin + 60, marginTop: Sizes.margin }}
        >
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color="white"
          />
          <Text style={{ color: "grey", paddingTop: 5 }}>Info</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          padding: Sizes.padding,
          fontSize: 20,
        }}
      >
        More Like This
      </Text>
      <View>
        <DetailList data={similarMovies.slice(10, 20)} />
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
