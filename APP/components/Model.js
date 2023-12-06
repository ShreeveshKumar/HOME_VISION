import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { models } from "../data";
import SliderItem from "./SliderItem";

const Model = () => {
  const flatlistref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ITEM_WIDTH = 400; // Replace this with the actual width of your item

  const getItemLayout = (_, index) => ({
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * index,
    index,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatlistref.current) {
        const nextIndex = (currentIndex + 1) % models.length;
        flatlistref.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        setCurrentIndex(nextIndex);
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View>
      <FlatList
        data={models}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        pagingEnabled={true}
        ref={flatlistref}
        getItemLayout={getItemLayout}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={currentIndex}
      />
    </View>
  );
};

export default Model;

const styles = StyleSheet.create({});
