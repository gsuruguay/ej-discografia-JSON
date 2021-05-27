# Web app: consulta de discos

## Objetivo

**Desarrollar una app para poder consultar los discos por título, año o artista. Considerando las coincidencias parciales.

### index.html

* Muestra 3 inputs con los 3 datos para filtar y un botón para disparar la consulta, que se hace via AJAX enviando un request GET a la ruta /discos y pasando por query string los filtros (uno o varios) con las claves "titulo", "artista" o "lanzamiento". Por ejemplo /disco?lanzamiento=1968&artista=beatles
* Esa url va armandose concatenando los datos de los filtros ingresados.
* Cuando se obtiene la respuesta, se muestra los resultados como "tarjetas", con los datos de artista, título y año de lanzamiento y la imagen de la tapa (todas del mismo tamaño).

### Server

Contiene solo 2 endpoints

* GET /: entrega la página inicial, index.html 
* GET /disco: consulta de discos, recibe por query string los filtros. Busca en los datos que estén en el archivo discos.json y retorna los objetos de los discos coincidentes.

### AJAX

* Para disparar el pedido (request) se utiliza el objeto XMLHttpRequest.
* Para recibir la respuesta se usa un listener con un callback asociado al evento load de retorno.
* Para obtener el contenido de la respuesta se utiliza la propiedad responseText.

### Instalación
* Clonar el proyecto con **git clone https://github.com/gsuruguay/ej-discografia-JSON.git
* Ejecutar por consola desde la carpeta raiz del proyecto **npm install** para instalar las dependencias(express)*
* Se accede por **http://localhost:3456/

