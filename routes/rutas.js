const express = require('express');
const Joi = require('joi');
const router = express.Router();


const usuarios = [{
        id: 1,
        nombre: "Monkey D. Cloud",
        mensajes: ["Que divertido es programar", "Hasta que te toca React"],
        conectado: true,
        seguidores: 1000,
        siguiendo: 50,
        puntuacion: 500
    },
    {
        id: 2,
        nombre: "Antonio",
        mensajes: ["Hola que tal?", "Jajaja si"],
        conectado: true,
        seguidores: 100,
        siguiendo: 50,
        puntuacion: 200,
    },
    {
        id: 3,
        nombre: "Bartolo",
        mensajes: ["Estoy aburrido", "Pero que muy aburrido"],
        conectado: true,
        seguidores: 500,
        siguiendo: 150,
        puntuacion: 250,
    },
    {
        id: 4,
        nombre: "Antonia",
        mensajes: ["Me gusta Antonio", "Ya no me gusta Antonio"],
        conectado: true,
        seguidores: 1500,
        siguiendo: 10,
        puntuacion: 1500,
    },
    {
        id: 5,
        nombre: "Bartola",
        mensajes: ["Yo tambien me aburro", "Me aburro mucho"],
        conectado: true,
        seguidores: 1200,
        siguiendo: 15,
        puntuacion: 1000,
    }
];

router.get('/', (req, res) => {
    res.json(usuarios);
});

router.get('/:id', (req, res) => {
    let idUsuarios = parseInt(req.params.id);
    const unUsuario = usuarios.find((usuario) => {
        return usuario.id === idUsuarios;
    })
    if (!unUsuario) {
        res.status(404);
        res.send('Usuario no encontrado');
    } else {
        res.send(unUsuario);
    }
});

router.post('/', (req, res, next) => {
    const schema = Joi.object({
        nombre: Joi.string().min(3).required(),
        mensajes: Joi.string().min(3).required(),
        conectado: Joi.boolean().required(),
        seguidores: Joi.number().min(0).required(),
        siguiendo: Joi.number().min(0).required(),
        puntuacion: Joi.number().min(0).required(),
    });
    const validacion = schema.validate(req.body);
    if (validacion.error) {
        console.log(validacion.error.details[0].message);
        res.status(400).send(validacion.error.details[0].message);
        return;
    }
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        mensajes: req.body.mensajes,
        conectado: req.body.conectado,
        seguidores: req.body.seguidores,
        siguiendo: req.body.siguiendo,
        puntuacion: req.body.puntuacion
    }
    usuarios.push(nuevoUsuario);
    res.status(200).send(nuevoUsuario);
});

router.patch('/mensajes/:id', (req, res) => {
    const schema = Joi.object({
        mensajes: Joi.string().min(3).required()
    });
    const validacion = schema.validate(req.body);
    if (validacion.error) {
        console.log(validacion.error.details[0].message);
        res.status(400).send(validacion.error.details[0].message);
        return;
    }
    let idUsuarios = parseInt(req.params.id);
    const unUsuario = usuarios.find((usuario) => {
        return usuario.id === idUsuarios;
    })
    if (!unUsuario) {
        res.status(404);
        res.send('Usuario no encontrado');
        return;
    }
    unUsuario.mensajes.push(req.body.mensajes);
    res.status(200).send(unUsuario);
});

router.put('/conectado/:id', (req, res) => {
    const schema = Joi.object({
        conectado: Joi.boolean().required()
    });
    const validacion = schema.validate(req.body);
    if (validacion.error) {
        console.log(validacion.error.details[0].message);
        res.status(400).send(validacion.error.details[0].message);
        return;
    }
    let idUsuarios = parseInt(req.params.id);
    const unUsuario = usuarios.find((usuario) => {
        return usuario.id === idUsuarios;
    })
    if (!unUsuario) {
        res.status(404);
        res.send('Usuario no encontrado');
        return;
    }
    unUsuario.conectado = req.body.conectado;
    res.status(200).send(unUsuario);
});

router.put('/puntuacion/:id', (req, res) => {
    const schema = Joi.object({
        puntuacion: Joi.number().min(0).required()
    });
    const validacion = schema.validate(req.body);
    if (validacion.error) {
        console.log(validacion.error.details[0].message);
        res.status(400).send(validacion.error.details[0].message);
        return;
    }
    let idUsuarios = parseInt(req.params.id);
    const unUsuario = usuarios.find((usuario) => {
        return usuario.id === idUsuarios;
    })
    if (!unUsuario) {
        res.status(404);
        res.send('Usuario no encontrado');
        return;
    }
    unUsuario.puntuacion = req.body.puntuacion;
    res.status(200).send(unUsuario);
});

router.delete('/:id', (req, res) => {
    let idUsuarios = parseInt(req.params.id);
    const unUsuario = usuarios.find((usuario) => {
        return usuario.id === idUsuarios;
    })
    if (!unUsuario) {
        res.status(404);
        res.send('Usuario no encontrado');
        return;
    }
    const posicion = usuarios.indexOf(unUsuario);
    usuarios.splice(posicion, 1);
    res.status(200).send(unUsuario);
});

module.exports = router;