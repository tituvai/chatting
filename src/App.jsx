
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/page/Home'
import RootLayout from './components/layout/RootLayout'
import Dashbord from './components/page/Dashbord'
import Signup from './components/page/Signup'
import Login from './components/page/Login'
import Message from './components/page/Message'

function App() {
 

  return (
  <>
  <Routes>
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/singup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    </Route>
    <Route path='/dashbord' element={<Dashbord/>}/>
    <Route path='/message' element={<Message/>}/>
  </Routes>
  
  </>
  )
}

export default App
