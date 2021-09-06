# Ejercicio Práctico Frontend Ssr

## Deploy

https://ejercicio-practico-j9jdmbwfx-rrchess.vercel.app/

## Objetivo 

Desarrollar articulos escalables y sus contenedores

## Stack

React, SASS, Axios y Jest

## Funcionamiento

### Funcion generadora de Data

La funcion GenDummies devuelve una promesa con un llamado a newsapi.org trayendo articulos nuevos del diario la nacion y los destructura para quedarse con los datos importantes, tambien posee un metodo para generar aleatoreamente datos vacios. La API key esta expuesta y no dentro de un .env para agilizar las pruebas de quien deba descargarlo. En caso de haber fallas en la peticion pude llamarse nuevamente a la funcion con un argumento true para que la misma devuelva articulos previamente almacenados en un JSON como se hace en App.js, esto es necesario hacer si se utiliza fuera del localhost debido a que la subscripcion a la api es gratuita y por lo tanto bloquea las llamadas externas

### Articulo

El componente de articulos consta de un indice desde donde se llaman y reenderizan los 5 tipos de modelos realizados

### Header

Se realizo un Nav simil al que utiliza diario la Nacion

### Responsive

Realizado el responsive para las resoluciones indicadas mediante queries en SASS.

### Contenedor de articulos

Realizados 4. El header no admite titulo debido a que el header en que se baso jamas lo lleva. El resto admiten titulo de seccion y link. al contenedor novedades puede mandarse un array ilimitado de articulos a renderizar

## Para probar

Clonar y realizar npm install en la carpeta principal

## Test

Testing unitario sencillo de GenDummies (solo con API) y Articulo

## Capturas

###
![ejemplo](/src/assets/Readme/Capture1.PNG)
###
![ejemplo](/src/assets/Readme/Capture2.PNG)
###
![ejemplo](/src/assets/Readme/Capture3.PNG)
###
![ejemplo](/src/assets/Readme/Capture4.PNG)