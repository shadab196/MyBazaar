import React,{useState} from 'react'
import Layout from '../../components/layout/layout'
import axios from "axios"
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import '../../styles/authStyle.css'

const Register = () => {
   const [name,setName] = useState("") 
   const [email,setEmail] = useState("") 
   const [password,setPassword] = useState("") 
   const [phone,setPhone] = useState("") 
   const [address,setAddress] = useState("") 
   const navigate = useNavigate()
   //form functin
   const handleSubmit = async (event)=>{
    event.preventDefault()
     try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address})
      if(res && res.data.success){
        toast.success(res.data.message)
        navigate("/login");

      }else{
        toast.error(res.data.message)
      }
    
    } catch (error) {
       toast.error('Something went wrong!')
     }

  }




  return (
   <Layout title={"register page"}>
     <div className='form-container'>

        <h1> Regsiter Account</h1>
        <br/>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <input
      type="text"
      value={name}
      onChange={(e)=> setName(e.target.value)}
      className="form-control"
      id="name"
      aria-describedby="name"
      placeholder='name'
      required
    />
    </div>
  <div className="mb-3">

   
    <input
      type="email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder='email'
      required
    />
    
  </div>
  <div className="mb-3">
   
    <input
      type="password"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      className="form-control"
      id="exampleInputPassword1"
      placeholder='password'
      required
    />
  </div>
  <div className="mb-3">
   
   <input
     type="number"
     value={phone}
     onChange={(e)=> setPhone(e.target.value)}
     className="form-control"
     id="phone"
     placeholder='phone'
     required
   />
 </div>

 <div className="mb-3">
   
   <input
     type="text"
     value={address}
     onChange={(e)=> setAddress(e.target.value)}
     className="form-control"
     id="address"
     placeholder='address'
     required
   />
 </div>
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

     </div>
   </Layout>
  )
}

export default Register