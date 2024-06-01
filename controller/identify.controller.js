import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import moment from 'moment';

console.log("i am here at controller");
const identifyUser = async (req, res, next) => {
        try {
            const  { phoneNumber,email} =await req.body
            console.log(req.body);
            console.log(phoneNumber);
            console.log(email);


            const isEmailExist = await prisma.contactSchema.findUnique({
                where: { email: email },
              });

            console.log(isEmailExist);
            if(isEmailExist){
                 return res.status(409).json({msg:"Already Exist"})
            }

            const newUSer = await prisma.contactSchema.create({
                data: {
                  phoneNumber: phoneNumber,
                  email: email,
                  createdAt: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
                },
              })

            console.log("user creaetd succesfully");
            return res.status(201).json({
                newUSer
            })

        } catch (error) {
            console.log(error);
            
        }
            
           
}


export default identifyUser
