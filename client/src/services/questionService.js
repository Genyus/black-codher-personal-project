/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getAll: async () => {
    console.log("getAll")
    const res = await axios.get(`/api/question`);
    return res.data || [];
  },
};