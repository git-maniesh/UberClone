import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopUpPanel] = useState(false)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupRef = useRef(null)

  const [ride, setRide] = useState(null)
  const {socket} = useContext(SocketContext)
  const {captain} = useContext(CaptainDataContext)



  useEffect(() => {
   
    socket.emit('join',{
      userId: captain._id,
      userType:'captain'
    })
    const updateLocation = () =>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => 
          socket.emit('update-location-captain',{
            userId:captain._id,
            location:{
              ltd:position.coords.latitude,
            lng:position.coords.longitude
          }
          })
        )
      }
    }
    const locationInterval = setInterval(updateLocation,10000)
    updateLocation()
    // return () => clearInterval(locationInterval)
    
  })
  socket.on('new-ride', (data)=>{
    setRide(data)
    setRidePopUpPanel(true)
    console.log(data)
  })
  
  async function confirmRide() {

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

        rideId: ride._id,
        captainId: captain._id,


    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
// console.log(response)
    setRidePopUpPanel(false)
    setConfirmRidePopUpPanel(true)

}

  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(0%)',
        
      })
    }else{
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(100%)',
       
      })
    }
  },[ridePopupPanel])
  useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopupRef.current,{
        transform:'translateY(0%)',
        
      })
    }else{
      gsap.to(confirmRidePopupRef.current,{
        transform:'translateY(100%)',
       
      })
    }
  },[confirmRidePopUpPanel])
  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen' >
          <img className='w-20' src="https://finevpn.org/wp-content/uploads/2024/02/uber-logo-logo-1024x576.png" alt="" />
          <Link to={'/captain-login'} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className='text-lg font-medium  ri-logout-box-r-line'></i>
        </Link>
        </div>
        <div className='h-3/5'>
          <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHViZXIlMjBtYXAlMjBncHN8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div className='h-2/5 p-6'>
          <CaptainDetails />
        </div>
        <div  ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full   py-6 pt-12 px-3'>

          <RidePopUp 
          ride={ride}
          setRidePopUpPanel={setRidePopUpPanel} 
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} 
          confirmRide={confirmRide}
          />
      </div>
      <div  ref={confirmRidePopupRef} className='fixed w-full h-screen z-10 bottom-0 bg-white translate-y-full   py-6 pt-12 px-3'>

          <ConfirmRidePopUp ride={ride} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome