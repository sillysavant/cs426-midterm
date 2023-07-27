import React, { useContext, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { GlobalArrayContext } from "../context/GlobalArrayContext";
import cupOrder from "../assets/icons/cup_ongoing.png";
import addressIcon from "../assets/icons/address.png";

export default function RecordScreen() {
  const [active, setActive] = useState(0);
  const { profile, ongoing, setOnGoing, history, setHistory } =
    useContext(GlobalArrayContext);

  const moveOngoingToHistory = (item) => {
    setOnGoing((prevOngoing) =>
      prevOngoing.filter((ongoingItem) => ongoingItem !== item)
    );
    setHistory((prevHistory) => [...prevHistory, item]);
  };

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

  const getActiveColor = () => {
    return active === 0 ? "#324A59" : "rgba(50, 74, 89, 0.5)";
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ width: "100%", marginTop: 30 }}
        onPress={() => {
          if (active === 1) return;
          moveOngoingToHistory(item);
        }}
        disable={active === 1 ? true : false}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                color: "rgba(50, 74, 89, 0.22)",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 14,
              }}
            >
              {formatTimestamp(item.timestamp)}
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 4,
                alignItems: "center",
                gap: 9,
              }}
            >
              <Image source={cupOrder} />
              <Text
                style={{
                  color: getActiveColor(),
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: 13,
                }}
              >
                {item.name}
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: getActiveColor(),
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 17,
            }}
          >
            ${item.total.toFixed(2)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 9,
            marginTop: 8,
          }}
        >
          <Image source={addressIcon} />
          <Text
            style={{
              color: getActiveColor(),
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 13,
            }}
          >
            {profile.address}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const getIdentifier = () => {
    return (
      <View
        style={{
          height: 2,
          width: 100,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: "#324A59",
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Order</Text>
      <View
        style={{
          width: "100%",
          borderBottomColor: "#F4F5F7",
          borderBottomWidth: 1,
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => setActive(0)}
          >
            <Text style={active === 0 ? styles.activeTab : styles.inactiveTab}>
              On going
            </Text>
            {active === 0 && getIdentifier()}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => setActive(1)}
          >
            <Text style={active === 1 ? styles.activeTab : styles.inactiveTab}>
              History
            </Text>
            {active === 1 && getIdentifier()}
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={active === 0 ? ongoing : history}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: "85%" }}
      />
    </SafeAreaView>
  );
}

const styles = require("../styles");
