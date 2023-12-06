import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";

const Cost = () => {
  return (
    <View style={styles.container}>
          {/* <Image source={require("./picture.png")} style={styles.images} /> */}
          <Text>hey</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "darkslateblue",
  },
//   images: {
//     // width: wp("100%"),
//     height: hp("100%"),
//     // borderRadius: 100,
//     margin: 10,
//   },
});

export default Cost;
