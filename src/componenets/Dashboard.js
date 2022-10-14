import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {auth} from '../firebase'
import AddProject from './AddProject'
import Login from './Login'

const Dashboard = () => {
const [user, setUser] = useState(null)

useEffect(() => {
onAuthStateChanged(auth, user=>{
if (user) {
    setUser(user)
}else{
    setUser(null)
}
})
}, [])


  return (
    <div className='dashboard'>
    {user? <AddProject/>:<Login/>}
    </div>
  )
}

export default Dashboard