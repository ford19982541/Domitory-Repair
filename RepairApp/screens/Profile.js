import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useProfile } from "../hooks/useProfile";
import { Divider, Layout, Button, Text, Card } from "@ui-kitten/components";
import { AuthContext } from "../contexts/AuthContext";
import { UserContext } from "../contexts/UserContext";
import { Loading } from "../components/loading";
import axios from "axios";
import { BASE_URL } from '../config'
import { ShowProfile } from "../components/ShowProfile";
const data = [
  {
    date_joined: "2020-10-27T16:25:53.248832+07:00",
    email: "",
    first_name: "",
    groups: [],
    id: 2,
    last_login: "2020-10-27T21:18:10.545978+07:00",
    last_name: "",
    username: "fordzii",
    userprofile: {
      branch: "SE",
      contact: "0123456789",
      department: "ICT",
      dormitory: 2,
      face_book: "ford'zii",
      id: 1,
      image: null,
      nameRo: 1,
      nameStudent: "Chissanupong promon",
      position: "Student",
      rebuilding: "22",
      room_type: 1,
      student_id: "60021346",
      user: 2,
    },
  },
];
function Profile({ navigation, props }) {
  const { token } = React.useContext(UserContext);
  const { logout } = React.useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  // const getUser = useProfile();
  // console.log(getUser,'user')
  const [user, setUser] = useState(useProfile());
  // console.log(user);
  // useEffect(() => {
  //   const get = useGet("/rest-auth/user-profile");
  //   return () => {
  //     setUser(get);
  //     setLoading(false)
  //   };
  // }, []);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/rest-auth/user-profile/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
      })
      .catch((e) => {
        console.log(e.response, "e");
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Layout style={{ flex: 1, alignContent: "center", alignItems: "center" }}>
        <Loading loading={loading} />
        <ShowProfile id={user.id} />
        
        
      </Layout>

      <Button
          onPress={() => {
            logout();
          }}
        >
          SignOut
        </Button>

    </SafeAreaView>
  );
}
export default Profile;
