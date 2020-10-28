import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, View } from "react-native";
import { Button, Layout, Text, Card, Divider } from "@ui-kitten/components";
import { useGet } from "../hooks/useGet";
import { Loading } from "../components/loading";
import axios from "axios";
import { BASE_URL } from "../config";
//ทำไฟล์นี้นะ
export function ShowProfile({ id }) {
  const [loading, setLoading] = useState(true);
  //   const profile = useGet(`/api/UserProfiles/${id}/`);
  const [profile, setProfile] = useState();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/UserProfiles/${id}/`)
      .then(({ data }) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.response, "e");
      });
  }, [id]);
  if (!profile) {
    return <Loading loading={loading} />;
  }
  console.log(profile);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />

      <View style={styles.container}>
        <Layout style={{ flex: 1 }}>
        <Card
            style={{
              height: 500,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: profile.image }}
              style={{ flex: 1, height: 100, width: 250 }}
              resizeMode={"stretch"}
            />

            <Text textStyle={{ minHeight: 70 }} label="ชื่อ-สกุล">
              ชื่อ-สกุล: {profile.nameStudent}
            </Text>

            <Text textStyle={{ minHeight: 70 }} label="ตำแหน่ง">
            ตำแหน่ง: {profile.position}
            </Text>

            <Text textStyle={{ minHeight: 70 }} label="หอที่คุม">
            หอที่คุม: {profile.rebuilding}
            </Text>

            {/* <Text textStyle={{ minHeight: 70 }} label="รหัสนิสิต">
              รหัสนิสิต: {profile.student_id}
            </Text>

            <Text textStyle={{ minHeight: 70 }} label="คณะ">
              คณะ: {profile.department}
            </Text>

            <Text textStyle={{ minHeight: 70 }} label="สาขา">
              สาขา: {profile.department}
            </Text> */}

            <Text textStyle={{ minHeight: 70 }} label="เบอร์โทรศัพท์">
              เบอร์โทรศัพท์: {profile.contact}
            </Text>

            <Text textStyle={{ minHeight: 70 }} label="Facebook">
              Facebook: {profile.face_book}
            </Text>
          </Card>
        </Layout>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 30, backgroundColor: "white", minHeight: "100%" },
  textLine: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    fontSize: 14,
  },
  label: { fontWeight: "bold" },
  image: { width: "100%", height: 360, marginBottom: 20 },
});
