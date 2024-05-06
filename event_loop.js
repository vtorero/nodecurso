const http = require('http')

http.createServer((req,res)=>{

    if(req.url==='/'){
    return res.end("Hola mundo")
    }

    if(req.url==='/about'){

       /*  for (let index = 1; index < 1000000; index++) {
            console.log(Math.random() * index)

        } */

        return res.end("page about")

    }
    return res.end("not found")

}).listen(3200)
console.log("Server on port 3200");