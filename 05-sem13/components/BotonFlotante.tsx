import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function BotonFlotante(props: {
  alPresionar: () => void;
  posicion?: string;
  color?: string;
  texto: string;
  lifes: number;
  abajo: number;
}) {
  const [numero, setNumero] = useState(0);
  return (
    <View>
      <Pressable
        onPress={props.alPresionar}
        style={[
          styles.boton,
          props.color == "" ? styles.verde : { backgroundColor: props.color },
        ]}
      >
        <Text style={styles.texto}>{props.texto}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 46,
    color: "#fff",
  },
  boton: {
    color: "#070707",
    backgroundColor: "#2be60e",
    padding: 30,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.3,
  },
  izq: {},
  der: {},
  verde: {},
  abajo: {},
  arriba: {},
});
