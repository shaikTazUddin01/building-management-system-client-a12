import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosPublic/useAxiosPublic';
// import { useState } from 'react';

const useApartment = () => {
    const axiosPubilc = useAxiosPublic()
    // const{loader,setloader}=useState(true)
    const { data:apartment, refetch,isLoading } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const res = await axiosPubilc.get('/apartment')
            // setloader(false)
            return res.data
        }
    })
    if (isLoading) {
       return <p>loading...</p>
    }
    return [apartment, refetch,isLoading];
};
export default useApartment;