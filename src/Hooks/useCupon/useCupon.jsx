import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const useCupon = () => {
    const axiosSecret = useAxiosSecure()
    const { data: cupon, isPending } = useQuery({
        queryKey: ['cupon'],
        queryFn: async () => {
            const res =await axiosSecret.get('/cupons')
            return res.data
           
        }
    })
    return [cupon, isPending]
};

export default useCupon;