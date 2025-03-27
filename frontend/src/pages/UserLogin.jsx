import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'


const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [userData, setUserData   ] = useState({})

    const {user,setUser} = useContext(UserDataContext)


    const navigate = useNavigate()

    const submithandler = async (e) =>{
        e.preventDefault();
        const userData = {
            email:email,
            password:password
        } 
        setEmail('')
        setPassword('')
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }
    }


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
        <img className='w-16 mb-10 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

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
<p className='text-center'>New Here? <Link to={'/signup'} className='text-blue-600' >Create a new Account</Link> </p>
        </div>
        <div>
            <Link to={'/captain-login'} className='bg-[#10b461] flex item-center justify-center text-white font-semibold mb-5 rounded px-4 w-full text-lg placeholder:text-base py-2' >Sign In as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin