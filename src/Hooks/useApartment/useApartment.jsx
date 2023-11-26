import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosPublic/useAxiosPublic';

const useApartment = () => {
    const axiosPubilc = useAxiosPublic()
    const { data:apartment, refetch } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const res = await axiosPubilc.get('/apartment')
            return res.data
        }
    })
    return [apartment, refetch];
};
export default useApartment;