
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/page/Home'
import RootLayout from './components/layout/RootLayout'
import Dashbord from './components/page/Dashbord'

function App() {
 

  return (
  <>
  <Routes>
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    </Route>
    <Route path='dashbord' element={<Dashbord/>}/>
  </Routes>
  
  </>
  )
}

export default App
