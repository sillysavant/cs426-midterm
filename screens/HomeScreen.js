import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import LoyaltyCard from "../components/loyaltyCard";
import CoffeeCard from "../components/coffeeCard";
import { coffeeItems } from "../data";

export default function HomeScreen() {
  const getMenuItems = coffeeItems.map((item) => {
    return <CoffeeCard key={item.id} item={item} />;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.userBar}>
        <View style={styles.userGreets}>
          <Text style={styles.greetings}>Good morning</Text>
          <Text style={styles.username}>Anderson</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image source={require("../assets/icons/cart.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 20 }}
              source={require("../assets/icons/profile.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 15, width: "90%" }}>
        <LoyaltyCard />
      </View>

      <View style={styles.menu}>
        <Text style={styles.menuTitle}>Choose your coffee</Text>

        <View style={styles.menuItems}>{getMenuItems}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = require("../styles");
