import React, { useEffect } from 'react'
import axios from 'axios'

// interface User{
//   id: number,
//   fname: string,
//   lname: string,
//   email: string,
//   phone: number,
// }

function Effect() {
  const [data, setData] = React.useState<any[]>([])
  useEffect(()=>{
    axios.get("https://63e22469ad0093bf29c8b86b.mockapi.io/users")
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
  }, [])

  const delItem=(id:string)=>{
    axios.delete(`https://63e22469ad0093bf29c8b86b.mockapi.io/users/${id}`)
    .then(res=> setData(data.filter(e => e.id !== id)))
    
  
  }
  return (
    <>
        {data.map((e:any)=> (
          <div key={e.id}>
            <p>Full Name: {e.fname} {e.lname}</p>
            <p>Email: {e.email}</p>
            <p>Phone: {e.phone}</p>
            <button onClick={()=> delItem(e.id)}>delete</button>
          </div>
        ))}
    </>
  )
}

export default Effect