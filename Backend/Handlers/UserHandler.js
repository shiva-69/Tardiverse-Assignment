const Users =require("../Database/Users");
const jwt=require("jsonwebtoken");

const register = async(req,res,next) => {
    let body=req.body;
    await Users.create(body);
    return res.status(200).send({message:"Registered"});

}
const  login = async(req,res,next) =>{
    let {email,password}=req.body;
    let userData=await Users.find({email:email});

    if(userData)
    {
        if(userData.password==password)
        {

            let encryptedString =jwt.sign({name:userData.name,email:userData.email},y98eryid);

            return res.status(200).send({token : encryptedString});
        }
        else{
            return res.send({message:"Password didn'match"})
        }
    }
    else
    {
        return res.status(404).send({message:"User doesn't exists"});
    }
}

module.exports={
    register,
    login
}