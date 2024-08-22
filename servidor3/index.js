let express = require('express');
let app = express();

let Contenedor = require('./contenedor.js');
const PORT = 8080;
let contenedor = new Contenedor("./productos.txt");

app.listen(PORT,() => {
    console.log("escuchando");
});


/*
    let new_producto = await contenedor.save({
        "nombre": "Producto 4",
        "precio": 10,
        "foto":"unaurl4"

    });
   let data= await contenedor.getbyId(new_producto._id);
    console.log(data);
    // let id_delete = 2;
    // await contenedor.deleteById(id_delete);

*/
function devolverProductos(req, res){
    contenedor.getAll().then(data => {
        res.send(data);
    }).catch(error => {
        res.send(error);
    });

}   //devolverProductos
function devolverProductosIdRandom(req, res){
    contenedor.getbyId(Math.floor(Math.random() * 4) + 1).then(data => {
        res.send(data);
    }).catch(error => {
        res.send(error);
    });

}   //devolverProductosIdRandom
app.get("/",(req,res,next)=>{
    res.send("Hola, navegue por las paginas de los productos");
});


app.get("/productos", (req,res,next)=>{
    devolverProductos(req,res);

    });
app.get("/productosRandom", (req,res,next)=>{
    devolverProductosIdRandom(req,res);
    });

