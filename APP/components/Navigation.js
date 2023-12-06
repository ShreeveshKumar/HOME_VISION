import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Navigation = () => {
  const navigation = useNavigation(); // Move useNavigation inside the functional component

  return (
    <View>
      <View style={styles.container1}>
        <TouchableOpacity
          style={[styles.button1, tw`bg-black`]}
          onPress={() => {
            navigation.navigate("Add");
          }}
        >
          <Text style={tw`text-white`}>ADD</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button1, tw`bg-black`]}
          onPress={() => {
            navigation.navigate("Show");
          }}
        >
          <Text style={tw`text-white`}>SHOW</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity
          style={[styles.button1, tw`bg-black`]}
          onPress={() => {
            navigation.navigate("Contact");
          }}
        >
          <Text style={tw`text-white`}>CONTACT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button1, tw`bg-black`]}
          onPress={() => {
            navigation.navigate("Cost");
          }}
        >
          <Text style={tw`text-white`}>COST</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <TouchableOpacity
          style={[styles.button1, tw`bg-black`]}
          onPress={() => {
            navigation.navigate("Material");
          }}
        >
          <Text style={tw`text-white`}>MATERIALS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "white",
    margin: 4,
  },
  button1: {
    width: "25%",
    height: 80,
    margin: 5,
    color: "white",
    backgroundColor: "blue",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
});
