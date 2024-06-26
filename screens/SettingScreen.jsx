import React, { useState } from "react";
import { FlatList, StyleSheet, Switch, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingScreen = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSwitch = () => setToggle((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 80 }}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View>
        <FlatList
          data={[
            { title: "Language" },
            { title: "My Profile" },
            { title: "Contact Us" },
            { title: "Change Password" },
            { title: "Privacy Policy" },
          ]}
          renderItem={({ item }) => (
            <View style={styles.settingItems}>
              <Text style={{ fontWeight: "500", fontSize: 16 }}>
                {item.title}
              </Text>
              <AntDesign name="right" size={24} color="#a0a1a4" />
            </View>
          )}
        />
      </View>
      <View style={styles.theme}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Theme</Text>
        <Switch
          trackColor={{ false: "gray", true: "#2f84fe" }}
          value={toggle}
          onValueChange={toggleSwitch}
          style={{ transform: [{ scale: 1.4 }] }}
        />
      </View>
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  settingItems: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dadbde",
    paddingVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  theme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
});

export default SettingScreen;
