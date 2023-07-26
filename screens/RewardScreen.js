import React, { useContext } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import LoyaltyCard from "../components/loyaltyCard";
import coffeeNutSvg from "../assets/icons/coffee_nuts.png";
import { GlobalArrayContext } from "../context/GlobalArrayContext";

export default function RewardScreen() {
  const { profile, history } = useContext(GlobalArrayContext);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${day} ${month} | ${hours}:${minutes
      .toString()
      .padStart(2, "0")} ${amPm}`;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ width: "100%", alignItems: "center", marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                color: "#324A59",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: "rgba(50, 74, 89, 0.22)",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 12,
              }}
            >
              {formatTimestamp(item.timestamp)}
            </Text>
          </View>

          <Text
            style={{
              color: "#324A59",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 20,
            }}
          >
            +12 Pts
          </Text>
        </View>
        <View
          style={{
            height: 15,
            borderBottomWidth: 2,
            borderBottomColor: "#F4F5F7",
            width: "90%",
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Rewards</Text>
      <View style={{ marginTop: 20 }}>
        <LoyaltyCard />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          paddingVertical: 30,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#324A59",
          width: "90%",
          marginTop: 20,
          borderRadius: 14,
          position: "relative",
        }}
      >
        <View>
          <Text
            style={{
              color: "#D8D8D8",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            My Points:
          </Text>
          <Text
            style={{
              color: "#D8D8D8",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 24,
            }}
          >
            {profile.point}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(162, 205, 233, 0.19)",
            paddingVertical: 10,
            paddingHorizontal: 6,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#D8D8D8",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            Redeem drinks
          </Text>
        </TouchableOpacity>
        <Image
          source={coffeeNutSvg}
          style={{ position: "absolute", bottom: -24, right: -10 }}
        />
      </View>

      <Text
        style={{
          color: "#324A59",
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: 18,
          alignSelf: "flex-start",
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        History rewards
      </Text>

      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: "90%", height: 100 }}
      />
    </SafeAreaView>
  );
}

const styles = require("../styles");
