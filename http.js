const http = require('http');

http.createServer((request,response)=>{

    if(request.url==='/'){

        response.write("Bienvenido al servidor")
           return  response.end();
    }

    if(request.url==='/about'){
        response.write("acerca de")
           return  response.end();
    }

    response.write("<h1>Not found</h1>")
    response.end();


}).listen(3000)

//console.log('Servidor ejecutanto en el puerto 3000')