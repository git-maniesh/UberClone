import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
    const {user, setUser} = useContext(UserDataContext)

    const navigate = useNavigate()



    const submithandler = async (e) =>{
        e.preventDefault()
        // console.log("submitted")
        const newUser  = {
            
            fullname:{
                firstname:firstName,
                lastname:lastName,
            },
            email:email,
            password:password,
        
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

        if(response.status === 201){
            const data = response.data

            setUser(data.user)
            localStorage.setItem('token',data.token)



            navigate('/login')
        }
        

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
            <img className='w-16 mb-10 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    
        <form onSubmit={(e)=>{
        submithandler(e)
        }}>
        <h3 className='text-base font-medium mb-2'>What's your name</h3>
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
        <button
        className='bg-[#111] text-white font-semibold mb-3 rounded px-4 w-full text-base placeholder:text-sm py-2'
        >Sign Up</button>
        
        
    </form>
    <p className='text-center'>Already a User? <Link to={'/login'} className='text-blue-600' >Login/SignIn </Link> </p>
            </div>
            <div>
                <p className='text-[8px] leading-tight'>
                    By proceeding you consent to get calls, SMS messages, including by automated means, from Uber and its affiliates to the email provided
                </p>
            </div>
        </div>
  )
}

export default UserSignup