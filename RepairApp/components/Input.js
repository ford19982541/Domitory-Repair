import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "@ui-kitten/components";

export function InputDESC(props) {
  const [value, setValue] = React.useState(props.value);
  const onChangeText = (text) => {
    setValue(text);
    props.onChange(text)
  };  

  return (
    <Input
      multiline={true}
      textStyle={{ minHeight: 64 }}
      placeholder="ปัญหาอาการ"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 2,
  },
});
