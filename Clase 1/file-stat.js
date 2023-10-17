const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt') //obtiene los datos del archivo

console.log(
    stats.isFile(), //true si es un archivo
    stats.isDirectory(), //true si es un directorio
    stats.isSymbolicLink(), //true si es un enlace simbolico
    stats.size //tamaño del archivo
)

