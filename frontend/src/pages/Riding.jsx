import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {SocketContext} from '../context/SocketContext'
import LiveTracking from '../components/LiveTracking';

const Riding = () => {
  const location = useLocation();

  const {ride} = location.state || {}
  const {socket} = useContext(SocketContext)
  const navigate = useNavigate()
  socket.on('ride-ended', ()=>{
    navigate('/home')
  })
  return (
    <div className='h-screen'>
        <Link to={'/home'} className='fixed h-10 right-2 top-2 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className='text-lg font-medium  ri-home-5-line'></i>
        </Link>
        <div className='h-1/2'>

        <LiveTracking />
        </div>
        <div className='h-1/2 p-5'>
        <div className='flex items-center justify-between'>
      <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
      <div className='text-right'>
        <h2 className='text-lg font-medium capitalize '>{ride?.captain.fullname.firstname}</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.plate}</h4>
        <p className='text-sm text-gray-600'>Range Rover Sportz</p>

      </div>
     </div>

   <div className='flex justify-between flex-col gap-1 items-center'>

     
     <div className='w-full mt-5'>
      
      <div className='flex items-center gap-5 p-3 border-b-2'>
      <i className=' text-lg  ri-map-pin-2-fill'></i>
         <div >
           <h3 className='text-lg font-medium'>Destination:</h3>
           <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
         </div>

      </div>

      <div className='flex items-center gap-5 p-3 '>
      <i className=' text-lg  ri-currency-line'></i>
         <div >
           <h3 className='text-lg font-medium'>₹{ride?.fare}</h3>
           <p className='text-sm -mt-1 text-gray-600'>Cash</p>
         </div>

      </div>

      </div>
     </div>
        <button className='w-full bg-green-500 text-white font-semibold p-2 rounded-lg'  >Make a Payment</button>

        </div>
    </div>
  )
}

export default Riding