import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)
  const location = useLocation()
  const rideData = location.state?.ride 
  useGSAP(function(){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(0%)',
        
      })
    }else{
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(100%)',
       
      })
    }
  },[finishRidePanel])
  return (
    <div className='h-screen '>
    
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen' >
      <img className='w-20' src="https://finevpn.org/wp-content/uploads/2024/02/uber-logo-logo-1024x576.png" alt="" />
      <Link to={'/captain-home'} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className='text-lg font-medium  ri-logout-box-r-line'></i>
    </Link>
    </div>
    <div className='h-4/5 '>
    <LiveTracking />
    </div>
    <div className='h-1/5 p-6 bg-yellow-400 flex items-center relative   justify-between' onClick={()=>{
      setFinishRidePanel(true)
    }}>
    <h5 className='p-1 text-center absolute top-0  w-[93%]'
     
     ><i className='text-3xl text-gray-200 ri-arrow-up-wide-line'></i></h5>
    <h4 className='text-xl font-semibold '>4 KM Away</h4>
    <button className='  bg-green-500 text-white font-semibold p-3 px-10 rounded-lg' >Complete Ride</button>

    </div>
    <div ref={finishRidePanelRef}  className='fixed w-full h-screen z-10 bottom-0 bg-white translate-y-full   py-6 pt-12 px-3'>
      <FinishRide 
      ride={rideData}
      setFinishRidePanel={setFinishRidePanel} />

         
      </div>
    
</div>
  )
}

export default CaptainRiding