import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';


const useBookedRoom = () => {
    const axiosSecure=useAxiosSecure()
    // const{loader,setloader}=useState(true)
    const { data:bookedRoom,isLoading } = useQuery({
        queryKey: ['bookedRoom'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookedRoom')
            // setloader(false)
            return res.data
        }
    })
   console.log(bookedRoom)
    return [bookedRoom,isLoading];
};
export default useBookedRoom;