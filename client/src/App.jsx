import {Route, Routes} from 'react-router-dom'
import './App.css'
import { UserContextProvider } from './context/UserContext'
import Login from './pages/Login'

function App() {

  return (
 <UserContextProvider>
  <Routes>
    <Route exact path='/login' element={<Login /> } />
  </Routes>
 </UserContextProvider>
  )
}

export default App
