import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FinishRide = (props) => {
  const navigate= useNavigate()
  async function endRide(){
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`,{
    
        rideId: props.ride._id,
    },{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    if(response.status === 200){
      // props.setFinishRidePanel(false)
      // props.setRidePopupPanel(false)
     navigate('/captain-home')
    }
  }
  return (
      <div>
        <h5 className='p-1 text-center absolute top-0  w-[93%]'
         
         onClick={()=>{
           props.setFinishRidePanel(false)
      
           
         }} 
         ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
    
         <h3 className='text-2xl font-semibold mb-5'>Finish this ride</h3>
    
         <div className='flex items-center justify-between mt-3 p-4 border-2 border-yellow-400 rounded-lg'>
            <div className='flex items-center gap-3 ' >
                <img className='h-12 w-12 rounded-full object-cover' src="https://i.scdn.co/image/ab6761610000517453ca421f91678c26b4f15512" alt="" />
                <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname}</h2>
                
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
       
        <button 
        onClick={endRide}
        className='w-full mt-5 flex text-lg  justify-center bg-green-500 text-white font-semibold p-2 rounded-lg' >Finish Ride</button>
        <p className=' mt-10 text-xs'>Click on finish if you have completed the ride.</p>
    
   
    
    
        
        </div>
       </div>
  )
}

export default FinishRide