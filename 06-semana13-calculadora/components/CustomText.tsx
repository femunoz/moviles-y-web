import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  main?: boolean;
}

const CustomText = ({ main, children, ...rest }: Props) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "TimesNew" },
        main ? globalStyles.mainResult : globalStyles.subResult,
      ]}
      {...rest}
      numberOfLines={1}
      adjustsFontSizeToFit
    >
      {children}
    </Text>
  );
};

export default CustomText;
