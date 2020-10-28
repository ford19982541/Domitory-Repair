import React, { useEffect, useState, useContext } from "react";
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
import { BASE_URL } from "../config";
import { UserContext } from "../contexts/UserContext";
import { SelectRepairType } from "../components/SelectRepairType";
import { AutocompleteRoom } from "../components/AutoCompleteRoom";
import { InputDESC } from "../components/Input";
import { SelectImage } from "../components/SelectImage";
import { RepairContext } from "../contexts/RepairContext";
import { Loading } from "../components/loading";
import axios from "axios";
import moment from "moment";
// import PhotoUpload from "react-native-photo-upload";
import * as ImagePicker from "expo-image-picker";
import Modal, { ModalContent } from "react-native-modals";
import { floor } from "react-native-reanimated";
import { useProfile } from "../hooks/useProfile";
export default function RepairCreate({ navigation }) {
  // const [user, setUser] = useState(useProfile);
  const user = useProfile();
  const [loading, setLoading] = useState(false);
  const [repairType, setRepairType] = useState(0);
  function repairTypeCallBack(data) {
    setRepairType(data);
  }
  // // Dormitory
  const [roomText, setRoomText] = useState("");
  const [room, setRoom] = useState();
  function roomCallBack(data) {
    setRoomText(data.nameRo);
    setRoom(data.id);
  }
  const [desc, setDESC] = useState("");
  function descCallBack(data) {
    setDESC(data);
  }
  const [image, setImage] = useState();
  function imageCallBack(data) {
    setImage(data);
  }
  const { token } = React.useContext(UserContext);
  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/rest-auth/user-profile/`, {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //     })
  //     .then(({data}) => {
  //       setUser(data);
  //     })
  //     .catch((e)=>{
  //         console.log(e.response,'e')
  //     });
  // }, [token]);
  async function create() {
    setLoading(true);
    const formData = new FormData();
    // formData.append("",)
    const toDay = moment(new Date()).format("YYYY-MM-DD");
    console.log(user,repairType,room,desc,image.replace('file://', ''));
    await axios
      .post(`${BASE_URL}/api/Repairs/`, {
        created_date: toDay,
        request_date: toDay,
        user_profile: user.id,
        status: 1,
        repair_type: repairType,
        room: room,
        contact: "0123456789",
        desc: desc,
        image:  {
          uri: Platform.OS === 'android' ? image : image.replace('file:/', ''),
          type: 'image/jpg',
          name: 'image.jpg'
      },
      })
      .then((res) => {
        console.log(res, "res");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error, "error");
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Layout level="1">
        <SelectRepairType value={repairType} onChange={repairTypeCallBack} />
        <AutocompleteRoom value={roomText} onChange={roomCallBack} />
        <InputDESC value={desc} onChange={descCallBack} />
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 300, height: 200, alignItems: "center" }}
          />
        )}
        <SelectImage value={image} onChange={imageCallBack} />
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
          <Text>รูปภาพ(ถ้ามี)</Text>

      </View> */}

      <Button onPress={() => create()}>Crate</Button>
      <Loading loading={loading} />
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
