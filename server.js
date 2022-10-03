import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server up on ${port}`);
});
