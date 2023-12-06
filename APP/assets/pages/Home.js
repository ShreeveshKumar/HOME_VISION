import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Navbar from "../../components/Navbar";
import tw from "twrnc";
import { slides } from "../../data";
import Slider from "../../components/Slider";
import Navigation from "../../components/Navigation";
import { Link } from 'expo-router'
import "react-native-gesture-handler";


const Home = () => {
  return (
    <View style={tw``}>
      <ScrollView>
        <StatusBar hidden={true} />
        <Navbar />
        <FrontHeader />
        <Slider />
        <Quote />
        <Navigation />
        <Footer />
      </ScrollView>
    </View>
  );
};
const FrontHeader = () => {
  return (
    <View style={tw`flex flex-row  justify-between m-5`}>
      <View>
        <Text style={tw`text-5xl font-bold mx-2`}>Design</Text>
        <Text style={tw`text-2xl  mx-2`}>your house in 3D</Text>
      </View>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/4636/4636069.png",
        }}
        style={tw`w-4/12 h-16/12`}
      />
    </View>
  );
}
const Header = () => {
  return (
    <View style={tw` m-5 rounded-lg`}>
      <Image
        source={require("../images/model-4.jpg")}
        style={tw`h-96 w-12/12 `}
      />
    </View>
  );
};

const Quote = () => {
  return (
    <View style={tw`flex m-5 items-center`}>
      <Text style={tw` italic items-center`}>
        A house is built once in a lifetime.
      </Text>
      <Text style={tw`text-lg m-5 not-italic items-center border-2 border-slate-800 p-5 rounded-md`}>
        We create 3D models of your house using your plans and examples from top
        builders. You can customize it the way you want. This helps you see your
        dream home and estimate costs easily
      </Text>
    </View>
  );
}



const Footer = () => {
  return (
    <View style={tw`items-center`}>
      <Text style={tw``}> Made by Team RealityHex </Text>
    </View>
  );
}
export default Home;
