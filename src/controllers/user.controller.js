const userCtrl = {}
const userModel = require('../models/user.model')

userCtrl.list= async(req, res)=>{
    try {
        const limit = parseInt(req.query.limit) || 5;
        const page = parseInt(req.query.page) || 1;
        const options = {
            limit,
            page,
        }/* 
        const users = await userModel.find() */

        const users = await userModel.paginate({},options)
        res.json({
            ok:true,
            users 
        })
} catch (error) {
            res.status(500).json({
                ok:false,
                message:error.message,
            })   
    }
}

userCtrl.delete= async(req, res)=>{
    try {
        const {id}= req.params
        const user= await userModel.findById({_id:id})
        
        if(!user){
            return res.status(404).json({
                ok:false,
                message: 'usuario no encontrado'    
            })
        }      

        await user.deleteOne()
        res.json ({
            ok:true,
            message:"Usuario eliminado"
        })    

    } catch (error) {
            res.status(500).json({
                ok:false,
                message:error.message,
            })   
    }
}

userCtrl.update= async(req, res)=>{
    try {
        const {id}= req.params
        const user= await userModel.findById({_id:id})
        
        if(!user){
            return res.status(404).json({
                ok:false,
                message: 'usuario no encontrado'    
            })
        }      
        const name= req.body.name || user.name
        const lastname =req.body.lastname || user.lastname
        const email =req.body.email || user.email
        const salary =req.body.salary || user.salary
        
        const userUpdate={
            name, lastname, email, salary,
        };

        await user.updateOne(req.body)
        res.json({
            ok:true,
            message: 'Usuario actualizado', 
        })
        } catch (error) {
            res.status(500).json({
                ok:false,
                message:error.message,
            })   
    }
}

userCtrl.listid= async(req, res)=>{
    try {
        const {id}= req.params
        const user= await userModel.findById({_id:id})
        if (!user){
            return res.status(404).json({
                ok:false,
                message: 'Usuario no encontrado'    
            })
        }
        res.json({
            ok:true,
            user
        })
} catch (error) {
            res.status(500).json({
                ok:false,
                message:error.message,
            })   
    }
} 

userCtrl.add= async(req, res)=>{
    try {
        const {name,lastname,email, salary} = req.body
        if(!name || name.trim()===""){
            return res.status(400).json({
                ok:false,
                message:'El campo name es requerido y/o  no puede estár vacio '
            })
        }
        if(!lastname || lastname.trim()===""){
            return res.status(400).json({
                ok:false,
                message:'El campo apellido es requerido y/o  no puede estár vacio '
            })
        }
        const verificar=await userModel.findOne({email});
        if(verificar){
            return res.status(400).json({
                ok:false,
                message: 'El correo ya está registrado con otro usuario'
            })
        }
        const newUser = new userModel({
            name,
            lastname,
            email,
            salary
        })
        await newUser.save()
        res.json({
            ok:true,
          newUser
        })
} catch (error) {
            res.status(500).json({
                ok:false,
                message:error.message,
            })   
    }
} 

module.exports= userCtrl