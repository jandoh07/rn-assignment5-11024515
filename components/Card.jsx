import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
// import SvgUri from "react-native-svg-uri";

const Card = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FontAwesome5
          name="sim-card"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <FontAwesome
          name="wifi"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
      </View>
      <View>
        <View style={styles.cardNumber}>
          <Text style={{ fontSize: 20, fontWeight: "400", color: "white" }}>
            4562
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "400", color: "white" }}>
            1122
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "400", color: "white" }}>
            4595
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "400", color: "white" }}>
            7852
          </Text>
        </View>
        <Text style={{ color: "#dadbde", fontWeight: "200" }}>AR Jonson</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 12, color: "#dadbde", fontWeight: "200" }}>
            Expiry Date
          </Text>
          <Text style={{ color: "white" }}>24/2000</Text>
        </View>
        <View>
          <Text style={{ fontSize: 12, color: "#dadbde", fontWeight: "200" }}>
            CVV
          </Text>
          <Text style={{ color: "white" }}>6986</Text>
        </View>
        <View>
          <Image
            source={require("../assets/mastercard.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26273d",
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
  iconStyle: {
    transform: [{ rotate: "90deg" }],
    color: "#4a4b74",
  },
  cardNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    color: "white",
  },
});
export default Card;
