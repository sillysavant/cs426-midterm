import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { GlobalArrayContext } from "../context/GlobalArrayContext";
import { Swipeable } from "react-native-gesture-handler";
import deleteIcon from "../assets/icons/delete.png";

export default function CartScreen() {
  const navigation = useNavigation();
  const { myCart, setMyCart, setProfile, setHistory, profile } =
    useContext(GlobalArrayContext);

  const getTotalPrice = () => {
    let totalPrice = 0;
    myCart.map((item) => {
      totalPrice = totalPrice + item.total;
    });
    return totalPrice;
  };

  const checkoutOrder = () => {
    const cartCopy = [...myCart];
    const expandedCart = [];
    const currentDate = new Date();

    cartCopy.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        const newItem = {
          name: item.name,
          total: item.total,
          timestamp: currentDate.getTime(),
        };
        expandedCart.push({ ...newItem });
        addLoyalty();
        addPoint();
      }
    });
    setHistory((prevHistory) => [...prevHistory, ...expandedCart]);
    setMyCart([]);
    navigation.navigate("Checkout");
  };

  const addLoyalty = () => {
    if (profile.loyalty < 8) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        loyalty: prevProfile.loyalty + 1,
      }));
    }
  };

  const addPoint = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      point: prevProfile.point + 12,
    }));
  };

  const renderItem = ({ item }) => {
    const handleDelete = (id) => {
      const updatedCart = myCart.filter((item) => item.id !== id);
      setMyCart(updatedCart);
    };
    const renderRightActions = () => {
      return (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Image source={deleteIcon}></Image>
        </TouchableOpacity>
      );
    };

    const printShot = (item) => {
      if (item.shot === 1) {
        return <Text>double</Text>;
      } else {
        return <Text>single</Text>;
      }
    };

    const printSelect = (item) => {
      if (item.select === 0) {
        return <Text>hot</Text>;
      } else {
        return <Text>iced</Text>;
      }
    };

    const printSize = (item) => {
      if (item.size === 0) {
        return <Text>small</Text>;
      } else if (item.size === 1) {
        return <Text>medium</Text>;
      } else {
        return <Text>large</Text>;
      }
    };

    const printIce = (item) => {
      if (item.ice === 0) {
        return <Text>little ice</Text>;
      } else if (item.ice === 1) {
        return <Text>half ice</Text>;
      } else {
        return <Text>full ice</Text>;
      }
    };

    return (
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.cartItem}>
          <Image source={item.image} style={{ height: 61, width: 82 }} />
          <View>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemDetails}>
              {printShot(item)} | {printSelect(item)} | {printSize(item)} |{" "}
              {printIce(item)}
            </Text>
            <Text style={styles.cardItemQuantity}>x{item.quantity}</Text>
          </View>
          <Text style={styles.cardItemTotal}>${item.total.toFixed(2)}</Text>
        </View>
      </Swipeable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          alignSelf: "flex-start",
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/icons/back_arrow.png")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          alignSelf: "flex-start",
          marginTop: 10,
        }}
      >
        <Text style={styles.cartHeader}>My Cart</Text>
      </View>

      <FlatList
        data={myCart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
      />

      <View style={styles.checkout}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.totalText}>Total Price</Text>
          <Text style={styles.priceText}>${getTotalPrice().toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={checkoutOrder}>
          <Image source={require("../assets/icons/cart_white.png")} />
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = require("../styles");
