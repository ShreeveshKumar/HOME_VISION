import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { style } from "twrnc";

const { width,height } = Dimensions.get("screen");

const Gallery = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.link} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
    box: {
        width: 10,
        height: 10,
     color:'black'
    },
  container: {
    width,
    height,
    alignItems: "center",
    overflow: "hidden",
    // margin:5
  },
  image: {
    flex: 1,
    width: "95%",
    height: "90%",
    resizeMode: "contain",
    // borderRadius: 9,
    margin: 15,
    },
    content: {
      alignItems:'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'#333'
    },
    desc: {
        fontSize: 10,
        marginVertical: 10,
        color:'#333'
    }

});
