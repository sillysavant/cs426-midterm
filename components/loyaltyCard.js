import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { GlobalArrayContext } from "../context/GlobalArrayContext";

export default function LoyaltyCard() {
  const { profile, setProfile } = useContext(GlobalArrayContext);
  const getCupsBought = Array.from({ length: profile.loyalty }, (_, index) => {
    return (
      <Image key={index} source={require("../assets/icons/cup_solid.png")} />
    );
  });

  const getCupsLeft = Array.from(
    { length: 8 - profile.loyalty },
    (_, index) => {
      return (
        <Image
          key={index}
          source={require("../assets/icons/cup_outline.png")}
        />
      );
    }
  );

  const resetLoyalty = () => {
    if (profile.loyalty === 8) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        loyalty: 0,
      }));
    }
  };

  return (
    <TouchableOpacity style={styles.loyaltyCard} onPress={resetLoyalty}>
      <View style={styles.loyaltyCardHeader}>
        <Text style={styles.title}>Loyalty Card</Text>
        <Text style={styles.title}>{profile.loyalty}/8</Text>
      </View>
      <View>
        <View style={styles.cardRecords}>
          <View style={{ flexDirection: "row", gap: 4 }}>{getCupsBought}</View>
          <View style={{ flexDirection: "row", gap: 4 }}>{getCupsLeft}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = require("../styles");
