import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Colors = {
  backgroundColor: "black",
  red: "#E50914",
  grey: "#595959",
  darkgrey: "#181818",
  lightgrey: "#232323",
  white: "#FFFFFF",
};

const Sizes = {
  height: height,
  width: width,
  padding: 10,
  margin: 10,
};

const Fonts = StyleSheet.create({
  title: {
    fontFamily: "DMSans-Bold",
    fontSize: 24,

    color: Colors.white,
  },
  header: {
    fontFamily: "DMSans-Bold",
    fontSize: 18,
    textAlign: "center",
    color: Colors.white,
  },
  summary: {
    fontFamily: "DMSans-Regular",
    fontSize: 14,
    textAlign: "left",
    color: Colors.white,
  },
});

export { Colors, Sizes, Fonts };
