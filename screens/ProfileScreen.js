import React, { useContext, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import profileIcon from "../assets/icons/profile.png";
import editIcon from "../assets/icons/edit.png";
import phoneIcon from "../assets/icons/phone.png";
import emailIcon from "../assets/icons/email.png";
import addressIcon from "../assets/icons/address.png";
import { GlobalArrayContext } from "../context/GlobalArrayContext";

export default function ProfileScreen() {
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const { profile, setProfile } = useContext(GlobalArrayContext);

  const onNameChange = (text) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      name: text,
    }));
  };

  const onPhoneChange = (text) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      phoneNo: text,
    }));
  };

  const onEmailChange = (text) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      email: text,
    }));
  };

  const onAddressChange = (text) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      address: text,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      {/* Name */}
      <View style={styles.infoEdit}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.infoIcon}>
            <Image source={profileIcon} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.infoTitle}>Full name</Text>
            {editName ? (
              <TextInput onChangeText={onNameChange} style={styles.infoInput} />
            ) : (
              <Text style={styles.infoText}>{profile.name}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity onPress={() => setEditName(!editName)}>
          <Image source={editIcon} />
        </TouchableOpacity>
      </View>
      {/* Phone */}
      <View style={styles.infoEdit}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.infoIcon}>
            <Image source={phoneIcon} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={infoTitle}>Phone Number</Text>
            {editPhone ? (
              <TextInput
                onChangeText={onPhoneChange}
                style={styles.infoInput}
              />
            ) : (
              <Text style={styles.infoText}>{profile.phoneNo}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity onPress={() => setEditPhone(!editPhone)}>
          <Image source={editIcon} />
        </TouchableOpacity>
      </View>
      {/* Email */}
      <View style={styles.infoEdit}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.infoIcon}>
            <Image source={emailIcon} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={infoTitle}>Email</Text>
            {editEmail ? (
              <TextInput
                onChangeText={onEmailChange}
                style={styles.infoInput}
              />
            ) : (
              <Text style={longInputStyle}>{profile.email}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity onPress={() => setEditEmail(!editEmail)}>
          <Image source={editIcon} />
        </TouchableOpacity>
      </View>
      {/* Address */}
      <View
        style={{
          flexDirection: "row",
          width: "85%",
          marginTop: 15,
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <View style={styles.infoIcon}>
            <Image source={addressIcon} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={infoTitle}>Address</Text>
            {editAddress ? (
              <TextInput
                onChangeText={onAddressChange}
                style={styles.infoInput}
              />
            ) : (
              <Text style={longInputStyle}>{profile.address}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setEditAddress(!editAddress)}
          style={{ marginTop: 13 }}
        >
          <Image source={editIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = require("../styles");

const longInputStyle = {
  fontFamily: "Poppins",
  fontSize: 20,
  fontWeight: 600,
  color: "#324A59",
  marginTop: 2,
  width: 210,
};
