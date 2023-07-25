import React, { useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import LoyaltyCard from "../components/loyaltyCard";
import CoffeeCard from "../components/coffeeCard";
import { coffeeItems } from "../data";
import { useNavigation } from "@react-navigation/native";
import { GlobalArrayContext } from "../context/GlobalArrayContext";

export default function HomeScreen() {
  const getMenuItems = coffeeItems.map((item) => {
    return <CoffeeCard key={item.id} item={item} />;
  });
  const navigation = useNavigation();
  const { profile } = useContext(GlobalArrayContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.userBar}>
        <View style={styles.userGreets}>
          <Text style={styles.greetings}>Good morning</Text>
          <Text style={styles.username}>{profile.name}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image source={require("../assets/icons/cart.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
