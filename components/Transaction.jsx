import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  Entypo,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
const transactionData = [
  {
    title: "Apple Store",
    category: "Entertainment",
    transaction: "-$5.99",
    logo: <AntDesign name="apple1" size={24} color="black" />,
  },
  {
    title: "Spotify",
    category: "Music",
    transaction: "-$12.99",
    logo: <Entypo name="spotify" size={24} color="black" />,
  },
  {
    title: "Money Transfer",
    category: "Transaction",
    transaction: "$300",
    logo: <Feather name="download" size={24} color="black" />,
  },
  {
    title: "Grocery",
    category: "Food",
    transaction: "-$50",
    logo: <MaterialIcons name="local-grocery-store" size={24} color="black" />,
  },
  {
    title: "Amazon",
    category: "Shopping",
    transaction: "-$100",
    logo: <FontAwesome name="amazon" size={24} color="black" />,
  },
];

const Transaction = () => {
  return (
    <View style={{ marginVertical: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Transaction</Text>
        <Text>See All</Text>
      </View>
      <View>
        {transactionData.map((item) => (
          <View style={styles.container} key={item.title}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View style={styles.iconButton}>{item.logo}</View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {item.title}
                </Text>
                <Text
                  style={{ fontWeight: "300", color: "gray", fontSize: 11 }}
                >
                  {item.category}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: item.transaction.startsWith("-") ? "black" : "#2f84fe",
                }}
              >
                {item.transaction}
              </Text>
            </View>
          </View>
        ))}
        {/* <FlatList
          data={transactionData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View>
                <View style={styles.iconButton}>{item.logo}</View>
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.category}</Text>
                </View>
              </View>
              <View>
                <Text>{item.transaction}</Text>
              </View>
            </View>
          )}
        /> */}
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  iconButton: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#f5f5f5",
    width: 50,
  },
});
export default Transaction;
