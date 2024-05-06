//const { readFile } = require("fs");
const { readFile } = require("fs/promises");
//const {promisify} = require('util');

//const readfilePromise= promisify(readFile);

/* const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
};
 */
/* getText('./data/fourth.txt')
.then((result)=>console.log(result))
.then(getText('./data/fourth.txt'))
.catch((err)=>console.log(err))
 */

async function read() {
  try {
    const result = await readFile("./data/first.txt",'utf-8');
    const result2 = await readFile("./data/second.txt",'utf-8');
    const result3 = await readFile("./data/third.txt",'utf-8');
    const result4 = await readFile("./data/fourth.txt",'utf-8');
    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
  } catch (err) {
    console.log(err);
  }
}

read();
