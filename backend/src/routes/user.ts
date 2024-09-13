import express from 'express'
import {account} from '../database/account'

const app = express.Router();


app.get('/', (req, res)=>{
    res.json({message: "Hello from user"})
})

app.post('/login', async (req,res)=>{
    const {name, password} = req.body;
    const value =  account.find((e) => (e.Fname === name) && (e.password === password))? true: false;
    console.log(value)

    if(!name || ! password){
        return res.status(400).json({message: "please complete the form!"})
    }

    if(value){
        return res.status(200).json({name: "Hello, "+ name})
    }else{
        return res.status(404).json({message: "user not found!"})
    }
})

app.post('/auth', (req,res)=>{
    const {name} = req.body;
    const data = account.find((e)=> e.Fname === name)
    console.log(data)
    return res.json(data)
})


export default app