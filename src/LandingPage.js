import {
  StyleSheet,
  Text,
  View,
  Image,
  BackgroundImage,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors, Sizes, Fonts } from "../Constants/Constants";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const LandingPage = (props) => {
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundColor,
        height: Sizes.height,
        width: Sizes.width,
        marginTop: 40,
      }}
    >
      <Image
        style={{
          width: Sizes.width,
          height: Sizes.height,
          position: "absolute",
        }}
        resizeMode="cover"
        source={{
          uri: "https://heraldjournalism.com/wp-content/uploads/2020/03/Screenshot-2020-05-02-at-6.44.13-AM.png",
        }}
      />
      <View
        style={{
          width: Sizes.width,
          height: Sizes.height,
          position: "absolute",
          zIndex: 10,
          backgroundColor: "#10101099",
        }}
      ></View>
      <LinearGradient
        colors={["#101010", "#101010bb", "#10101099", "#10101000"]}
        style={{
          height: 70,
          zIndex: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 20,
            // backgroundColor: Colors.backgroundColor,
          }}
        >
          <Image
            style={{ height: 50, width: 50, margin: Sizes.padding }}
            source={{
              uri: "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-N-Symbol-logo-red-transparent-RGB-png.png",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              padding: Sizes.padding,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  //   fontFamily: "DMSans-Bold",
                  fontSize: 14,
                  textAlign: "center",
                  color: Colors.white,
                  paddingRight: Sizes.padding + 10,
                  fontFamily: "Regular-Text",
                }}
              >
                PRIVACY
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  //   fontFamily: "DMSans-Bold",
                  fontSize: 14,
                  textAlign: "center",
                  color: Colors.white,
                  paddingRight: Sizes.padding + 10,
                  fontFamily: "Regular-Text",
                }}
              >
                SIGN IN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo
                name="dots-three-vertical"
                size={12}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <Text
        style={{
          fontSize: 35,
          zIndex: 10,
          color: Colors.white,
          fontWeight: "bold",
          textAlign: "center",
          //   justifyContent: "center",
          //   alignItems: "center",
          position: "absolute",
          bottom: 300,
          fontFamily: "Regular-Text",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        Unlimited {"\n"}
        entertainment, {"\n"} one low price.
      </Text>

      <Text
        style={{
          fontSize: 15,
          zIndex: 10,
          color: Colors.white,
          fontWeight: "bold",
          textAlign: "center",
          //   justifyContent: "center",
          //   alignItems: "center",
          position: "absolute",
          bottom: 250,
          fontFamily: "Regular-Text",
          justifyContent: "center",

          alignSelf: "center",
        }}
      >
        All of Netflix, starting at just Rs. 140
      </Text>

      <TouchableOpacity
        style={{
          height: 50,
          width: Sizes.width - 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.red,
          position: "absolute",
          zIndex: 10,
          bottom: 30,
          alignSelf: "center",
          borderRadius: 5,
        }}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: "Medium-Text",
            fontSize: 20,
          }}
        >
          GET STARTED
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({});
