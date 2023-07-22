import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DetailScreen(props) {
  const navigation = useNavigation();
  const item = props.route.params;
  const [details, setDetails] = useState({
    name: item.name,
    image: item.image,
    quantity: 1,
    shot: -1,
    select: 1,
    size: 1,
    ice: 2,
  });

  const getTotal = () => {
    let sizeFee;
    if (item.size === 0) {
      sizeFee = -0.5;
    } else if (item.size === 2) {
      sizeFee = 0.5;
    }

    return (item.quantity * (3.0 + sizeFee)).toFixed(2);
  };

  const handleIncreaseQuantity = () => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      quantity: prevDetails.quantity + 1,
    }));
  };

  const handleDecreaseQuantity = () => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      quantity: prevDetails.quantity - 1,
    }));
  };

  const disabledButtonStyle = {
    color: "#D8D8D8",
    fontFamily: "DMSans",
    fontSize: 18,
    fontWeight: 500,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/icons/back_arrow.png")} />
        </TouchableOpacity>
        <Text style={styles.header}>Details</Text>
        <TouchableOpacity>
          <Image source={require("../assets/icons/cart.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.cover}>
        <Image source={item.image} />
      </View>
      <View style={styles.detailContent}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.detail}>
            <Text style={styles.detailName}>{item.name}</Text>
            <View style={styles.quantityButton}>
              <TouchableOpacity
                disabled={details.quantity === 1 ? true : false}
                onPress={handleDecreaseQuantity}
              >
                <Text
                  style={
                    details.quantity === 1
                      ? disabledButtonStyle
                      : styles.quantity
                  }
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{details.quantity}</Text>
              <TouchableOpacity onPress={handleIncreaseQuantity}>
                <Text style={styles.quantity}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = require("../styles");
