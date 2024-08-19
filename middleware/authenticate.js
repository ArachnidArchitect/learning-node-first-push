import { compare } from "bcrypt"
import { getUsernameDb } from "../model/tuesdayDb.js"
import {config} from 'dotenv'
import jwt from 'jsonwebtoken'

config()
const checkUser = async (req,res,next)=>{
    const {username,password} = req.body;
    let hashedPassword = await getUsernameDb(username)
    console.log(hashedPassword);
    
    compare(password,hashedPassword[0].password,(err,result)=>{
        if(result==false){
            console.log(hashedPassword[0].password)
            res.json({message:"Password incorrect"})
        } else{
            let token = jwt.sign({username:username}, process.env.SECRET_KEY, {expiresIn:'1h'})
            req.body.token = token
            console.log(token)
             
            next()
        }
    })
}

const verifyToken =(req,res,next)=>{
    let {cookie} = req.headers
    let token = cookie && cookie.split('token=')[1]
    console.log(token);

    jwt.verify(token, process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            res.json({message:'Token has expired'})
            return
        }
        req.body.user = decoded
        console.log(decoded);
        next()
    })
    
    
}
export {checkUser, verifyToken}