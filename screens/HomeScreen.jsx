import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../components/Profile";
import Card from "../components/Card";
import PossibleTransactions from "../components/PossibleTransactions";
import Transaction from "../components/Transaction";
import { ScrollView, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile />
        <Card />
        <PossibleTransactions />
        <Transaction />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
});
export default HomeScreen;
