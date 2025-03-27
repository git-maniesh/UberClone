import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center absolute top-0  w-[93%]'
     
     onClick={()=>{
       props.setRidePopUpPanel(false)
       // console.log("down")
       
     }} 
     ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>

     <h3 className='text-2xl font-semibold mb-5'>New Ride Available</h3>

     <div className='flex items-center justify-between mt-3 p-3 bg-yellow-400 rounded-lg'>
        <div className='flex items-center gap-3 ' >
            <img className='h-12 w-12 rounded-full object-cover' src="https://i.scdn.co/image/ab6761610000517453ca421f91678c26b4f15512" alt="" />
            <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
            
        </div>
        <h5 className='text-lg font-semibold '>2.2 KM</h5>
     </div>

   <div className='flex mt-5  w-full justify-between flex-col gap-1 items-center'>

     
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
           <p className='text-sm -mt-1 text-gray-600'>Cash</p>
         </div>

      </div>

      </div>
     </div>
     <div className='flex items-center justify-between'>
     <button onClick={()=>{
       props.setRidePopUpPanel(false)
       
       
     }}  className=' mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg' >Ignore</button>
     <button onClick={()=>{
       props.setConfirmRidePopUpPanel(true)
       props.confirmRide()
      //  console.log(props.confirmRide() )
     }}   className='  bg-green-500 text-white font-semibold p-3 px-10 rounded-lg' >Accept</button>
  

     </div>
   </div>

  )
}

export default RidePopUp