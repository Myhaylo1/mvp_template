let {User}=require('./../models');
exports.createUser=async(req,res,next)=>{
  let {body}=req;
  let cretatedUser=null;
  try{
    created=await User.create(body);
  }catch
  console.log(createUser);
  res.status(201,
}
exports.getUserById=async(req,res,next)=>{}
exports.getUsers=async(req,res,next)=>{}
exports.updateUserById=async(req,res,next)=>{}
exports.deleteUserById=async(req,res,next)=>{}