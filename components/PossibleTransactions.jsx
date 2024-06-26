import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";

const PossibleTransactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign
          name="arrowup"
          size={24}
          color="black"
          style={styles.iconButton}
        />
        <Text>Send</Text>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign
          name="arrowdown"
          size={24}
          color="black"
          style={styles.iconButton}
        />
        <Text>Receive</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="attach-money"
          size={24}
          color="black"
          style={styles.iconButton}
        />
        <Text>Loan</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          name="cloud-upload-outline"
          size={24}
          color="black"
          style={styles.iconButton}
        />
        <Text>Topup</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  iconButton: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#f5f5f5",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PossibleTransactions;
