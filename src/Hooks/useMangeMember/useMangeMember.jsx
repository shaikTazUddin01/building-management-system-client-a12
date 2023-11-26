import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosPublic/useAxiosPublic';

const useMangeMember = () => {
    const axiosPubilc = useAxiosPublic()
    // const{loader,setloader}=useState(true)
    const { data:user, refetch,isLoading } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const res = await axiosPubilc.get('/users')
            // setloader(false)
            return res.data
        }
    })
   
    return [user, refetch,isLoading];
};

export default useMangeMember;