import { View,Image, Text, StyleSheet } from "react-native";
import React from "react";

const ProductItem = () => {
  return (
  <View style={styles.root}>
    <Image style={styles.image} source={{uri: "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/341631487_174711245073022_4562818673775250407_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hf0uA8Mt63sAX-uOzMR&_nc_oc=AQm8idb7vSnrmb53iATcbIL_zv53I9OoGg8Rgg8MSUynB8xfASQexSFnQxMD8QhEZFM&_nc_ht=scontent.fcai19-3.fna&oh=00_AfARyQu28f4_RLPX5TLXFEgZA7WKLIlNaFtdtf_xNgpY3g&oe=64C50D2D"}} />
    <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
        Handy sensor HDR 500 Golden size 
        </Text>
        <View style={styles.ratings}>
            <Text>5 Stars</Text>
        </View>
        <Text style={styles.price}>from $499.9</Text >
    </View>
  </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },
  image: {
    flex: 2,
    height: 150,

  },
  rightContainer: {
    flex:3,
  },
  title: {
    fontSize:"18",
},
ratings: {
    paddingVertical:5,
    
},
price: {
    fontSize:"18",
},

});
export default ProductItem;
