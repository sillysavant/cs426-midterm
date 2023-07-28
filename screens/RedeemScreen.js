import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { GlobalArrayContext } from "../context/GlobalArrayContext";
import { redeemItems } from "../data";
import { useNavigation } from "@react-navigation/native";

export default function RedeemScreen() {
  const [redeemable, setRedeemable] = useState(true);
  const { profile, setOnGoing, setProfile } = useContext(GlobalArrayContext);
  const navigation = useNavigation();

  useEffect(() => {
    setRedeemable(profile.point >= 1370);
  }, [profile.point]);

  const renderItem = ({ item }) => {
    const handleRedeem = () => {
      if (item.worth <= profile.point) {
        const currentDate = new Date();
        setOnGoing((prevOngoing) => [
          ...prevOngoing,
          { name: item.name, total: 0, timestamp: currentDate },
        ]);
        setProfile((prevProfile) => ({
          ...prevProfile,
          point: prevProfile.point - item.worth,
        }));
      }
    };

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          marginTop: 30,
        }}
      >
        <Image source={item.image} style={{ width: 70, height: 52 }} />
        <View style={{ marginLeft: 12 }}>
          <Text
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 18,
              color: "#324A59",
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 14,
              color: "rgba(50, 74, 89, 0.5)",
              marginTop: 3,
            }}
          >
            Valid until {item.validDate}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginLeft: 45,
            backgroundColor: redeemable ? "#324A59" : "#F7F8FB",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 11,
            borderRadius: 30,
            paddingHorizontal: 15,
          }}
          disabled={!redeemable}
          onPress={handleRedeem}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 13,
              color: redeemable ? "#FFFFFF" : "rgba(50, 74, 89, 0.5)",
            }}
          >
            {item.worth} pts
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const btnBackground = () => {
    return redeemable ? "#324A59" : "#F7F8FB";
  };

  const btnText = () => {
    return redeemable ? "#FFFFFF" : "rgba(50, 74, 89, 0.5)";
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 110,
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/icons/back_arrow.png")} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: 22,
            color: "#001833",
          }}
        >
          Redeem
        </Text>
      </View>

      <FlatList
        data={redeemItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = require("../styles");
