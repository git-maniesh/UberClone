import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const {captain, setCaptain} = React.useContext(CaptainDataContext)
 const [vehicleColor, setVehicleColor] = useState('')
 const [vehiclePlate, setVehiclePlate] = useState('')
 const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')



    const navigate = useNavigate()
    const submithandler = async (e) =>{
        e.preventDefault()
        // console.log("submitted")
        const captainData = {
            fullname:{
                firstname:firstName,
                lastname:lastName,
            },
            email:email,
            password:password,
            vehicle:{
                color:vehicleColor,
                plate:vehiclePlate,
                capacity:vehicleCapacity,
                vehicleType:vehicleType
            }
        }
        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)

        if(response.status === 201){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)

            navigate('/captain-login')
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleCapacity('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleType('')
    }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
        <img className='w-25 mb-7 ' src="https://finevpn.org/wp-content/uploads/2024/02/uber-logo-logo-1024x576.png" alt="" />
    
        <form onSubmit={(e)=>{
        submithandler(e)
        }}>
        <h3 className='text-base font-medium mb-2'>What's our Captain's name</h3>
        <div className='flex gap-4 mb-5 '>
        <input type='text' 
        required 
        value={firstName}
        onChange={(e)=>{
            setFirstName(e.target.value)
        }}
        placeholder='First Name' 
        className='bg-[#eeeeee]  rounded px-4  w-1/2 text-base placeholder:text-sm py-2' />
        <input type='text' 
        required 
        value={lastName}
        onChange={(e)=>{
            setLastName(e.target.value)
        }}
        placeholder='Last Name ' 
        className='bg-[#eeeeee]  rounded px-4  w-1/2 text-base placeholder:text-sm py-2' />
        </div>
        <h3 className='text-base font-medium mb-2'>What's your email</h3>
        <input type='email' 
        required 
        placeholder='abc@example.com' 
        value={email}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] mb-5 rounded px-4  w-full text-base placeholder:text-sm py-2' />
        <h3 className='text-base font-medium mb-2'>Enter Password</h3>
        <input type='password' 
        required 
        placeholder='Password'
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        className='bg-[#eeeeee] mb-5 rounded px-4  w-full text-base placeholder:text-sm py-2' />

{/* vehicle category */}
<h3 className='text-base font-medium mb-2'>Vehicle Information </h3>
<div className='flex gap-4 mb-2 '>
        <input type='text' 
        required 
        placeholder='Vehicle Color'
        value={vehicleColor}
        onChange={(e)=>{
            setVehicleColor(e.target.value)
        }}
        className='bg-[#eeeeee] mb-5 rounded px-4  w-1/2 text-base placeholder:text-sm py-2' />
{/* 
<h3 className='text-base font-medium mb-2'>What's your Vehicle Number Plate</h3> */}
        <input type='text' 
        required 
        placeholder='Vehicle Number Plate'
        value={vehiclePlate}
        onChange={(e)=>{
            setVehiclePlate(e.target.value)
        }}
        className='bg-[#eeeeee] mb-5 rounded px-4  w-1/2 text-base placeholder:text-sm py-2' />
        </div>

{/* <h3 className='text-base font-medium mb-2'>What's your Vehicle Capacity</h3> */}
<div className='flex gap-4 mb-2 '>
        <input type='number' 
        required 
        placeholder='Vehicle Capacity'
        value={vehicleCapacity}
        onChange={(e)=>{
            setVehicleCapacity(e.target.value)
        }}
        className='bg-[#eeeeee] mb-5 rounded-lg px-4  w-1/2 text-base placeholder:text-sm py-2' />

{/* <h3 className='text-base font-medium mb-2'>What's your Vehicle type?</h3> */}
        <select 
        required 
        
        value={vehicleType}
        onChange={(e)=>{
            setVehicleType(e.target.value)
        }}
        className='bg-[#eeeeee] mb-5 rounded-lg px-4  w-1/2 text-base placeholder:text-sm py-2'>

            <option value={''} disabled >Select your Vehicle Type</option>
            <option value={'car'}>Car</option>
            <option value={'auto'}>Auto</option>
            <option value={'motorcycle'}>Motorcycle</option>

        </select>

</div>




        <button
        className='bg-[#111] text-white font-semibold mb-3 rounded px-4 w-full text-base placeholder:text-sm py-2'
        >Sign Up</button>
        
        
    </form>
    <p className='text-center'>Already a Captain? <Link to={'/captain-login'} className='text-blue-600' >Log In/Sign In </Link> </p>
            </div>
            <div>
                <p className='text-[8px] mt-4 leading-tight'>
                    By proceeding you consent to get calls, SMS messages, including by automated means, from Uber and its affiliates to the email provided
                </p>
            </div>
        </div>
  )
}

export default CaptainSignup