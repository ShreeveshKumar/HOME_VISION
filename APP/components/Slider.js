import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { slides } from "../data";
import SliderItem from "./SliderItem";

const Slider = () => {
  const flatlistref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatlistref.current) {
        const nextIndex = (currentIndex + 1) % slides.length;
        flatlistref.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        setCurrentIndex(nextIndex);
      }
    }, 3000); // Adjust the time interval for auto-scrolling (in milliseconds)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View>
      <FlatList
        data={slides}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        ref={flatlistref}
        initialScrollIndex={currentIndex}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
