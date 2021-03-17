const {response} = require('express');


//Controllers

const usuariosGet = (req, res = response) => {

    const {q,nombre,apiKey} = req.query;
    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apiKey
    });
}


const usuariosPut=(req, res= response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}


const usuariosPost = (req, res= response) =>{
    //desestructurar el body
    const { nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,edad
    });
}

const usuariosDelete = (req, res= response) =>{
    res.json({
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req, res= response) =>{
    res.json({
        msg: 'patch API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}