require("dotenv").config()
// getting the database
const connectDB =  require("./db/connect")

// getting the model 
const Product = require("./models/products")

//  getting the json products 

const productjson =  require("./products.json")

const start  = async() => {

    try {
        // establish the connection
        await connectDB(process.env.MONGODB_URL)
        await Product.deleteMany();
        await Product.create(productjson)
        console.log("success")
    } catch (e) {
        console.log(e)
        
    }
}

start()