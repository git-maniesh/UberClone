import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center absolute top-0  w-[93%]'
     
     onClick={()=>{
       props.setVehicleFound(false)
       // console.log("down")
       
     }} 
     ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>

     <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>
   <div className='flex justify-between flex-col gap-1 items-center'>
     <img className='h-30' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />

     
     <div className='w-full mt-5'>
      <div className='flex items-center gap-5 p-3 border-b-2'>
         <i className=' text-lg  ri-map-pin-user-fill'></i>
         <div >
           <h3 className='text-lg font-medium'>435/12/A </h3>
           <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
         </div>

      </div>
      <div className='flex items-center gap-5 p-3 border-b-2'>
      <i className=' text-lg  ri-map-pin-2-fill'></i>
         <div >
           <h3 className='text-lg font-medium'>435/12/A </h3>
           <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
         </div>

      </div>

      <div className='flex items-center gap-5 p-3 '>
      <i className=' text-lg  ri-currency-line'></i>
         <div >
           <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
           <p className='text-sm -mt-1 text-gray-600'>Cash</p>
         </div>

      </div>

      </div>
     </div>
   </div>
  )
}

export default LookingForDriver