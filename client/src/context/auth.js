import {useState ,useEffect, createContext, useContext} from 'react'
import axios from 'axios';
const AuthContext = createContext();

const AuthProvider =({children})=>{
    const [auth,setAuth] = useState({
        user:null,
        token:"",
    });
  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;



    useEffect(()=>{      //otherwise on refrsh, data losses, it takes from local strogae
        const data = localStorage.getItem('auth')
       if(data){
        const parseData = JSON.parse(data)
        setAuth({
            ...auth,
            user:parseData.user,
            token:parseData.token
        }) 
       }
       //esline disabled next line .......otherwiase [auth] likhe the then continuous
       //count kar raha tha inpspect pe
    },[])
    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )

    }
//custom hook
const useAuth =() => useContext(AuthContext);
export {useAuth,AuthProvider};