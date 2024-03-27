require("dotenv").config()
const express = require('express')
 const app =  express()

 const connectDB = require("./db/connect")

 const PORT = process.env.PORT || 5000

 const page_routes = require("./routes/products")

 app.get("/",(req,res) => {
    res.send("Hey i am live")
 })
//   middleware
 app.use("/api/products",page_routes)

 const start = async () => {
   try {
      await connectDB(process.env.MONGODB_URL);
      app.listen(PORT,()=>{
         console.log(`${PORT} yes i am conneected`)
      })
      
   } catch (e) {
      console.log(e)
   }
 }

 start();