import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function BotonFlotante(props: {
  alPresionar: () => void;
  posicion: string;
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
          props.posicion == "izq" ? styles.izq : styles.der,
          props.color == "" ? styles.verde : { backgroundColor: props.color },
          props.abajo == 1 ? styles.abajo : styles.arriba,
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
  },
  boton: {
    color: "#011201",
    backgroundColor: "#2be60e",
    padding: 15,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.3,
  },
  izq: {
    left: 50,
    position: "absolute",
  },
  der: {
    right: 50,
    position: "absolute",
  },
  verde: {
    backgroundColor: "#2be60e",
  },

  abajo: {
    bottom: 50,
  },
  arriba: {
    top: 15,
  },
});
