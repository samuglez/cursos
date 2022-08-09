const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
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
const docentes = [{
        id: 1,
        nombre: 'Valka',
        apellidos: 'Dondarr',
        dni: '42.556.777-M',
        email: 'valka@sunmmail.com',
        password: 'valkita98?=',
    },
    {
        id: 2,
        nombre: 'Adrián',
        apellidos: 'Santos',
        dni: '43.123.444-B',
        email: 'adrian@sunmmail.com',
        password: 'adsan45*!',
    },
    {
        id: 3,
        nombre: 'Cristo',
        apellidos: 'Rey Santos',
        dni: '42.111.222-C',
        email: 'inri@sunmmail.com',
        password: 'inricrist0?¿=',
    },
    {
        id: 4,
        nombre: 'Lucifer',
        apellidos: 'Hell Hell',
        dni: '66.666.666-A',
        email: 'lucihell@sunmmail.com',
        password: '66666666',
    },
    {
        id: 5,
        nombre: 'Valdimiro',
        apellidos: 'Rebollo',
        dni: '41.544.778-O',
        email: 'vladi@sunmmail.com',
        password: 'vladiFuckYou4U,:*',
    },
    {
        id: 6,
        nombre: 'Lara',
        apellidos: 'Sanz',
        dni: '43.566.622-F',
        email: 'laraz@sunmmail.com',
        password: 'larili456',
    },
];
app.get('/', (req, res) => {
    res.send('Raiz del Servidor');
});

app.get('/api/usuarios', (req, res) => {
    res.send(usuarios);
});

app.get('/api/usuarios/:id', (req, res) => {
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

app.get('/api/docentes', (req, res) => {
    res.send(docentes);
});

app.get('/api/docentes/:id', (req, res) => {
    let idDocente = parseInt(req.params.id);
    const unDocente = docentes.find((docente) => {
        return docente.id === idDocente;
    })
    if (!unDocente) {
        res.status(404);
        res.send('Docente no encontrado');
    } else {
        res.send(unDocente);
    }
});

app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));