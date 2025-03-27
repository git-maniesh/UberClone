import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center absolute top-0  w-[93%]'
     
     onClick={()=>{
       props.setWaitingForDriver(false)
       // console.log("down")
       
     }} 
     ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
     <div className='flex items-center justify-between'>
      <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
      <div className='text-right'>
        <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
        <p className='text-sm text-gray-600'>Range Rover Sportz</p>
        <h1 className='text-lg font-semibold' > OTP-{props.ride?.otp}</h1>
      </div>
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
   </div>
  )
}

export default WaitingForDriver