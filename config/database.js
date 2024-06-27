const mongoose = require("mongoose")

async function connectToDB()
{
    await mongoose.connect("mongodb://localhost:27017/blog_database") //async function
    console.log("Connected to database")
}

module.exports = connectToDB // express

// export default connecTodb //react