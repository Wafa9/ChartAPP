import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import envs from '../config/env'

let headers = {"Access-Control-Allow-Origin":'*'};

const axiosInstance = axios.create({
    baseURL:'http://192.168.8.150:8000/',
    headers,

}
)

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
     return config

    },
    (error)=>{
        return Promise.reject(error)
    }
    );

    axiosInstance.interceptors.response.use(
        (response) =>
          new Promise((resolve, reject) => {
            resolve(response);
          }),
        (error) => {
          if (!error.response) {
            return new Promise((resolve, reject) => {
              reject(error);
            });
          }
      
          if (error.response.status === 403) {
            console.log("axios error")
          } else {
            return new Promise((resolve, reject) => {
              reject(error);
            });
          }
        },
      );
      

export default axiosInstance

