const fs = require('fs')
const { findSourceMap } = require('module')

/* const first = fs.readFileSync('./data/first.txt','utf-8')
const second = fs.readFileSync('./data/second.txt')
console.log(first)
console.log(second.toString())
const title ="Este es el contenido del archivo"

fs.writeFileSync('./data/third.txt',title);
fs.writeFileSync('./data/fourth.txt',title,{
flag:'a'
});
 */

fs.readFile('./data/first.txt','utf-8',(error,data)=>{

    if(error){
        console.log(error)
    }
    console.log(data)

});