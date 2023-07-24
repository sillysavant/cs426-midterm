import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import checkoutImg from "../assets/images/checkout.png";
import { useNavigation } from "@react-navigation/native";

export default function CheckoutScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.checkoutScreen}>
      <View style={styles.checkoutContent}>
        <View style={{ width: "90%", alignItems: "center", gap: 10 }}>
          <Image source={checkoutImg} />
          <Text style={message}>Order Success</Text>
          <Text style={content}>
            Your order has been placed successfully. For more details, go to my
            orders.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.addItem}
          onPress={() => navigation.navigate("records")}
        >
          <Text style={styles.addItemContent}>Track My Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = require("../styles");

const message = {
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: 24,
  color: "#181D2D",
};

const content = {
  width: "90%",
  fontFamily: "Poppins",
  fontWeight: 100,
  fontSize: 16,
  color: "#AAAAAA",
  textAlign: "center",
};
