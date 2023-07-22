import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

export default function CoffeeCard(props) {
  const { image, name } = props.item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { ...props.item })}
      style={styles.coffeeCard}
    >
      <Image source={image} />
      <Text style={styles.coffeeName}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = require("../styles");
