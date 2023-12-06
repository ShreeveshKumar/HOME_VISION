import React from "react";
import tw from "twrnc";
import { View, Text } from "react-native";

const Navbar = () => {
  return (
    <View style={tw`flex-1 flex-row justify-between bg-white p-5 `}>
      <View style={tw`text-white`}>
      </View>
      <Text style={tw`text-black text-lg font-bold border-gray-500 border-b-2`}>  Home-Vision  </Text>
      <Text style={tw`text-black text-sm`}></Text>
    </View>
  );
};

export default Navbar;
