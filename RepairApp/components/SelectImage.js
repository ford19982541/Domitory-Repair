import React, { useState } from "react";
// import Modal, { ModalContent,ModalFooter,ModalButton } from 'react-native-modals';
import { SafeAreaView, StyleSheet, Image } from "react-native";
import { Button, Layout, Text, Card, Modal } from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";
export function SelectImage(props) {
  const [image, setImage] = useState(props.value);
  const [visible, setVisible] = useState(false);
  function SelectValue(result) {
    setImage(result.uri);
    props.onChange(result.uri);
  }
  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    setVisible(false);
    if (!result.cancelled) {
      SelectValue(result);
    }
  }
  async function pickCamera() {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
        SelectValue(result);
    }
    setVisible(false);
  }

  return (
    <Layout>
      <Button onPress={() => setVisible(true)}>
        Pick an image from camera roll
      </Button>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text>Welcome</Text>
          <Button onPress={() => pickImage()}>Gallery</Button>
          <Button onPress={() => pickCamera()}>Camera</Button>
        </Card>
      </Modal>
      
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
