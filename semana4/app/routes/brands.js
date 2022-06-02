//importar referencias
const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

//llamnado al modelo
const Brand = require('../models/brand');

router.get('/', (req, res) =>{
    if (req.user){
        res.render("pages/brand/brandAddEdit",{
            viewTitle: "New Brand",
            userName: req.user.fulln
        });
      }else{
        res.render('../views/pages/login',{
          message: "inicie seccion para continuar",
          messageClass: "alert-danger"
        });
    
      }
});


router.post('/',(req, res) => {
    if(req.body._id == '')
    newBrand(req, res);
    else
    updateBrand(req, res);
});

function newBrand(req, res){
    var brand = new Brand();
    brand.name = req.body.name;
    brand.description = req.body.description;
    brand.save((err) =>{
        if(!err){
            res.redirect("/brand/list");

        }
        else{
            console.log("Se ha producido un error")
        }
    });

}

function updateBrand(req, res){
    // busca el id y si no encuentra crea uno nuevo
    Brand.findOneAndUpdate({_id: req.body._id}, req.body, {new: true},
        (err) =>{
            //verificar si hay un error
            if(!err){
                res.redirect("brand/list");
            } else{
                res.render("pages/brand/brandAddEdit", {
                    viewTitle: "Update Brand",
                    brand: req.body
                });
            }
        });

}

router.get('/list', (req, res) =>{
    if (req.user){
        Brand.find((err, docs) =>{
            if(!err){
                res.render("pages/brand/list", {
                    viewTitle: "Brand List",
                    list: docs
                });
            } else{
                console.log("Error al listar las marcas" + err);
            }
        })

    }
    
})

router.get('/:id',(req, res) => {
    Brand.findById(req.params.id, (err, docs) =>{
        if(!err){
            res.render("pages/brand/brandAddEdit", {
                viewTitle: "Update Brand",
                brand: docs
            })
        }
    });
});

router.get('/delete/:id', (req, res) =>{
    Brand.findByIdAndRemove(req,params.id,(err, docs) =>{
        if(!err){
            res.redirect('/brand/list')

        } else{
            console.log("No se ha podido eliminar")
        }
    })
})

module.exports = router;