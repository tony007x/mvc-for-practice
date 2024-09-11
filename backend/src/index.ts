import express from 'express';
import { Request, Response } from 'express';
// import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// app.use('/', routes);
app.get('/', (req, res)=>{
  res.send("hello api")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
