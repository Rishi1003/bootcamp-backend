const mongoose = require("mongoose")

const dotenv = require("dotenv")

dotenv.config()

console.log(process.env.MONGO_URI);

async function connectToDB()
{
    await mongoose.connect(process.env.MONGO_URI) //async function
    console.log("Connected to database")
}

module.exports = connectToDB // express

// export default connecTodb //react