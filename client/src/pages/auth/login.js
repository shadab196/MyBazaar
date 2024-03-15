import React,{useState} from 'react'
import Layout from '../../components/layout/layout'
import axios from "axios"
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import '../../styles/authStyle.css'
import {useAuth} from '../../context/auth'

const Login = () => {

  
    const [email,setEmail] = useState("") 
    const [password,setPassword] = useState("") 
   const [auth,setAuth] = useAuth()
    const navigate = useNavigate()
 //form functin
 const handleSubmit = async (event)=>{
    event.preventDefault()
     try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
      if(res && res.data.success){
        toast.success("Login successfully")
        setAuth({           //before navigate store the details
          ...auth,
          user:res.data.user,
          token: res.data.token,
        }) //but it is not storing , we have to stroe it also in local storage
       localStorage.setItem('auth',JSON.stringify(res.data))
        navigate("/");  //redirect to home

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

        <h1> Login Account</h1>
        <br/>
        <form onSubmit={handleSubmit}>
     
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
 


  
  <button type="submit" className="btn btn-primary">
    Login
  </button>
</form>

     </div>
   </Layout>
  )
}

export default Login