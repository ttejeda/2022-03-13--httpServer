var http = require('http'); //Exporta el módulo http

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'}); // Envía una respuesta "header" a la petición
    res.end('Hello world\n'); // Imprime este mensaje e indica que no se va a enviar más información
}).listen(1337, '127.0.0.1'); // Deja el puerto 1337 abierto para escuchar, además de especificar la IP a escuchar 

// Al ejecutar el código con "node app", la terminal se queda a la escucha de una petición
// En los headers se encuentran los response headers y request headers

// Teoría
/* HTTP
Protocolo de la capa de aplicación utilizado para la transmisión de documentos hipermedia, como HTML.
Sigue el clásico modelo cliente-servidor.*/
/* Servidor HTTP
Es el software que se encarga de atender el contenido de un sitio web al usuario.*/
/* Formato del paquete HTTP
1. Línea de inicio describiendo la petición; 2. Grupo opcional de cabeceras describiendo el cuerpo;
3. Una línea vacía que indica que la meta-información ha sido envidada; 4. Un cuerpo de mensaje opcional
que llevan los datos asociados con la petición.*/
/* HTTP Request
Se le llama línea de petición, contiene 3 campos: 1. Un método HTTP; 2. Un identificador universal de
recursos (URI); 3. Una versión del protocolo HTTP. */
/* HTTP Response
Una vez el servidor ha recibido y procesado la petición, devuelve un mensaje.*/
/* Puerto TCP
Se encarga de establecer la conexión, ensamblar los paquetes de datos tras la transmisión y enviarlos a
los programas que se dirijan al receptor.*/
/* Métodos HTTP
Existen varios, pero los más utilizados son: 1. GET, solicita una representación de un recurso específico;
2. POST, se utiliza para enviar una entidad a un recurso en específico; 3. PUT, reemplaza todas las 
representaciones actuales del recurso de destino con la carga útil de la petición; 4. DELETE, borra un
recurso en específico.*/