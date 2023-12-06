import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native'
import React,{useRef, useEffect} from 'react'
import { style } from 'twrnc';



const { width } = Dimensions.get('screen');


const SliderItem = ({ item }) => {
  return (
    <View style={styles.container}>
          <Image source={item.link}  style={styles.image} />
    </View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
    container: {
        width,
        height:400,
        alignItems: 'center',
        overflow: 'hidden',
        // margin:5
    },
    image: {
        flex:1,
        width: '95%',
        height:'90%',
        resizeMode: 'contain',
        // borderRadius: 9,
        margin:15,
        
    }
})