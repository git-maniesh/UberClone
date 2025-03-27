import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('')
const navigate = useNavigate()
  const submitHandler = async(e) =>{
    e.preventDefault();

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
      params:{
      rideId: props.ride._id,
      otp:otp },
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if(response.status === 200){
      props.setConfirmRidePopUpPanel(false)
      props.setRidePopUpPanel(false)
      navigate('/captain-riding',{ state: { ride: props.ride } })
    }


  }
  return (
    <div>
    <h5 className='p-1 text-center absolute top-0  w-[93%]'
     
     onClick={()=>{
       props.setConfirmRidePopUpPanel(false)
       // console.log("down")
       
     }} 
     ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>

     <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start</h3>

     <div className='flex items-center justify-between mt-3 p-3 border-2 border-yellow-400 rounded-lg'>
        <div className='flex items-center gap-3 ' >
            <img className='h-12 w-12 rounded-full object-cover' src="https://i.scdn.co/image/ab6761610000517453ca421f91678c26b4f15512" alt="" />
            <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2>
            
        </div>
        <h5 className='text-lg font-semibold '>2.2 KM</h5>
     </div>

   <div className='flex justify-between flex-col gap-1 items-center'>

     
     <div className='w-full mt-5'>
      <div className='flex items-center gap-5 p-3 border-b-2'>
         <i className=' text-lg  ri-map-pin-user-fill'></i>
         <div >
           <h3 className='text-lg font-medium'>435/12/A </h3>
           <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
         </div>

      </div>
      <div className='flex items-center gap-5 p-3 border-b-2'>
      <i className=' text-lg  ri-map-pin-2-fill'></i>
         <div >
           <h3 className='text-lg font-medium'>435/12/A </h3>
           <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
         </div>

      </div>

      <div className='flex items-center gap-5 p-3 '>
      <i className=' text-lg  ri-currency-line'></i>
         <div >
           <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
           <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
         </div>

      </div>

      </div>
     </div>
     
    <div className='mt-6 w-full '>
    <form onSubmit=
      {submitHandler}
     >
      <input value={otp} onChange={(e)=>{
        setOtp(e.target.value)
      }} type="text" placeholder='Enter OTP' className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' />
    <button  className='w-full text-lg mt-5 flex justify-center bg-green-500 text-white font-semibold p-2 rounded-lg' >Confirm</button>

<button onClick={()=>{
    props.setConfirmRidePopUpPanel(false)
    props.setRidePopUpPanel(false)
    
  }}  className='w-full mt-2 bg-red-600 text-white text-lg   font-semibold p-2 rounded-lg' >Cancel</button>

      
      </form>
    
    </div>
   </div>
  )
}

export default ConfirmRidePopUp