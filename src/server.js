require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(bodyParser.json())
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api', routes);


server.listen(process.env.PORT, ()=>{
    //Não esquece '' aqui se usa ``
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
})
