const express = require("express");
const path = require("path");
const app = express();
const discosJson = require("./discos.json");
const PUERTO = 3456;

app.use(express.urlencoded({ extended: true }));

// Middleware para archivos de imagen, css, scripts, etc ("recursos estáticos")
app.use(express.static(path.join(__dirname, "client")));

// GET inicial, retorna la página index.html
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "client/index.html"));
});

// GET /disco, retorna el archivo discos.json
app.get("/disco", function(req, res){

    let resultados = discosJson.discos;
    let titulo = req.query.titulo;
    let artista = req.query.artista;
    let lanzamiento = req.query.lanzamiento;

    if(titulo){
        resultados = resultados.filter(function(elemento){
            return elemento.titulo.toLowerCase().includes(titulo.toLowerCase());
        });
    }
    if(artista){
        resultados = resultados.filter(function(elemento){
            return elemento.artista.toLowerCase().includes(artista.toLowerCase());
        });
    }
    if(lanzamiento){
        resultados = resultados.filter(function(elemento){
            return elemento.lanzamiento == lanzamiento;
        });
    }
    
    res.json(resultados)
});

app.listen(PUERTO, function () {
    console.log(`Escuchando en puerto ${PUERTO}`);
})

