
import { comparePassword, hashPassword } from "../helper/authHelper.js"
import userModel from "../model/userModel.js"
import JWT from "jsonwebtoken"   //to transfer data over web


export const registerController =async (req,res)=>{
    
  try {
    
  const {name,password,email,phone,address} = req.body
  if(!name){
    return res.send({message:'Name is required'})
  }
  if(!email){
    return res.send({message:'email is required'})
  }
  if(!phone){
    return res.send({message:'phone is required'})
  }
  if(!password){
    return res.send({message:'password is required'})
  }
  if(!address){
    return res.send({message:'address is required'})
  }

  //check user
  const existingUser = await userModel.findOne({email})
  //existing user
  if(existingUser){
    return res.status(200).send({
        success:false,
        message:'ALready registered please login',
    })
  }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({name,email,phone,address,password:hashedPassword}).save();

    res.status(201).send({
        success:true,
        message:'user registerd succecfully',
        user
    })
  


  } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in registration',
        error
    })}
  };







  //post LOGin
  export const loginController = async(req,res) =>{

try {
  const {email,password} = req.body

  //validation
  if(!email|| !password){
    return res.status(404).send({
      success:false,
      message:"invalid email or password"
    })
  }
  //check user
    //check user
    const user = await userModel.findOne({email})
    if(!user){
      console.log("user not found");
     return res.status(200).send({
       success:false,
       message:'email not registered'
     })
    }
  const match = await comparePassword(password,user.password)  //compares plain text with hashed
if(!match){
  return res.status(200).send({
    success:false,
    message:"invalid password",
  })
}

//toekn
const token  = await JWT.sign({_id: user._id},process.env.JWT_SECRET,{
  expiresIn:"7d",
});
res.status(200).send({
  success:true,
  message:"login succesfully",
  user:{
    name:user.name,
    email:user.email,
    phone:user.phone,
    address:user.address,
  },
  token,
})
  
} catch (error) {
  console.log(error)
  res.status(500).send({
    success:false,
    message:'error in login',
    error
  })
}


   };





   //test controlelr
export const testController = (req,res)=>{
  res.send('protected routes') 
}
