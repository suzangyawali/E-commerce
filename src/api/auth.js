import axios from "axios";
import config from "../config/config";

const login = ({email,password})=>{
  const response= axios.post(`${config.baseApiUrl}/api/auth/login`,{
    email,
    password,
  })
  return response;
}

const register = ({name,email,password,confirmPassword})=>{
  const response= axios.post(`${config.baseApiUrl}/api/auth/register`,{
    name,
    email,
    password,
    confirmPassword,
  })
  return response;
}


export {login,register};