import { globalStyles } from "@/styles/global-styles";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

const RootLayout = () => {
  const [] = useFonts({
    TimesNew: require("../assets/fonts/Times New Roman.ttf"),
  });
  return (
    <View style={globalStyles.background}>
      <Text>_layout</Text>

      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
