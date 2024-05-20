import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-manager-server-xq1u.onrender.com'
})

const useAxiosPublic = () => {
   return axiosPublic;
};

export default useAxiosPublic;