import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Post() {
    const Navigate = useNavigate()
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(0)
    const PostData =()=>{
        // if(fname.length >= 3 && lname.length >= 3){

            axios.post("https://63e22469ad0093bf29c8b86b.mockapi.io/users", {fname, lname, email, phone}).then(res => {console.log(res)})
            axios.get("https://63e22469ad0093bf29c8b86b.mockapi.io/users")
            Navigate("/")
        // }
    }
  return (
    <div>
        <input type="text" placeholder='Fname' onChange={e => {setFname(e.target.value)}}/>
        <input type="text" placeholder='Lname' onChange={e => {setLname(e.target.value)}}/>
        <input type="email" placeholder='Email' onChange={e => {setEmail(e.target.value)}}/>
        <input type="number" placeholder='Phone' onChange={e => {setPhone(+e.target.value)}}/>
        <button onClick={PostData}>Login</button>
    </div>
  )
}

export default Post