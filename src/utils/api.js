import axios from "axios";

export const API = "https://randomuser.me/api/?results=200&nat=us";
export const employeeService = {
  apiCall() {
    return axios.get(API);
  },
};
