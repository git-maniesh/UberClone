import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import Start from './pages/Start.jsx'
import UserProtectWrapper from './pages/UserProtectWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'
import CaptainHome from './pages/CaptainHome.jsx'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper.jsx'
import CaptainLogout from './pages/CaptainLogout.jsx'
import Riding from './pages/Riding.jsx'
import CaptainRiding from './pages/CaptainRiding.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Start/>} />
        <Route path='/login' element= {<UserLogin/>} />
        <Route path='/riding' element= {<Riding/>} />

        <Route path='/signup' element= {<UserSignup/>} />
        <Route path='/captain-login' element= {<CaptainLogin/>} />

        <Route path='/captain-signup' element= {<CaptainSignup/>} />

        <Route path='/captain-home' element= {<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>} />
        <Route path='/captain-riding' element={<CaptainRiding />} />
        <Route path='/captain-logout' element= {<CaptainProtectWrapper><CaptainLogout/></CaptainProtectWrapper>} />


        <Route path='/home' element={<UserProtectWrapper><Home /></UserProtectWrapper>        } />
        <Route path='/logout' element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>} />


      </Routes>
      
    </div>
  )
}

export default App


// api -- >
// AIzaSyBQSX7_XCfJB7BQqKtSl0QxNFJgoKyjVak