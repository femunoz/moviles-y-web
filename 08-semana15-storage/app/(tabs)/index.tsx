import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const index = () => {
  const [saldo, setSaldo] = useState(0);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("miLlave", value);
    } catch (e) {
      // saving error
    }
  };

  const updateValor = () => {
    const nuevoValor = saldo + 10;
    setSaldo(nuevoValor);
    storeData(nuevoValor.toString());
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("miLlave");
      if (value !== null) {
        console.log(value);
        setSaldo(+value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const borrarDatos = async () => {
    try {
      await AsyncStorage.removeItem("miLlave");
    } catch {}
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text style={{ fontSize: 20 }}>index</Text>
      <Text style={{ fontSize: 20 }}>Saldo: {saldo}</Text>
      <Button
        title="Aumenta 10"
        onPress={() => {
          updateValor();
        }}
      ></Button>
      <Button
        title="Borra datos"
        onPress={() => {
          borrarDatos();
        }}
      ></Button>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
