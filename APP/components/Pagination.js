import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pagination = ({data}) => {
  return (
    <View style={styles.container}>
          {
              data.map((_, idx) => {
                  return <View key={idx.toString()}  style={styles.dot}  />
              })
     }
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    conatiner: {
        // position: 'absolute',
        // bottom: 50,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent:'center'
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 10,
        backgroundColor:'#ccc'
    }
})