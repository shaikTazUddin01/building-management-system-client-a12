import Divider from '../../../../Component/Shared/Divider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import bgImg from '../../../../assets/HomeBanner/pro.jpg'
import { useParams } from 'react-router-dom';
import useBookedRoom from '../../../../Hooks/useBookedRoom/useBookedRoom';

//payment key here
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY)
const PaymentForm = () => {
    const {id}=useParams();
    const [bookedRoom, isLoading] = useBookedRoom()
    const forPayment=bookedRoom?.find(item=>item?._id==id);
    // console.log(forPayment)
    // console.log(id)
    return (
        <div style={{backgroundImage:`url(${bgImg})`}} className='bg-cover w-full min-h-screen'>
            <div className='bg-cover w-full min-h-screen bg-[#21212180]'>

            <div className='pt-20 text-white' >
                <Divider header={'Payment For Your Room'}></Divider>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm payment={forPayment}></CheckoutForm>
                </Elements>
            </div>
            </div>
        </div>
    );
};

export default PaymentForm;