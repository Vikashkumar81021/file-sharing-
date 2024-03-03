import express from 'express'
import router from './routes/share-route.js '
import cors from 'cors'
import DBconnection from './db.js'

const app=express()
const PORT=3000

app.use(cors())
app.use('/',router)
DBconnection()
app.listen(PORT,()=>{
    console.log(`server is listen port no ${PORT}`)
})