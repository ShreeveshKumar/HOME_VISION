import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { raw_material } from '../data'
import tw from 'twrnc'
// import { ScrollView } from 'react-native-gesture-handler'

const Card_mat = ({name,desc1,desc2,link}) => {
  return (
    <ScrollView
      style={tw`flex flex-row flex-wrap border-2 border-slate-600 rounded-md p-4 my-2`}
    >
      <View style={tw`flex flex-wrap `}>
        <Text style={tw``}>{name}</Text>
        <Text> Eco-Friendly Aspect : {desc1}</Text>
        <Text>Consideration: {desc2}</Text>
      </View>
      <Image source={link} style={tw`w-55 h-55 flex `} />
    </ScrollView>
  );
}

export default Card_mat

const styles = StyleSheet.create({})