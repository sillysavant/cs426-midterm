import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import hotSolid from "../assets/icons/hot_solid.png";
import hotOutline from "../assets/icons/hot_outline.png";
import coldSolid from "../assets/icons/cold_solid.png";
import coldOutline from "../assets/icons/cold_outline.png";
import sizeSolid from "../assets/icons/size_solid.png";
import sizeOutline from "../assets/icons/size_outline.png";
import iceSmallSolid from "../assets/icons/ice_small_solid.png";
import iceSmallOutline from "../assets/icons/ice_small_outline.png";
import iceMediumSolid from "../assets/icons/ice_medium_solid.png";
import iceMediumOutline from "../assets/icons/ice_medium_outline.png";
import iceLargeSolid from "../assets/icons/ice_large_solid.png";
import iceLargeOutline from "../assets/icons/ice_large_outline.png";
import { GlobalArrayContext } from "../context/GlobalArrayContext";

export default function DetailScreen(props) {
  const navigation = useNavigation();
  const item = props.route.params;
  const [details, setDetails] = useState({
    name: item.name,
    image: item.image,
    quantity: 1,
    shot: 2,
    select: 1,
    size: 1,
    ice: 2,
  });
  const { setMyCart } = useContext(GlobalArrayContext);

  const getTotal = () => {
    let sizeFee = 0;
    if (details.size === 0) {
      sizeFee = -0.5;
    } else if (details.size === 2) {
      sizeFee = 0.5;
    }

    return details.quantity * (3.0 + sizeFee);
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

  const handleChooseShot = (shot) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      shot: shot,
    }));
  };

  const handleChooseSelect = (select) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      select: select,
    }));
  };

  const handleChooseSize = (size) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      size: size,
    }));
  };

  const handleChooseIce = (ice) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      ice: ice,
    }));
  };

  const handleAddToCart = () => {
    const items = { ...details };
    items.id = uuid.v4();
    items.total = getTotal();

    setMyCart((prevCart) => [...prevCart, items]);
    navigation.navigate("Cart");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/icons/back_arrow.png")} />
        </TouchableOpacity>
        <Text style={styles.header}>Details</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Image source={require("../assets/icons/cart.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.cover}>
        <Image source={item.image} />
      </View>
      <View style={styles.detailContent}>
        {/* quantity */}
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
          <View style={styles.separator} />
        </View>
        {/* shot */}
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.detail}>
            <Text style={styles.detailName}>Shot</Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <TouchableOpacity
                style={
                  details.shot === 0
                    ? styles.shotButtonActive
                    : styles.shotButtonInactive
                }
                onPress={() => handleChooseShot(0)}
              >
                <Text
                  style={
                    details.shot === 0
                      ? styles.shotContentActive
                      : styles.shotContentInactive
                  }
                >
                  Single
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  details.shot === 1
                    ? styles.shotButtonActive
                    : styles.shotButtonInactive
                }
                onPress={() => handleChooseShot(1)}
              >
                <Text
                  style={
                    details.shot === 1
                      ? styles.shotContentActive
                      : styles.shotContentInactive
                  }
                >
                  Double
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
        {/* select */}
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.detail}>
            <Text style={styles.detailName}>Select</Text>
            <View
              style={{
                flexDirection: "row",
                gap: 30,
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => handleChooseSelect(0)}>
                <Image source={details.select === 0 ? hotSolid : hotOutline} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChooseSelect(1)}>
                <Image
                  source={details.select === 1 ? coldSolid : coldOutline}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
        {/* size */}
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.detail}>
            <Text style={styles.detailName}>Size</Text>
            <View
              style={{
                flexDirection: "row",
                gap: 30,
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity onPress={() => handleChooseSize(0)}>
                <Image source={details.size === 0 ? sizeSolid : sizeOutline} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChooseSize(1)}>
                <Image
                  style={{ height: 31, width: 24 }}
                  source={details.size === 1 ? sizeSolid : sizeOutline}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChooseSize(2)}>
                <Image
                  style={{ height: 38, width: 29 }}
                  source={details.size === 2 ? sizeSolid : sizeOutline}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
        {/* ice */}
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.detail}>
            <Text style={styles.detailName}>Ice</Text>
            <View
              style={{
                flexDirection: "row",
                gap: 30,
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity onPress={() => handleChooseIce(0)}>
                <Image
                  source={details.ice === 0 ? iceSmallSolid : iceSmallOutline}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChooseIce(1)}>
                <Image
                  source={details.ice === 1 ? iceMediumSolid : iceMediumOutline}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChooseIce(2)}>
                <Image
                  source={details.ice === 2 ? iceLargeSolid : iceLargeOutline}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.totalAmount}>
          <Text style={styles.total}>Total Amount</Text>
          <Text style={styles.total}>${getTotal().toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.addItem} onPress={handleAddToCart}>
          <Text style={styles.addItemContent}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = require("../styles");
