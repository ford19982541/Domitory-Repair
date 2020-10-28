import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Button, Layout, Text, Card } from "@ui-kitten/components";
import { useGet } from "../hooks/useGet";
import { Loading } from "../components/loading";
import axios from "axios";
import { BASE_URL } from "../config";

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
      console.log(profile)
    return (
        <Layout style={{ flex: 1 }}>
      <Card>
          
        {/* <Text>{id}</Text> */}
        <Text>{profile.id}</Text>
        <Text>{profile.nameStudent}</Text>
      </Card>
    </Layout>
  );
}
