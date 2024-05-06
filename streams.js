/* const {writeFile} =  require('fs/promises');

const createBigfile = async () =>{

    await writeFile('./data/bigfile.txt','hello world'.repeat(1000000))
}


createBigfile(); */


const {createReadStream} = require('fs');

const stream =createReadStream('./data/bigfile.txt','utf-8')

stream.on('data',(chunk)=>{
    console.log(chunk)
})