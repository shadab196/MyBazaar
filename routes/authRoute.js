import express from 'express'
import {loginController, registerController, testController} from "../controller/authController.js"

import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';

//router object
 const router = express.Router()

 //routes
 //Register||method post
 router.post('/register',registerController);
//log in ""post

router.post('/login',loginController);


//test routes
router.get('/test',requireSignIn,isAdmin,testController)

//protected routes auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})


 export default router;