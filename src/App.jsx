
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/page/Home'
import RootLayout from './components/layout/RootLayout'
import Dashbord from './components/page/Dashbord'
import Signup from './components/page/Signup'
import Login from './components/page/Login'
import Message from './components/page/Message'
import Notification from './components/page/Notification'
import Setting from './components/page/Setting'
import SidebarRootLayout from './components/layout/SidebarRootLayout'

function App() {
 

  return (
  <>
  <Routes>
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/singup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    </Route>
    <Route path='/' element={<SidebarRootLayout/>}>
    <Route path='/dashbord' element={<Dashbord/>}/>
    <Route path='/message' element={<Message/>}/>
    <Route path='/notification' element={<Notification/>}/>
    <Route path='/setting' element={<Setting/>}/>
    </Route>
  </Routes>
  
  </>
  )
}

export default App
