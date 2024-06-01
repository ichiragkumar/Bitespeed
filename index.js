import express from 'express';
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import router from './routes/identifyRoute.js';
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("connected to DB");

    const app = express();
  
    app.use(express.json());
    app.use('/api/v1/', router);

    const PORT = process.env.PORT || 4000;



    
    app.get('/', (req, res) => {
      res.send('hii chirag welcome');
    });





    app.listen(PORT, () => {
      console.log(`server is running at http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
