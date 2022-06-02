var express = require('express');
var router = express.Router();
const data = require('../userData');
const methods = require('../methods');
const dato = require('../Datos');
const User = require ('../models/user');


//rutas

const registerR = "../views/pages/register";
const loginR = "../views/pages/login";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Programacion ' });
});

router.get ('/home', function(req, res){
  if (req.user){
    res.render ('home',{title1: "Bienvenido", userName: req.user.fulln});
  }else{
    res.render(loginR,{
      message: "inicie seccion para continuar",
      messageClass: "alert-danger"
    });

  }

  
})

router.get('/register', (req, res) => {
  res.render(registerR);
});
router.get('/login', (req, res) => {
  res.render(loginR);
});

router.post('/register',async (req, res) => {
  const {fulln, email, password, cp } = req.body;

  try{
    if (password === cp){
      /* if (data.data.find(dat => dat.email === email)) {
         res.render(registerR,{
           message: "El usuario ya esta registrado",
           messageClass: "alert-danger"
         });
   
       }
   
       const hashedPassword = methods.getHashedPassWord(password);
   
       // actualizamos el array con el nuevo registro
    
       data.data.push({
         fulln,
         email,
         password: hashedPassword
       });
       dato.info(fulln, email, hashedPassword)
       res.render(loginR,{
         message: "El registro se ha completado",
         messageClass: "alert-success"
       });*/
   
       //validar si el correo existe
       user = await User.findOne({email: email})
       .then(user => {
         if(user){
           res.render(registerR,{
             message: "El usuario ya esta registrado",
             messageClass: "alert-danger"
           });
         }else{
           const hashedPassword = methods.getHashedPassWord(password);

           const userDB = new User({'fulln': fulln, 'email':email, 'password': hashedPassword})

           userDB.save();

           res.render(loginR,{
            message: "El registro se ha completado",
            messageClass: "alert-success"
          });
         }
       });
   
   
     }else{
       res.render(registerR,{
         message: "El password no coincide",
         messageClass: "alert-danger"
       });
       
     }
  
  }
  catch(error){
    console.log('error', error);
    
  }
});
router.post ('/login',async (req, res) => {
  const {email, password } = req.body;
  const hashedPassword = methods.getHashedPassWord(password);

  user = await User.findOne({email:email, password:hashedPassword})
  .then (user => {
    if (user){
      const authToken = methods.generateAuthToken();
  
      methods.authTokens[authToken] = user;
      res.cookie('AuthToken', authToken);
      res.redirect("/home");
  
    }else{
      res.render(loginR, {
        message: "Usuario y password invalidos",
        messageClass: "alert-danger"
      });
    }

  }) 
});

//logout
router.get('/logout',(req, res) => {
  res.clearCookie('AuthToken');
  return res.redirect('/');
})


module.exports = router;
