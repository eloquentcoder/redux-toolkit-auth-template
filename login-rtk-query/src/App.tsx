import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { signupUser, selectAuthState } from './redux/auth.slice'
import { User } from './types/user.types';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';

function App() {

  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => selectAuthState(state))


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = () => {
    dispatch(signupUser({ name, email, password }))
  }

  return (
    <div className="App">
      <h1>{
        user.user ? 'User is registered' : 'Login To User'
      } </h1>
      <div className="flex">
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
        <button onClick={registerUser}>Login</button>
      </div>
    </div>
  )
}

export default App
