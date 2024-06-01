const mongoose = require("momgoose")
const connectDB = require("../dbconfig/db")


const ContactSchema = new mongoose.Schema({
      id                   Int                   
      phoneNumber          String?
      email                String?
      linkedId             Int? // the ID of another Contact linked to this one
      linkPrecedence       "secondary"|"primary" // "primary" if it's the first Contact in the link
      createdAt            DateTime              
      updatedAt            DateTime              
      deletedAt            DateTime?
    }
)