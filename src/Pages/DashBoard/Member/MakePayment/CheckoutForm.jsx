import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/AxiosSecure/useAxiosSecure';
import useCupon from '../../../../Hooks/useCupon/useCupon';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ payment }) => {
    const axiosSecure = useAxiosSecure()
    const [cupon] = useCupon()
    const amount = payment?.rent
    const [error, setError] = useState('')
    const [paymentId, setPaymentId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [totalPay, setTotalPay] = useState(amount)
    // console.log(payment)
    const [clientSecret, setClientSecret] = useState('')
    const navagate = useNavigate()
    const handleCoupon = (e) => {
        e.preventDefault()
        const applyCoupon = e.target.coupon.value;
        const findcoupon = cupon.find(item => item.cuponCode === applyCoupon)
        if (findcoupon ) {
            const discountPrice = parseInt(findcoupon?.discount)
            const discountAmount = (discountPrice * amount) / 100
            const newPrice = amount - discountAmount
            setTotalPay(newPrice)
            e.target.reset()
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Coupon apply success",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Enter a vaild Coupon",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPay })
            .then(res => {
                console.log(res?.data?.clientSecret)
                setClientSecret(res?.data?.clientSecret)
            })
    }, [axiosSecure,totalPay])
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            setError(error.message)
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setError("")
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: payment?.userName || "name",
                        email: payment?.userEmail || 'email',

                    },

                },
            },
        );
        if (confirmError) {
            console.log("error:", confirmError)
        } else {
            console.log("success:", paymentIntent)
            if (paymentIntent?.status === 'succeeded') {
                // alert("success")
                setPaymentId(paymentIntent?.id)




                const paymentInfo = {
                    userName: payment?.userName,
                    userEmail: payment?.userEmail,
                    requetsId: payment?.requetsId,
                    floorNo: payment?.floorNo,
                    blockName: payment?.blockName,
                    apartmentNo: payment?.apartmentNo,
                    RoomNo: payment?.RoomNo,
                    amount: (paymentIntent?.amount) / 100,
                    Date: new Date().toLocaleDateString('en-US', {
                        month: '2-digit',
                        day: '2-digit',
                        year: 'numeric',
                    })
                }
                console.log(paymentInfo)
                axiosSecure.post('/paymentHistory', paymentInfo)
                    .then(res => {
                        // console.log(res.data)
                        if (res?.data?.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Thank You For The Payment",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navagate('/dashboard/paymentHistory')
                        }
                    })
            }
        }
    };
    return (
        <div className='px-10 ' >
            <div className='w-1/2 mx-auto mt-10 bg-[#0e0a267f] px-10 py-5 rounded-2xl'>
                <div>
                    <h1 className='text-xl text-white text-center'>Your Payment Amount is : <span className='bg-blue-900
                    rounded-xl py-2 px-3'>{totalPay}</span></h1>
                    <form onSubmit={handleCoupon}>
                        <div className='flex items-center justify-center mt-5' >
                            <input type="text" className='w-2/3 p-3 rounded-l-xl pl-5' placeholder='Enter Coupon' name='coupon' />
                            <button className='py-[10px] px-5 rounded-r-xl bg-primary text-white font-sans font-semibold text-xl ' type='submit'>Apply</button>
                        </div>
                    </form>

                </div>
                <form onSubmit={handleSubmit} className=''>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#FFFFFF',
                                    '::placeholder': {
                                        color: '#FFFFFF',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                        className='border py-3 px-2 mt-5 rounded-md text-white'
                    />
                    <p className='text-red-600 font-semibold'>{error}</p>
                    <div className=' mt-5 text-end'>
                        <button type="submit" disabled={!stripe || !clientSecret} className='text-white px-6 py-3
                    bg-blue-800 rounded-md hover:bg-blue-950'>
                            PayMent
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;