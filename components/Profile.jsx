import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("../assets/Ellipse.png")} />
        <View>
          <Text>Welcome Back</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Eric Atsu</Text>
        </View>
      </View>
      <TouchableOpacity>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={styles.searchButton}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchButton: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 30,
  },
});
export default Profile;
