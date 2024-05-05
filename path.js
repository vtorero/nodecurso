const path = require('path');
console.log(path.sep);
const filePath =path.join('prueba','directorio','styles.css');
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
