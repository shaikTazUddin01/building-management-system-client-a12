import axios from "axios";

const useAxiosPublic = () => {
    const axiosPubilc=axios.create({
        baseURL: 'https://building-management-server-ten.vercel.app'
      });
    return (
            axiosPubilc
    );
};

export default useAxiosPublic;