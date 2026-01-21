import axios from "axios";
import store from "../Store/store";
import { changeLoader } from "../Store/Slices/loader";

  export const axiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params :{
        api_key:'13cd1657daf2e762e93d49fcefe59732'
    }
})

axiosInstance.interceptors.request.use((req)=>{
  if(req.url!='login'&&req.url!='register'){
    console.log("hiiiiiiiiii from request");git add .
git commit -m "Add loader state in Redux and setup Axios interceptors"
  }
   store.dispatch(changeLoader(true))
   return req
},(err)=>{
  return Promise.reject(err)  
})

axiosInstance.interceptors.response.use((res)=>{
   store.dispatch(changeLoader(false))
   return res
},(err)=>{
  return Promise.reject(err)  
})