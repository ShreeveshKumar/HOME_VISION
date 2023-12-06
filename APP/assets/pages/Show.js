import React, { useRef, useState } from "react";
import {
  Button,
  Linking,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Model from "../../components/Model";

// import UnityView from 'react-native-unity-view';



const Show = () => {
  
  

//   const screenWidth = Dimensions.get('window').width;
//   const [active, setActive] = useState('');


  // return (
    // <UnityView
    //   style={{ flex: 1 }}
    //   onMessage={(message) => console.log("Message from Unity:", message)}
    //   source={{
    //     name: 'MyModelScene',
    //     asset: 'MyModelFolder/MyModelFile',
    //   }}
    // />
//   );
}


const Showstyle = StyleSheet.create({
  first: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  Box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  models: {
    width: 400,
    height: 200,
  },
});

export default Show;
