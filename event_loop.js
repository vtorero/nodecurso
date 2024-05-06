const http = require('http')

http.createServer((req,res)=>{
    if(req.url==='/'){
        
        return res.end("Hola mundo")
    }
    if(req.url==='/about'){
        for (let index = 1; index < 10000; index++) {
            console.log(Math.random()*index)
        }
        return res.end("Hola mundo")

    }

}).listen(3200)