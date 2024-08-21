import axios from "axios";

const axiosCommon = axios.create({

  baseURL: "https://dokan-bazar-server.vercel.app/",
  
});

const useAxios = () => {
  return axiosCommon;
};

export default useAxios;