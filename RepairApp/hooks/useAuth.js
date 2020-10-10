import React from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { BASE_URL } from "../config";
import { createAction } from "../utils/createAction";
import { sleep } from "../utils/sleep";
export function useAuth() {
  const getDataLogin = () => {
    axios
      .get('http://127.0.0.1:8000/rest-auth/login/')
      .then(function(response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function(error) {
        // handle error
        alert(error.message);
      })
      .finally(function() {
        // always executed
        alert('Finally called');
      });
  };
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            user: { ...action.payload },
          };
        case "REMOVE_USER":
          return {
            ...state,
            user: undefined,
          };
        case "SET_LOADING":
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    }
  );
  const auth = React.useMemo(
    () => ({
      login: async (formData) => {
        const {data} = await axios.post(`${BASE_URL}/rest-auth/login/`,formData);
        console.log(data,'data')
        const user = {
          username: data,
          token: data.key
        };
        await AsyncStorage.setItem("user", JSON.stringify(user));
        dispatch(createAction("SET_USER", user));
      },
      logout: async () => {
        await AsyncStorage.removeItem("user");
        dispatch(createAction("REMOVE_USER"));
      },
      //   register: async (email, password) => {
      //     await sleep(2000);
      //     await axios.post(`${BASE_URL}/auth/local/register`, {
      //       username: email,
      //       email,
      //       password,
      //     });
      //   },
    }),
    []
  );
  React.useEffect(() => {
    sleep(2000).then(() => {
      AsyncStorage.getItem("user").then((user) => {
        if (user) {
          dispatch(createAction("SET_USER", JSON.parse(user)));
        }
        dispatch(createAction("SET_LOADING", false));
      });
    });
  }, []);
  return { auth, state };
}
