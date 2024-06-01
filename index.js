import express from "express"
import 'dotenv/config'
import moment from 'moment';


const app = express()

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {
    await prisma.contactSchema.create({
      data: {
        phoneNumber: '8989787876',
        email: 'chiragroy30gh@gmail.com',
        createdAt: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
        updatedAt: moment().format('YYYY-MM-DDTHH:mm:ssZ'),

      },
    })
  
    const allUsers = await prisma.contactSchema.findMany()
    console.dir(allUsers, { depth: null })
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
})




const PORT = process.env.PORT || 4000

app.get("/", (req, res)=>{
    res.send("hii chirag welcome")
})


app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}/`);
})