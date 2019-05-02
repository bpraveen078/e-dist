import { BASE_URL } from "../environment";
import axios from "axios";
import { setStorage } from "../helpers/storage.helper";
const login = async (model, url) => {
  // const data =
  //   "username=" +
  //   model.userName +
  //   "&password=" +
  //   model.password +
  //   "&clientid=Website&grant_type=password";
  const data = {
    userName: model.userName,
    password: model.password
    // clientid: "Website",
    // grant_type: "password"
  };

  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  const response = await axios.post(url, data);

  if (response.status !== 200) {
    return { error: { code: response.status } };
  }

  setStorage("id_token", response.data.id_token);
  return { data: response.data };
};

export { login };
