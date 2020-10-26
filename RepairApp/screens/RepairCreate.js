import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Image, Alert } from "react-native";
import {
  Button,
  Input,
  Layout,
  Select,
  SelectItem,
  Card,
  Text,
  IndexPath,
} from "@ui-kitten/components";
// import { useGet } from "../hooks/useGet";
import { SelectRepairType } from "../components/SelectRepairType";
import { useGet } from "../hooks/useGet";
// import PhotoUpload from "react-native-photo-upload";
import * as ImagePicker from "expo-image-picker";
import Modal, { ModalContent } from "react-native-modals";
export default function RepairCreate({ navigation }) {
  const [loading, setLoading] = useState(true);
  // RepairType
  // const repairTypeData = useGet(`/api/RepairType/`);
  // const [repairTypeSelectedIndex, setRepairTypeSelectedIndex] = useState();
  const [repairType, setRepairType] = useState(1);
  function repairTypeCallBack(data) {
    setRepairType(data);
  }
  // const repairTypeOption = (item) => (
  //   <SelectItem title={item.nameRe} key={item.id} />
  // );

  // // Dormitory
  // const DormitoryData = useGet(`/api/Dormitorys/`);
  // const [DormitorySelectedIndex, setDormitorySelectedIndex] = useState();
  // const [DormitorySelectData, setDormitorySelectData] = useState();
  // const DormitoryOption = (item) => (
  //   <SelectItem title={item.nameDo} key={item.id} />
  // );
  // // Room
  // const RoomData = useGet(`/api/Rooms/`);
  // const [RoomSelectedIndex, setRoomSelectedIndex] = useState();
  // const [RoomSelectData, setRoomSelectData] = useState();
  // const RoomOption = (item) => (
  //   <SelectItem
  //     title={`${item.dormitory.nameDo}${item.nameRo}`}
  //     key={item.id}
  //   />
  // );
  // //DESC
  // const useInputState = (initialValue = "") => {
  //   const [descValue, setDescValue] = React.useState(initialValue);
  //   return { descValue, onChangeText: setDescValue };
  // };
  // const multilineInputState = useInputState();

  // //Image

  // const [image, setImage] = useState(null);
  // const [visible, setVisible] = React.useState(false);
  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };
  // const pickCamera = async () => {
  //   let result = await ImagePicker.launchCameraAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Layout level="1">
        <SelectRepairType value={repairType} onChange={repairTypeCallBack} />
        {/* <Select
          label="ประเภท"
          placeholder="Default"
          value={
            repairTypeSelectedIndex == undefined
              ? "please"
              : repairTypeData[repairTypeSelectedIndex.row].nameRe
          }
          selectedIndex={repairTypeSelectedIndex}
          onSelect={(index) => setRepairTypeSelectedIndex(index)}
        >
          {repairTypeData.map(repairTypeOption)}
        </Select> */}

        {/* <Select
          label="หอพัก"
          placeholder="Default"
          value={
            DormitorySelectedIndex == undefined
              ? "please"
              : DormitoryData[DormitorySelectedIndex.row].nameDo
          }
          selectedIndex={DormitorySelectedIndex}
          onSelect={(index) => setDormitorySelectedIndex(index)}
        >
          {DormitoryData.map(DormitoryOption)}
        </Select>

        <Select
          label="ห้อง"
          placeholder="Default"
          value={
            RoomSelectedIndex == undefined
              ? "please"
              : RoomData[RoomSelectedIndex.row].dormitory.nameDo +
                RoomData[RoomSelectedIndex.row].nameRo
          }
          selectedIndex={RoomSelectedIndex}
          onSelect={(index) => setRoomSelectedIndex(index)}
        >
          {RoomData.map(RoomOption)}
        </Select>

        <Input
          multiline={true}
          textStyle={{ minHeight: 70 }}
          label="ปัญหา/อาการ"
          placeholder="ปัญหา/อาการ"
          {...multilineInputState}
        />

        <Button onPress={setVisible(true)}>Pick an image from camera roll</Button>
        <Modal
          visible={visible}
          onTouchOutside={() => {
            setVisible(false)
          }}
        >
          <ModalContent>
            <Text>Test</Text>
          </ModalContent>
        </Modal>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )} */}
      </Layout>
      {/*

        <View style={{ marginTop: 20 }}>
          <Text>ปัญหา/อาการ</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ desc: text })}
            value={this.state.desc}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>เวลาที่อยู่ห้อง</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ created_date: text })}
            value={this.state.created_date}
          />
        </View>



        <View style={{ marginTop: 20 }}>
          <Text>รูปภาพ(ถ้ามี)</Text>

      </View> */}

      <Button
        onPress={() => console.log(repairType,'re')}
      >Crate</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30, backgroundColor: "white", minHeight: "100%" },
  textInput: { height: 40, borderColor: "gray", borderWidth: 1 },
  textAreaInput: { height: 100, borderColor: "gray", borderWidth: 1 },
  errorMessage: { color: "red", marginBottom: 20 },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
