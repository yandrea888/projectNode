//Server
//forma Uno
//Contenido html

/*var http = require('http');

function onServer(request, response){
    console.log("Peticion OK");

    response.writeHead(200, {"Content-Type": "text/html"} );

    response.write("<h1> Server online, hi! </h1> " );

    response.end();
}

var server = http.createServer(onServer);

server.listen(3000);

console.log("working in http://localhost:3000/" );*/

//Server
//forma Dos
//Contenido texto plano

/*var http = require('http');

http.createServer ((request, response) => {
     response.writeHead(200, {'Content-Type': 'text/plain'});
     response.write ("Otro Saludo");
     response.end();

 }).listen(3000, 'localhost');
 console.log('Server running in http://localhost:3000/');*/

//Server
//forma Tres
//abrir un documento html

/*
var http = require('http');

 fs = require("fs");

 http.createServer((req, res) =>{
     fs.readFile(`./homer.html`, (err, html) => {
         res.write(html);
         res.end();
     });
 }).listen(3000);
 console.log('Server running in http://localhost:3000/');*/

//Server
//forma cuatro
//abrir diferentes rutas

/*let http = require('http');

fs = require("fs");

http.createServer((req, res) => {

res.writeHead(200, {'Content-Type': 'text/html'});
     switch (req.url) {
         case '/':
             plantilla = "home.html"
             break;
         case '/express':
             plantilla = "sobre_express.html"
             break;
         default:
             plantilla = "404.html"
             break;
     }

     fs.readFile( `./plantillas/` + `${plantilla}`, (err, datos) => {
                 res.write(datos);
                 res.end();  
     });
 }).listen(3000, 'localhost');
 console.log("Server ok"); */

//Server
//forma cinco
//Constantes

/*const fs = require("fs");
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    switch (req.url) {
                case '/':
                    plantilla = "home.html"
                    break;
                case '/express':
                    plantilla = "sobre_express.html"
                    break;
                default:
                    plantilla = "404.html"
                    break;
            }
        
            fs.readFile( `./plantillas/` + `${plantilla}`, (err, datos) => {
                        res.write(datos);
                        res.end(); 


});
});
server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`)
});*/

//forma seis
//Server Express
//npm install express
//usar rutas con express
/*
const express = require ('express')

const app = express() // inicializar express

let fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

app.use( (req, res) => {

    //res.send('Hello word with express')

    res.writeHead(200, {'Content-Type': 'text/html'});
     switch (req.url) {
         case '/':
             plantilla = "home.html"
             break;
         case '/express':
             plantilla = "sobre_express.html"
             break;
         default:
             plantilla = "404.html"
             break;
     }

     fs.readFile( `./plantillas/` + `${plantilla}`, (err, datos) => {
                 res.write(datos);
                 res.end();

})

})

const server = app.listen ( port, () => {
    console.log(`Server running at http://${hostname}:${server.address().port}/`)
}*/

//forma siete
//Server express
//Gestionar rutas de los verbos
//GET, POST, PUT, PATCH, DELETE con Express

let express = require('express')

let router = express.Router() // para gestionar las peticiones (Send request)

const HOSTNAME = '127.0.0.1'
const PORT = 3000

let app = express() // Inicializar express

app.use(router)//Usar el router desde express

//GESTIONAR LAS PETICIONES (REQ)
//GET para listar todos los registros

router.get('/users', (req, res) => {
    //res.send('User list')

    res.send(
        {"user":[
        {
           "first name": "María", 
           "last name": "Jaramillo",
           "phone": "555555"
        },
        {
           "first name": "Yuly", 
           "last name": "Morales",
           "phone": "8888888"
        },
        {
           "first name": "Angie", 
           "last name": "Morales",
           "phone": "777777"
        }
    ]
}
    )
    
})

/*let server = app.listen ( PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${server.address().port}/`)
})*/

//GET para listar un solo registro

router.get('/user_id', (req, res) => {
    
    res.send(
        {"user":[
            {
                "first name": "Yuly", 
                "last name": "Morales",
                "phone": "8888888"
            }            
            ]
        }
    )    
})
/*let server = app.listen ( PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${server.address().port}/`)
})*/

//POST para agregar un registro

router.post('/add_user', (req, res) => {
    
    res.send(
        {"user":[
            {
                "first name": "Angie ", 
                "last name": "Morales.",
                "phone": "7777777"
            }            
            ]
        }
    )    
})
/*let server = app.listen ( PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${server.address().port}/`)
})*/

//PUT actualizar un registro

router.put('/update_user/user_id', (req, res) => {
    
    res.send(
        {"user":[
            {
                "first name": "Angie", 
                "last name": "Morales R",
                "phone": "7777777"
            }            
            ]
        }
    )    
})/*
let server = app.listen ( PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${server.address().port}/`)
})*/

//PATCH actualizar parte del registro

router.patch('/update_user/user_id', (req, res) => {
    
    res.send(
        {"user":[
            {
                "first name": "Angie V", 
                "last name": "Morales R",
                "phone": "7777777-888"
            }            
            ]
        }
    )    
})/*
let server = app.listen ( PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${server.address().port}/`)
})*/

//DELETE eliminar el registro
/*
router.delete('/delete_user/user_id', (req, res) => {
    
    res.send(
        {"user":[
            {
                "first name": "Angie V", 
                "last name": "Morales R",
                "phone": "7777777-888"
            },
            {"Message": "User deleted!!!"}            
            ]
        }
    )    
})
let server = app.listen ( PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${server.address().port}/`)
})*/


//post
app.post('/api/product', (req, res) => {
    //console.log(req.body)  //para ver el cuerpo de la peticion

    //res.status(200).send({message: 'product received'})
    //res.status(404).send({message: 'product does not exist'})

    /**use shema and register product in the data base*/
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()    
    product.name = req.body.name    
    product.price = req.body.price
    product.category = req.body.category
    product.image = req.body.image

    product.save( (err, productStored) => {
        if (err) res.status(500).send({message: `save error: ${err}`})

        res.status(200).send({product: productStored})
    } )
})


//get users
app.get('/api/product', (req, res) => {
    //res.send(200, {products: []})

    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({
            message: `Error when requesting: ${err}`
        })

        if (!products) return res.status(404).send({
            message: 'There are no product'
        })

        res.status(200).send({ products })

    })

})

/*let server = app.listen( PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${server.address().port}/`)
}) */

mongoose.connect('mongodb://localhost:27017/shopwcg', (err, res) => {
    /*if (err) {
        return console.log(`Connection to the failed database: ${err}`)
    }  */

    if (err) throw err    
    console.log('Database connection ok')

    const server = app.listen( port, () => {

        console.log( `Listening http://localhost:${ server.address().port }` )
    
    } )
})