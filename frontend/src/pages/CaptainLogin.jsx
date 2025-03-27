import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = ()  => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {captain,setCaptain} = useContext(CaptainDataContext)
    const navigate  = useNavigate();
       

    const submithandler = async (e) =>{
        e.preventDefault();
        const captain = {
            email:email,
            password:password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
        }
    
    
    
    


       
        setEmail('')
        setPassword('')

    }


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
        <img className='w-25 mb-7 ' src="https://finevpn.org/wp-content/uploads/2024/02/uber-logo-logo-1024x576.png" alt="" />

<form onSubmit={(e)=>{
    submithandler(e)
}}>
    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
    <input type='email' 
    required 
    placeholder='abc@example.com' 
    value={email}  
    onChange={(e)=>{
        setEmail(e.target.value)
    }}
    className='bg-[#eeeeee] mb-7 rounded px-4  w-full text-lg placeholder:text-base py-2' />
    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
    <input type='password' 
    required 
    placeholder='Password'
    value={password}  
    onChange={(e)=>{
        setPassword(e.target.value)
    }}
    className='bg-[#eeeeee] mb-7 rounded px-4  w-full text-lg placeholder:text-base py-2' />
    <button
    className='bg-[#111] text-white font-semibold mb-3 rounded px-4 w-full text-lg placeholder:text-base py-2'
    >Login</button>
    
    
</form>
<p className='text-center'>Join a fleet <Link to={'/captain-signup'} className='text-blue-600' >Register as a Captain</Link> </p>
        </div>
        <div>
            <Link to={'/login'} className='bg-[#d5622d] flex item-center justify-center text-white font-semibold mb-5 rounded px-4 w-full text-lg placeholder:text-base py-2' >Sign In as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin