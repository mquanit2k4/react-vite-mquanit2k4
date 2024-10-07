import axios from './axios.customize'
const createUserAPI = (fullName, email, password, phoneNumber) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phoneNumber,
  };
  return axios.post(URL_BACKEND, data);
};

const undapteUserAPI = () => {
}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
}  

export { createUserAPI, undapteUserAPI, fetchAllUserAPI };
