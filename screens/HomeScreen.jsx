import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../components/Profile";
import Card from "../components/Card";
import PossibleTransactions from "../components/PossibleTransactions";
import Transaction from "../components/Transaction";
import { ScrollView, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeContext";

const HomeScreen = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
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

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffff",
      padding: 15,
    },
  });
export default HomeScreen;
