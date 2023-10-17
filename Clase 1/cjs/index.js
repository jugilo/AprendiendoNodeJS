// Window no esta instalado por defecto, no funciona por defecto en node
/* GlobalThis -> es el objeto global de node, es una variable global en toda nuestra aplicacion
 -> apunta a global */

// PATRON DE DISEÑO POR MODULO -> forma de programar para importar y exportar

//commonJS require module
const {sum}= require('./sum')

console.log(sum(1,2))