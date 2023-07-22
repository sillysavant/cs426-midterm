import { useNavigation } from "@react-navigation/native";
import React from "react";
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

  return (
    <SafeAreaView>
      <View style={styles.detailHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/icons/back_arrow.png")} />
        </TouchableOpacity>
        <Text style={styles.header}>Details</Text>
        <TouchableOpacity>
          <Image source={require("../assets/icons/cart.png")} />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={item.image} />
      </View>
    </SafeAreaView>
  );
}

const styles = require("../styles");
