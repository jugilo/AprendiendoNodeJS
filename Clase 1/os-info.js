const os = require('node:os') //funcion de Node que accede a info del OS

console.log('Informacion del sistema operativo')
console.log('Sistema operativo: ' + os.platform())
console.log('Versión del sistema operativo: ' + os.release())
console.log('arquitectura: ' + os.arch())
console.log('CPU', os.cpus())
console.log('Memoria total: ' + os.totalmem()/1024/1024)
console.log('Memoria libre: ' + os.freemem()/1024/1024)
console.log('Uptime: ' + os.uptime()/60/60)



