const user = require('../config/mongoose_config');



exports.alluserlist = async(request, response)=>{
    const User = await user.find();
    response.send(JSON.stringify({"status":200, "error":null, "message":alluserlist}));   
}

exports.singleuserlist = async(request, response)=>{
    const User = await user.findById(request.params.id);
    response.send(JSON.stringify({"status":200, "error":'', message:singleuser}))
}

exports.registration = async(request, response)=>{
    const registrationData = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        password: request.body.password,
        number: request.body.number
    }
    const User = new user(registrationData);
    User.save();
    response.send(`You are registered successfully`);
}

exports.update = async(request, response)=>{
    const registrationData = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        password: request.body.password,
        number: request.body.number
    }
    const User =  await user.findByIdAndUpdate(request.params.id, registrationData);
    response.send(JSON.stringify({"status":200, "error":'', "message":User}));
}

exports.delete = async(request, response)=>{
    const deleteuser = await user.findByIdAndDelete(request.params.id);
    response.send(JSON.stringify({"status":200, "error":"", message:deleteuser}))
}

exports.login = async(request, response)=>{
    const alluser = await user.findOne({email:request.body.email});
    if(request.body.password == alluser.password){
        response.send(JSON.stringify({"status":200, "error":'', "message":alluser}))
    }else{
        response.send(JSON.stringify({"status":200, "error":"", message:"Wrong User"}))
    }
}