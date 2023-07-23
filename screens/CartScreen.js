import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
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

export default function CartScreen() {
  const navigation = useNavigation();
  const { myCart, setMyCart } = useContext(GlobalArrayContext);
  const [tempCart, setTempCart] = useState(myCart);

  const renderItem = ({ item }) => {
    const handleDelete = (id) => {
      // Implement your delete logic here
      console.log("Delete item with ID:", id);
    };
    const renderRightActions = () => {
      return (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable renderRightActions={renderRightActions}>
        <View style={{ width: "90%", marginLeft: 20 }}>
          <Text>{item.name}</Text>
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
        data={tempCart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
      />
    </SafeAreaView>
  );
}
const styles = require("../styles");
