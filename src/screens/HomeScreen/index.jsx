import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";

const HomeScreen = () => {
  return (
    <View style={styles.page}>
     <ProductItem />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingVertical: 50
  },
});

export default HomeScreen;
