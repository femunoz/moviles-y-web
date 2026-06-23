import CalculatorButton from "@/components/CalculatorButton";
import CustomText from "@/components/CustomText";
import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <CustomText main>50 x 50</CustomText>
        <CustomText>2500</CustomText>
      </View>

      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("..")}
        />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("..")}
        />
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("..")}
        />
        <CalculatorButton
          label="/"
          color={Colors.orange}
          onPress={() => console.log("..")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
