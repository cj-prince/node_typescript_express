import express from 'express';
import 'dotenv/config';


const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express with TypeScript!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});