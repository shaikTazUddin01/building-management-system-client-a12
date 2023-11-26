import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosPublic/useAxiosPublic';
// import { useState } from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure'

const useAgreementUser = () => {
    // const axiosPubilc = useAxiosPublic()
    const axiosSecure=useAxiosSecure()
    // const{loader,setloader}=useState(true)
    const { data:agreement, refetch,isLoading } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/agreementsRequest')
            // setloader(false)
            return res.data
        }
    })
   
    return [agreement, refetch,isLoading];
};
export default useAgreementUser;