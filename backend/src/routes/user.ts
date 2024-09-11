import express from 'express'


const app = express.Router();


app.get('/', (req, res)=>{
    res.json({message: "Hello from user"})
})

app.post('/login', async (req,res)=>{
    const {name} = req.body;

    res.json({name: "Hello, "+ name})
})


export default app