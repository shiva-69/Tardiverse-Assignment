const mongoose=require("mongoose");
async function connectDatabase()
{
    const dbURI="mongodb://127.0.0.1:27017/Books"
    try {
        await mongoose.connect(dbURI);
        console.log("Database Connected");
    } catch (error) {
        console.log("Error connecting to Database");
    }
}
module.exports=connectDatabase;