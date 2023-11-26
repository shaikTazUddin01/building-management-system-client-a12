import { Link, useNavigate } from 'react-router-dom';
// import loginbg from '../../assets/img/loginbg/loginbg.jpg'

import { updateProfile } from 'firebase/auth';
import auth from '../../FireBase/FireBase.config';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/AxiosPublic/useAxiosPublic';

const SignUp = () => {
    // const {user}=useAuth()
    // console.log(user)
    const axiosPubilc = useAxiosPublic();
    const { handleSignUp } = useAuth()
    const navigete = useNavigate()
    const handleSignUpForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photourl.value;
        const password = form.password.value;

        // console.log(name,email,photoUrl,password)
        handleSignUp(email, password)
            .then(result => {
                // console.log(result);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    const userInfo = {
                        name, email, photoUrl,role:"user"
                    }
                    axiosPubilc.post('/users',userInfo)
                    .then(res=>{
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "successfully you signUP",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    //
                    navigete('/')
                }).catch((error) => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "SomeThing is wrong please try again",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
            }).catch(err => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "SomeThing is wrong please try again",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div>
            <div className=" min-h-[100vh] bg-cover"
            // style={{ backgroundImage: `url(${loginbg})` }}
            >
                <div className="flex justify-center items-center min-h-[100vh] bg-[#00000062]">
                    <div className="card flex-shrink-0 w-[90%] md:w-2/4 lg:w-2/5  shadow-2xl bg-[#ffffff71] my-10">
                        <h1 className='flex justify-center text-3xl lg:text-4xl font-bold py-5 bg-[var(--bg-primary)] rounded-t-2xl text-white'>Sign Up</h1>
                        <form className="card-body" onSubmit={handleSignUpForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Photo Url</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered" name='photourl' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn btn-primary text-[17px]" />
                            </div>
                        </form>
                        <div className='flex justify-center items-center -mt-5'>
                            <div className='bg-[var(--bg-primary)] h-[2px] w-1/4'></div>
                            <div className='px-2'>
                                <h1 className='text-lg font-semibold'>OR</h1>
                            </div>
                            <div className='bg-[var(--bg-primary)] h-[2px] w-1/4'></div>
                        </div>
                        <div className='flex justify-center mb-5'>
                            <p className='text-[18px] font-semibold'>Have An Account <Link to={'/login'} className='text-blue-700 font-bold'>Sign In</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;