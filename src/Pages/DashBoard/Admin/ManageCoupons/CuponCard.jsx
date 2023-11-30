import React from 'react';
import useAxiosSecure from '../../../../Hooks/AxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CuponCard = ({ item, refetch }) => {
  const axiosSecret = useAxiosSecure()
  const handleCouponDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To Delete This Coupon",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecret.delete(`/cupons/${id}`)
          .then(res => {
            if (res.data.deletedCount) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your Coupon has been deleted.",
                icon: "success"
              });
            }
          })

      }
    })
  }
  // update
  const handelcuponUpdate = e => {
    e.preventDefault()
    const cuponCode = e.target.cupon.value
    const discount = e.target.discount.value
    const description = e.target.description.value
    const cupon = {
      cuponCode, discount, description
    }
    axiosSecret.put(`/cupons/${item?._id}`, cupon)
      .then(res => {
        if ((res?.data?.modifiedCount)) {
          refetch()
          toast.success('Your Coupon has been update SuccessFully.')

        } else {
          toast.error('someThing is wrong please try again')

        }
      })
  }
  return (
    <tr className='border border-black'>
      <th className='text-white'>{item?._id}</th>
      <td className='text-white'>{item?.cuponCode}</td>
      <td className='text-white'>{item?.discount}</td>
      <td className='text-white'>{item?.description}</td>
      <td className='text-white' >
        <button className='btn btn-primary' onClick={() => document.getElementById('my_modal_4').showModal()}>Edit</button>
      </td>
      <td>
        <button className='btn btn-error' onClick={() => handleCouponDelete(item?._id)}>
          Delete
        </button>
      </td>
      {/* //modal */}
      <dialog id="my_modal_4" className="modal">
        {/* <h1 className='text-3xl text-black'>Update Coupon</h1> */}
        <div className="modal-box">

          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute right-2 top-2 text-black">
              <span className='text-blue-800 font-semibold pt-2 pr-2 text-xl'>✕</span>
            </button>
          </form>
          {/* update coupons form */}
          <form className="card-body" onSubmit={handelcuponUpdate}>
            <div className="form-control">
              <label className="label">
                <span className=" text-xl font-sans font-semibold text-black">Inter Coupon</span>
              </label>
              <input type="taxt" placeholder="Enter coupon here" className="input input-bordered" required defaultValue={item?.cuponCode} name="cupon" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className=" text-xl font-sans font-semibold text-black">Deicount (%)</span>
              </label>
              <input type="number" placeholder="discount" className="input input-bordered" required name="discount" defaultValue={item?.discount} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className=" text-xl font-sans font-semibold text-black">description</span>
              </label>
              <textarea type="taxt" placeholder="Description" className="textarea input-bordered textarea-lg " name="description" required defaultValue={item?.description} />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Update Cupon</button>
            </div>
          </form>

          <ToastContainer></ToastContainer>
        </div>
      </dialog>
    </tr>
    // {/* You can open the modal using document.getElementById('ID').showModal() method */ }


  );
};

export default CuponCard;