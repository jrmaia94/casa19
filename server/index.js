const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b69bc0d8ff8175",
    password: "6c3e4359",
    database: "heroku_716b84065d1d757",
})

app.use(cors());
app.use(express.json());

app.get('/clientes', (req, res) => {

    let SQL = "SELECT * FROM clientes";

    db.query(SQL, (err, result) => {
        if(err)console.log();

        res.send(result)
    })

})

app.get('/produtos', (req, res) => {

    let SQL = "SELECT * FROM produtos";

    db.query(SQL, (err, result) => {
        if(err)console.log();

        res.send(result)
    })

})

app.get('/pedidos', (req, res) => {

    let SQL = "SELECT * FROM pedidos, clientes WHERE clientes.idclientes = pedidos.cliente";

    db.query(SQL, (err, result) => {
        if(err){
            res.status(300).send(err)
        } else {
            res.status(200).send(result)
        }
    })

})

app.get('/adicionais', (req, res) => {

    let SQL = "SELECT * FROM adicionais";

    db.query(SQL, (err, result) => {
        if(err){
            res.status(300).send(err)
        } else {
            res.status(200).send(result)
        }
    })

})

app.listen(3001, () => {
    console.log('rodando server')
})