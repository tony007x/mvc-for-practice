import express from 'express'
import path from 'path';
import fs from 'fs';

const app = express.Router();


interface Account {
    username: string;
    password: string;
}

const dataPath = path.join(__dirname, 'userAccount.json');

const saveData = (data: Account[]): void => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

const getData = (): Account[] => {
    if (fs.existsSync(dataPath)) {
        return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    }
    return [];
};


app.get('/', (req, res) => {
    res.json({ message: "Hello from user" })
})


app.post('/login', async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).json({ message: "please complete the form!" })
    }

    const newUser: Account = { username: name, password: password };
    const user = getData();
    user.push(newUser)
    saveData(user)

    return res.status(200).json({message: "successfully!"})

})



app.get('/read', async (req,res)=>{
    const data = getData();

    return res.status(200).json(data)
})



export default app