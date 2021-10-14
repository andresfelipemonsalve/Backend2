const {Router}= require('express');
const {check} = require('express-validator');
const userCtrl = require('../controllers/user.controller');
const validarCampos = require('../middlewares/validar');
const route =Router();

route.get('/list',userCtrl.list);
route.get("/userid/:id",userCtrl.listid);
route.post('/',
[check('name', 'el campo name es requerido o no puede estar vacio')
/* .exists() */
.trim()
.notEmpty(),
check('lastname', 'el campo apellido es requerido o no puede estar vacio')
/* .exists() */
.trim()
.notEmpty()
],
validarCampos,
userCtrl.add);
route.put("/update/:id",userCtrl.update);
route.delete("/delete/:id",userCtrl.delete);


module.exports=route; 


arreglo = ["Juan","Cañas","Perez"]
arreglo = ["Juan","Cañas","Perez"]
arreglo = ["Juan","Cañas","Perez"]

