import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/AxiosSecure/useAxiosSecure';

const CheckoutForm = ({ payment }) => {
    const axiosSecure = useAxiosSecure()
    const amount = payment?.rent
    const [error, setError] = useState('')
    const [paymentId, setPaymentId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    // console.log(payment)
    const [clientSecret, setClientSecret] = useState('')
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: amount })
            .then(res => {
                console.log(res?.data?.clientSecret)
                setClientSecret(res?.data?.clientSecret)
            })
    }, [amount, axiosSecure])
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
                alert("success")
                setPaymentId(paymentIntent?.id)
               
                    
                    
                    
                const paymentInfo={
                    userName:payment?.userName,
                    userEmail:payment?.userEmail,
                    requetsId:payment?.requetsId,
                    floorNo:payment?.floorNo,
                    blockName:payment?.blockName,
                    apartmentNo:payment?.apartmentNo,
                    RoomNo:payment?.RoomNo,
                    amount:(paymentIntent?.amount)/100,
                    Date:new Date().toLocaleDateString('en-US', {
                        month: '2-digit',
                        day: '2-digit',
                        year: 'numeric',
                      })
                }
                axiosSecure.post('/paymentHistory',paymentInfo)
                .then(res=>{
                    console.log(res.data)
                })
            }
        }
    };
    return (
        <div className='px-10 ' >
            <div className='w-1/2 mx-auto mt-10 bg-[#0e0a267f] px-10 py-5 rounded-2xl'>
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