import {Route, Routes} from 'react-router-dom'
import './App.css'
import { UserContextProvider } from './context/UserContext'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost'
import PostDetails from './pages/PostDetails'

function App() {

  return (
 <UserContextProvider>
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/login' element={<Login /> } />
    <Route exact path='/register' element={<Register /> } />
    <Route exact path='/write' element={<CreatePost /> } />
    <Route exact path='/posts/post/:id' element={<PostDetails /> } />
  </Routes>
 </UserContextProvider>
  )
}

export default App
