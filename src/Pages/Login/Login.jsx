import { Link, useLocation, useNavigate } from 'react-router-dom';
// import loginbg from '../../assets/img/loginbg/loginbg.jpg'
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2'
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/AxiosPublic/useAxiosPublic';
// import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const { handleSignIn, handleGoogleSignIn } = useAuth()
    const location = useLocation()
    const axiosPubilc = useAxiosPublic()
    // console.log(location);
    const navigate = useNavigate()
    const handleSignInForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        handleSignIn(email, password)
            .then(result => {
                Swal.fire({
                    title: 'SuccessFully Sign In',
                    icon: 'success',

                })
                navigate('/');

            }).catch(err => {
                Swal.fire({
                    title: 'Your email or password is wrong',
    
                    icon: 'error',

                })
            })

    }
    const handleGoogleLogIn = () => {
        handleGoogleSignIn()
            .then(result => {
                console.log(result.user.displayName)
                if (result.user) {
                    const name = result?.user?.displayName
                    const email = result?.user?.email
                    const photoUrl = result?.user?.photoURL
                    const userInfo = {
                        name, email, photoUrl,role:"user"
                    }
                    axiosPubilc.post('/users', userInfo)
                        .then(res => {
                            console.log(res.data)
                            if (res.data) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "successfully you login",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/')
                            }
                        })
                }

            })
            .catch(err => {
                Swal.fire({
                    title: 'Your email or password is wrong',
                    // text: 'Do you want to continue',
                    icon: 'error',
                    // confirmButtonText: 'Cool'
                })
            })
    }
    return (
        <div>
            <div className=" min-h-[100vh] bg-cover"
            // style={{ backgroundImage: `url(${loginbg})` }}
            >
                <div className="flex justify-center items-center min-h-[100vh] bg-[#00000062]">
                    <div className="card flex-shrink-0 w-[90%] md:max-w-sm shadow-2xl bg-[#ffffff71] my-10">
                        <h1 className='flex justify-center text-3xl lg:text-4xl font-bold py-5 bg-[var(--bg-primary)] rounded-t-2xl text-white'>Sign In</h1>
                        <form className="card-body" onSubmit={handleSignInForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign In" className="btn btn-primary text-[17px]" />
                            </div>
                        </form>
                        <div className='flex justify-center items-center -mt-5'>
                            <div className='bg-[var(--bg-primary)] h-[2px] w-1/4'></div>
                            <div className='px-2'>
                                <h1 className='text-lg font-semibold'>OR</h1>
                            </div>
                            <div className='bg-[var(--bg-primary)] h-[2px] w-1/4'></div>
                        </div>
                        <div>
                            <div className='flex justify-center items-center gap-2 mx-8 rounded-lg border py-2 mb-3 mt-2 ' onClick={handleGoogleLogIn}>
                                <FcGoogle className='text-2xl'></FcGoogle><span className='font-bold text-lg' >Sign In With Google</span>
                            </div>
                        </div>

                        <div className='flex justify-center mb-5'>
                            <p className='text-[18px] font-semibold'>Do't Have An Account <Link to={'/signup'} className='text-blue-700 font-bold'>Sign Up</Link></p>
                        </div>
                    </div>
                    {/* <ToastContainer></ToastContainer> */}
                </div>
            </div>
        </div>
    );
};

export default Login;