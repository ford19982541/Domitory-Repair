import React from 'react';
import axios from 'axios';

import {UserContext} from '../contexts/UserContext';
import {BASE_URL} from '../config';

export function useProfile(initialValue = []) {
  const {token} = React.useContext(UserContext);
  const [data, setData] = React.useState(initialValue);
  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/rest-auth/user-profile/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(({data}) => {
        setData(data);
      })
      .catch((e)=>{
          console.log(e.response,'e')
      });
  }, [token]);
  return data;
}
