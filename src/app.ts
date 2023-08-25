import express from 'express';
import 'dotenv/config';
import cors from'cors';
import bodyParser from 'body-parser';
import { testDbConnection} from './config/database';
import Userrouter from './routes/user.routes'


const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(Userrouter);


app.get('/', (req, res) => {
  res.send('Hello, Express with TypeScript!');
});



app.listen(PORT, () => {
  testDbConnection();
  console.log(`Server is running on port ${PORT}`);
});