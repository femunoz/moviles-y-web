import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BotonFlotante from "./components/BotonFlotante";
import { useState } from "react";

export default function App() {
  const [vidas, setVidas] = useState(20);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Vidas: {vidas}</Text>
      <BotonFlotante
        lifes={vidas}
        alPresionar={() => setVidas(vidas - 1)}
        texto="-"
        posicion="izq"
        color="#f52020"
        abajo={0}
      ></BotonFlotante>
      <BotonFlotante
        lifes={vidas}
        alPresionar={() => setVidas(vidas + 1)}
        texto="+"
        posicion="der"
        abajo={0}
      ></BotonFlotante>
      <BotonFlotante
        lifes={vidas}
        alPresionar={() => setVidas(20)}
        texto="Reset"
        posicion="izq"
        color="#f52020"
        abajo={1}
      ></BotonFlotante>
      <StatusBar style="auto" />
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
});
