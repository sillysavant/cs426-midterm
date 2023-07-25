import React from "react";
import { View, Text, Image } from "react-native";
import { user } from "../data";

export default function LoyaltyCard() {
  const getCupsBought = Array.from({ length: user.loyalty }, (_, index) => {
    return (
      <Image key={index} source={require("../assets/icons/cup_solid.png")} />
    );
  });

  const getCupsLeft = Array.from({ length: 8 - user.loyalty }, (_, index) => {
    return (
      <Image key={index} source={require("../assets/icons/cup_outline.png")} />
    );
  });

  return (
    <View style={styles.loyaltyCard}>
      <View style={styles.loyaltyCardHeader}>
        <Text style={styles.title}>Loyalty Card</Text>
        <Text style={styles.title}>4/8</Text>
      </View>
      <View>
        <View style={styles.cardRecords}>
          <View style={{ flexDirection: "row", gap: 4 }}>{getCupsBought}</View>
          <View style={{ flexDirection: "row", gap: 4 }}>{getCupsLeft}</View>
        </View>
      </View>
    </View>
  );
}

const styles = require("../styles");
