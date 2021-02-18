# Challenge Mercado Libre
 
>Desarrollo de challenge de mercadolibre bajo el stack de desarrollo solicitado. A continuación presento mi implementación de desarrollo front-end y los pasos a seguir para distribuir el ejercicio
 
Nota: El proyecto cuenta con dos capas una de presentación y una de servicio
 
### Estructura del proyecto
 
    .
    ├── cliente-shop        # Aplicaion front-end en desarrollada en reactjs 
    ├── server-shop         # Servicio nodejs para el consumo de datos
    ├── docker-compose      # Despliegue de servicios en contenedores
    └── README.md           # Documentación
# Capa de servicio
### Estructura del proyecto
        .
        ├── external-service    # Entidad con lógica de negocio para el procesamiento de datos   
        ├── middleware          # Extracción de lógica para el firmado de los resultados del servicio
        ├── routes              # Enrutamiento del servicio rest para definidos en el requerimiento
        ├── Dockerfile          # Configuración del contenedor para dockerizar del proyecto
        ├── .env                # Configuracion de variables de entorno
        └── app.js              # Archivo principal para  correr el servicio
 
## Prerrequisitos
 
Para desplegar el proyecto es necesario instalar globalmente el paquete de nodemon según la documentación presentada en el siguiente link [https://nodemon.io/](https://nodemon.io/)
```
npm install -g nodemon
```
##  Variables de entorno
para desplegar el servicio **server-shop** es necesario la configuración de algunas variables de entorno, en desarrollo se configuraron en el archivo **.env**
 
```
PORT=8000                                           # define el puerto a usar en ambiente desarrollo ya que el fronto ocupa el puerto 300
NODE_ENV=development                                # define el ambiente de desarrollo para validaciones internas del servicio
CORS_ALLOW="localhost:3000"                         # configuración de acceso por restricción de dominios cruzados  
EXTERNAL_SERVICES=https://api.mercadolibre.com      # Servicio externo que brinda los datos base para la consulta
```
### Despliegue
 
##### Configuraciones generales:
 
En el directorio server-shop realizar la instalación de dependencias usando el gestor de paquetes **NPM**
 
```
npm install
```
# Capa de presentación 
### Estructura del proyecto
 
    cliente-shop
        └── src
            ├──  Provider
            ├       └── Store               #   Componente de persistencia de  datos entre componentes 
            └── components
                    ├── breadcrumb          #   Componente de miga de pan se construye según como el servicio devuelva en las categorías
                    ├── card_product        #   Componente card usado en la lista de resultados de búsqueda
                    ├── data_sheet          #   Componente encargado de mostrar la información de detalle de un producto
                    ├── product_detail      #   Página principal de detalle de producto
                    ├── result_search       #   Página principal de búsqueda  de producto 
                    ├── search_bar          #   Componente encargado de la búsqueda en las diferentes páginas de la prueba 
                    └── search_product      #Página principal de listado de resultados consulta externa
 
 
### Despliegue
 
##### Configuraciones generales:
 
En el directorio cliente-shop realizar la instalación de dependencias usando el gestor de paquetes **NPM**
 
```
npm install
```
 
 
para iniciar la aplicación usamos el siguiente comando en el directorio directorio cliente-shop
 
```
npm start
```
 
Para ambiente de desarrollo el puerto configurado en las variables de entorno corresponde a la siguiente url http://localhost:8000
 
##  Variables de entorno
 
para la configuración inicial de la capa de presentación  se debe crear una variable de entorno que se encarga de parametrizar la url del servicio **server-shop** como se muestra en el siguiente ejemplo:
 
```
    REACT_APP_EXTERNAL_SERVICES="http://localhost:8000"
```
 
Este proyecto fue creado según la documentación  [Create React App](https://github.com/facebook/create-react-app). por lo cual nos permite usar un gestor de dependencias como yarn o npm para iniciar el modo debug la aplicación y navegar en la  url predeterminada
 
para iniciar la aplicación usamos el siguiente comando en el directorio directorio cliente-shop
 
```
npm start
```
Luego podrá navegar en la url [http://localhost:3000](http://localhost:3000)  
 
# Despliegue en contenedores
 
Adicional se integra la opción de despliegue con docker-compose el cual nos permite encapsular el ambiente para así evitar inconvenientes de compatibilidad de versiones en librerias
 
```docker-compose
version: '3.7'
services:
  react-frontend:
    container_name: react-frontend
    build:
      context: ./cliente-shop
      dockerfile: Dockerfile
    ports:
      - '80:80'
    environment:      
      - REACT_APP_EXTERNAL_SERVICES=http://localhost:8000
  server-shop:
    container_name: server-shop
    build:
      context: ./server-shop
      dockerfile: Dockerfile
    ports:
      - '8000:8000'
    environment:
      - PORT=8000
      - NODE_ENV=development
      - CORS_ALLOW=*
      - EXTERNAL_SERVICES=https://api.mercadolibre.com
```
 
Para desplegar es necesario tener docker y docker-compose instalado en la máquina host, si se ejecuta en SO Windows, docker debe estar corriendo máquinas virtuales en linux
 
Lanzamos el siguiente comando en la raíz del repositorio:
 
```
docker-compose up -d 
```
 
Se desplegaran los dos servicios en las siguientes URL's
-   **server-shop** http://localhost:8000
-   **cliente-shop** http://localhost:80
 
 
 
 
 
 

