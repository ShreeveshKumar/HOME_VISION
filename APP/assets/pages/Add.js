import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Add = () => {
  return (
    <View>
      <View>
        <Text style={styles.add_title}>Enter your blueprint</Text>
      </View>
      <View>
        <Button title="click me" />
      </View>
      <Button
        title="go to home"
        // onPress={() => {
        //   navigation.navigate("Home");
        // }}
      />
      <GestureHandlerRootView>
        <ImagePickerComponent />
      </GestureHandlerRootView>
    </View>
  );
};
const ImagePickerComponent = () => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    ImagePicker.launchImageLibrary =
      ImagePicker.launchImageLibrary ?? ImagePicker.default.launchImageLibrary;
  }, []);

  const pickImage = async () => {
    try {
      if (!ImagePicker.launchImageLibrary) {
        throw new Error("ImagePicker not initialized");
      }

      let options = {
        mediaType: "photo",
        storageOptions: {
          path: "images",
        },
      };

      const response = await ImagePicker.launchImageLibrary(options);

      if (response.error) {
        console.error("ImagePicker Error: ", response.error);
      } else if (!response.didCancel) {
        if (response.assets && response.assets.length > 0) {
          setSelectedImage(response.assets[0].uri);
          console.log("Selected Image URI: ", response.assets[0].uri);
        }
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error in picking image: ", error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={pickImage}>
        <Text>Please choose your Blueprint</Text>
      </TouchableOpacity>
      {selectedImage !== "" && (
        <View>
          <Image
            source={{ uri: selectedImage }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  add_title: {
    color: "red",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Add;
