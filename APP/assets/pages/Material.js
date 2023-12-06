import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { raw_material } from '../../data';
import Card_mat from '../../components/Card_mat';
// import { FlatList } from 'react-native-gesture-handler';

const Material = () => {
  return (
    <View>
      <FlatList data={raw_material}
        renderItem={({ item }) => <Card_mat name={item.name} desc1={item.desc1} desc2={item.desc2} link={item.link} />}
        />
    </View>
  );
}

export default Material

const styles = StyleSheet.create({})