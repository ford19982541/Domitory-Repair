import React from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { createAction } from "../utils/createAction";
import { sleep } from "../utils/sleep";
import { useGet } from "./useGet";
export function useRepair() {
  const repair = React.useMemo(
    () => ({
      createRepair: async (formData) => {
        await sleep(2000);
        await axios.post(`${BASE_URL}/api/repairs/`, {
          formData,
        });
      },
      detail: async (id) => {
        await sleep(2000);
        useGet(`/api/Repairs/${id}`);
      },
      update: async (id, formData) => {
        await sleep(2000);
        await axios.put(`${BASE_URL}/api/repairs/${id}/`, {
          formData,
        });
      },
      delete: async (id) => {
        await sleep(2000);
        await axios.delete(`${BASE_URL}/api/repairs/${id}/`);
      },
    }),
    []
  );
  return { repair };
}
