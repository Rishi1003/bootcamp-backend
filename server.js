const express = require("express");

const cors = require("cors")

const connectToDB = require("./config/database")

const mongoose = require("mongoose")

const bcrypt = require("bcrypt")

const PORT = process.env.PORT || 3000


const blog_schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
});

const blog_model = new mongoose.model('blogs', blog_schema)

const app = express()

app.use(express.json())

app.use(cors())

//connecting db async to sync using await
connectToDB()



app.get("/blogs",async (req,res)=>{
    
    const data = await blog_model.find()
    res.send(data)
})

app.get("/blogs/:id",async (req,res)=>{
    
    const id = req.params.id

    const data = await blog_model.find({_id:id});
    res.send(data)
})

app.post("/login",async (req,res)=>{
    
    console.log("reached");

    const {phone, password} = req.body
    

    const user = usermode.find({phone:phone})

    const hash = user.password


    const useremail = "bootcamp@test.com"
    

    bcrypt.compare(password,hash,(err,result)=>{
        if(email === useremail && result)
            {
                console.log("here");
                res.status(200).json({msg:"authorized"})
            }
            else
            {
                console.log("here in the else");
                res.status(401).json({msg:"not auth"})
            }
    })

    
});


app.post("/signup",async (req,res)=>{
    
    console.log("reached");

    const {email, password} = req.body
    

    async function hashPassword(password) {
        try {
          const salt = await bcrypt.genSalt(saltRounds);
          const hash = await bcrypt.hash(password, salt);
          console.log(hash);

          //logic to create new user in the database and store his hash
         // const = usermodel.create({email:email, password: hash})

        } catch (err) {
          console.error(err);
        }
      }
      
      hashPassword(password);
      

    

    
});

app.post("/blogs",async (req,res)=>{
    
    const body = req.body

    const response = await blog_model.create(body)

    res.send(response)

})

app.delete("/blog/:id",async (req,res)=>{
    const id = req.params.id

    const response = await blog_model.deleteOne({_id:id})

    res.send(response)
})

app.listen(PORT,()=>{
    console.log('server has started in port',PORT);
})