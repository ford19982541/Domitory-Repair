import React, { useState, useMemo, useEffect } from "react";
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import { useGet } from "../hooks/useGet";
import axios from "axios";
import { BASE_URL } from "../config";
import { render } from "react-dom";
import { set } from "react-native-reanimated";
import ValidationComponent from "react-native-form-validator";
import { AsyncStorage } from "react-native";
const data = [
  { id: 0, nameRe: "กรุณาเลือก" },
  { id: 1, nameRe: "ไฟฟ้า" },
  { id: 2, nameRe: "ประปา" },
  { id: 3, nameRe: "เฟอร์นิเจอร์" },
  { id: 4, nameRe: "โครงสร้าง" },
];
export function SelectRepairType(props) {
  const [selectedIndex, setSelectedIndex] = useState(
    new IndexPath(props.value)
  );
  // const [selectData, setSelectData] = useState(null);
  const displayValue = data[selectedIndex.row].nameRe;
  const renderOption = (item) => (
    <SelectItem title={item.nameRe} key={item.id} />
  );
  // if (props) {
  //   setSelectData(props.value);
  //   const cIndex = data.findIndex((Object) => Object.id == selectData);
  //   setSelectedIndex(cIndex);
  // }
  // useMemo(() => {
  //   let unmounted = false;
  //   async () => {
  //     const cIndex = data.findIndex((Object) => Object.id == props.value);
  //     setSelectedIndex(cIndex);
  //   };
  //   return () => {
  //     unmounted = true;
  //   };
  // }, [props.value,selectedIndex]);
  // useEffect(() => {
  //   let unmounted = false;

  //   (async () => {
  //     const { status } = await Camera.requestPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();

  //   const { route } = props;

  //   return () => {
  //     unmounted = true;
  //   };
  // }, []);
  function handleChange(i) {
    setSelectedIndex(i);
    props.onChange(data[i.row].id);
  }
  return (
    <Layout level="1">
      <Select
        style={{ marginVertical: 2 }}
        label="ประเภท"
        placeholder="Default"
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={(index) => handleChange(index)}
      >
        {data.map(renderOption)}
      </Select>
    </Layout>
  );

  // const deTypeData = { id: 0, nameRe: "Pls" };
  // const [typeData, setTypeData] = useState([deTypeData]);
  // const fetchData = async () => {
  //   setTypeData([deTypeData].concat(data));
  // };
  // // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(true);
  // function _OnSelect(index) {
  //   setSelectedIndex(index);
  //   if (selectedIndex != undefined) {
  //     // setDisplayValue(data[selectedIndex.row].nameRe)
  //     setSelectData(typeData[selectedIndex.row].id);
  //     console.log(selectData, "selectData");
  //     props.callBackType(selectData);
  //   }
  // }
  // useEffect(() => {
  //   return async () => {
  //     await axios.get(`${BASE_URL}/api/RepairType/`)
  //     .then((res) => {
  //       const Data = res.data;
  //       setTypeData([deTypeData].concat(Data));
  //       console.log(typeData,'tydata');
  //       setLoading(false);
  //     });
  //   };
  // }, []);

  // if (loading) {
  // }
  //
}
