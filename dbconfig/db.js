const connectDB = require("mongoose")

connectDB.connect(process.env.DATABASE_URL)

exports.module = connectDB