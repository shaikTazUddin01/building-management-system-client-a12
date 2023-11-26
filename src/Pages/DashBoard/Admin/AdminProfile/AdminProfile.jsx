import React from 'react';
import useAuth from '../../../../Hooks/useAuth';

const AdminProfile = () => {
    const { user } = useAuth()
    // console.log(user.photoUrl)
    return (
        <div className='px-10'>
            <div className='text-center my-10'>
                <h1 className='text-4xl'>My Profile</h1>
                <div className='divider w-[10%] h-[2px] bg-black mx-auto'></div>
            </div>
            <div className='flex'>
                <div className='relative w-[20% ] flex flex-col justify-start items-center px-10 pt-10 bg-slate-200 h-screen'>
                    <img src={user?.photoURL} alt="" className='rounded-full w-[50%]' />
                    {/* <div className='text-center'> */}
                        <h1 className='font-semibold'>{user?.displayName}</h1>
                        <h1 className='font-semibold'>{user?.email}</h1>
                    {/* </div> */}
                </div>
                <div className='bg-red-100 h-screen w-[80%]'>

                </div>
            </div>
        </div>
    );
};

export default AdminProfile;