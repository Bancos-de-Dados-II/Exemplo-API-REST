const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});

const db = require('./database');

app.get('/usuarios', db.getUsuarios);
app.post('/usuarios', db.addUsuario);
app.put('/usuarios', db.atualizarUsuario);
app.delete('/usuario/:id', db.deletarUsuario);