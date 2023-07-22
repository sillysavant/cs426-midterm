import React, { useEffect, useState } from "react";
import { Image, ImageBackground, View, Text } from "react-native";

export default function AppLoading({ navigation }) {
  useEffect(() => {
    // After 2 seconds, navigate to the main screen
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.fullScreen}
      >
        <View style={styles.overlay}>
          <Image source={require("../assets/icons/logo.png")}></Image>
          <Text style={styles.logo}>Ordinary Coffee House</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = require("../styles");
