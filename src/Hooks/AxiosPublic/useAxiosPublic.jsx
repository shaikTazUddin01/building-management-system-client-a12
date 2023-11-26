import axios from "axios";

const useAxiosPublic = () => {
    const axiosPubilc=axios.create({
        baseURL: 'http://localhost:5000'
      });
    return (
            axiosPubilc
    );
};

export default useAxiosPublic;