import express from 'express'
import { fruitsRouter, userRouter } from './route/tuesday.js'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:8080',
    credentials:true
}))
app.use(express.static('public'))
app.use('/fetchUsers', userRouter)
app.use('/fetchFruits', fruitsRouter)

const port =  process.eventNames.PORT||5005

app.listen(port, ()=>{
    console.log('http://localhost:'+port)
})