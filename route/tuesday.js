import express from 'express'
import {getUsers, getUser, updateUser,insertUser, deleteUser, loginUser, getFruits} from '../controller/tuesdayCont.js'
import {checkUser, verifyToken} from '../middleware/authenticate.js'

const userRouter = express.Router()
const fruitsRouter = express.Router()

fruitsRouter.get('/', getFruits)

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)

userRouter.post('/insert', insertUser) 
userRouter.patch('/edit/:id', updateUser) 
userRouter.delete('/delete/:id', deleteUser) 

// bcrypt code
userRouter.post('/login',checkUser,loginUser)

//jsonwebtoken code
// router.post()

export {userRouter,fruitsRouter}