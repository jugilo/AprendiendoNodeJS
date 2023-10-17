const fs = require('node:fs')

const text = fs.readFileSync('./archivo.txt', 'utf8')

console.log(text)
