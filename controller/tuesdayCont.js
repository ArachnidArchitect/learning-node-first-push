import { getUsersDb,getUserDb, updateUserDb, insertUserDb, deleteUserDb,getFruitsDb } from "../model/tuesdayDb.js";
import {hash} from 'bcrypt'

const getUsers = async(req, res)=>{
    res.json(await getUsersDb())
}
const getUser = async(req,res)=>{
    res.json(await getUserDb(req.params.id))
}
const getFruits = async(req,res)=>{
    
    res.json(await getFruitsDb());
}

const insertUser = async(req, res)=>{
   const  {name, surname, age, fav_coding_lang, fav_car, eye_color, username, password} = req.body

// bcrypt code
    let hashedP = await hash(password, 10)
    console.log(hashedP);
    if(hashedP.stack) throw (hashedP)
        await insertUserDb(name,surname,age,fav_coding_lang,fav_car,eye_color,username,hashedP)
        res.send(await getUserDb())
        console.log('Data was inserted successfully')
}

const updateUser= async (req,res)=>{
    let {name, surname, age, fav_coding_lang, fav_car, eye_color,username, password} = req.body
    const id = req.params.id
    const storedValues = await getUserDb(id)

//this edits even if other values are empty
    name? name = name : name = storedValues[0].name
    surname? surname = surname : surname = storedValues[0].surname
    age? age = age : age = storedValues[0].age
    fav_coding_lang? fav_coding_lang = fav_coding_lang : fav_coding_lang = storedValues[0].fav_coding_lang
    fav_car? fav_car = fav_car : fav_car = storedValues[0].fav_car
    eye_color? eye_color = eye_color : eye_color = storedValues[0].eye_color
    username? username = username : username = storedValues[0].username
    password? password = password : password = storedValues[0].password

    await updateUserDb(name, surname, age, fav_coding_lang, fav_car, eye_color,username, password, id)
    res.send('table was updated')

}
const deleteUser = async(req,res)=>{
    await deleteUserDb(req.params.id)
}


const loginUser = (req, res)=>{
    res.json({
        message:"you have signed in!!",
        token:req.body.token
    })
}
export {getUsers, updateUser,insertUser, deleteUser, getUser, loginUser, getFruits}


//toastify