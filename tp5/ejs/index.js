
let path = require('path');
let express = require('express');
//const bodyParser = require('body-parser');
let app = express();
let {Router} = express;
let router = new Router;
let router_id = new Router;

const PORT = process.env.PORT || 3000;
let listaProductos = [];
let index = 1;
let titulo = "";
app.use(express.urlencoded());
app.use(express.json());


//////////ejs/////////////
app.set('views', path.join(__dirname, 'views','ejs'));
app.set('view engine', 'ejs');

app.get('/',(req,res,next) => {
    titulo = "agregar productos";
    index=0;
    res.render('index', {listaProductos, titulo, index});
    index = 1;
        });
 
app.post('/productos',(req,res,next) => {
    titulo = "Listado de productos";
    index = 1;
    listaProductos.push(req.body);
    res.redirect('/');
    index = 0;
    });
    

/////////fin ejs/////////////

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

