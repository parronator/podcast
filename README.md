<br/>
<p align="center">
  <h3 align="center">Podcast</h3>

  <p align="center">
    A frontend technical interview
    <br/>
    <br/>
  </p>
</p>

## Table Of Contents

* [Sobre la prueba](#sobre-la-prueba)
* [Desarrollado con](#desarrollado-con)
* [Empezemos](#empezemos)
  * [Prerequisitos](#prerequisitos)
  * [Instalación](#instalación)
* [Uso](#uso)
* [Autor](#autor)

## Sobre la prueba

![Screen Shot](images/screenshot.png)

En esta prueba se ha encontrado un problema inicial con los endpoints por CORS, el cual no se ha solucionado mediante 
los tipicos proxies que permiten hacer la request. Esto me ha llevado a coger el resultado de las peticiones directamente
y usar Mock Service Worker y simular que se llama a esos endpoints.

A continuacion, se describen varias de las herramientas/features que tiene este proyecto tanto a nivel de optimizacion como
de UX.

- NX de Nrwl creando una standalone app, permitiendo sacar partido de los incremental builds, computation cache, 
affected tests y configuracion del proyecto para crear librerias y modulos usando por debajo Vite.
- Libreria de UI personalizada, para ahorrar carga de elementos innecesarios que proporcionan las liberias de UI y además
desarrollar pudiendo permitir al evaluador analizar CSS desde 0
- Libreria Core que contiene la infrastructura a usar y otras herramientas que pueden ser compartidas a lo largo de un proyecto
- Lazy loading usando lazy de React, permitiendo la carga individual de cada componente cuando es necesario conjuntamente con
componentes usando "dot notation para agruparlos. 
- LazyWithPreload, pequeño helper que permite precargar contenido a demanda, para una mejor optimizacion a lo largo de la navegacion. Los ejemplos donde se puede
observar su uso son al hacer "hover" en un podcast de la lista y al hacer "hover" en un episodio. Si se observa en la pestaña network, podemos
ver que precarga los componentes del futuro escenario a navegar, entendiendo que el usuario al situarse encima de un elemento
es muy posible que quiera navegar hacia el. Obviamente, una vez precargado el contenido, no vuelve a cargarlo.
- Lazy load para imagenes, se puede observar en el grid al hacer scroll como carga todas aquellas no visibles en el viewport.
- Debounce de 300ms al filtrar, para evitar filtrados innecesarios al escribir.
- Escenario sencillo de filtrado sin resultados
- Skeletons como indicador de carga de los elementos (aparte del spinner requerido)
- Animaciones de fadeIn al entrar los elementos para una mejor UX
- Escenario sencillo de 404 ruta no encontrada
- Dockerizacion del compilado de producción y servido mediante NGINX con compresión Gzip
- Diseño responsivo
- Se ha tenido en cuenta los resultados de Lighthouse de Google Chrome para performance, SEO, A11y y best practices. 

## Desarrollado con
En esta prueba se ha intentado evitar al maximo el uso de librerias de terceros para que la evaluacion sea mucho mas completa,
pero hay librerias imprescindibles como:

- NX de Nrwl
- React
- React Router Dom
- Mock Service Worker (bastante prescindible si no fuera por el problema CORS mencionado arriba)
- Html React Parser (la más prescindible)

Se ha optado por Typescript para permitir la inversión de dependencias de la parte de infrastructura, para un mejor tipado 
al usar dominio con pequeñas reglas de negocio o UX (sin anemia en las entidades, y sin ser verboso con Value Objects etc (para mas info buscar DDD)), 
evitar tests innecesarios ya que en compile time se saca ventaja del tipado y un largo etc.

Se ha optado por CSS aunque a la larga tendria mas sentido SASSo directamente usar un framework CSS. Aún así, se usa BEM para una mejor
metodología.

No se han desarrollado tests E2E por falta de tiempo, y algun que otro test unitario. Sería sencillo añadir los selectores [data-testId] a los elementos y usar cypress para testear el comportamiento
tanto de spinner, skeletons, navegacion y responsive con Cypress por ejemplo, y para los tests unitarios hacer un poco lo mismo que el de CacheService.

## Empezemos

Para poder levantar el proyecto, es necesario un entorno adecuado para desarrollo frontend.

### Prerequisitos

Los prerequisitos de esta prueba son:

* Node >= 18.12.1
* Npm >= 8.19.2

### Instalación

1. Clonar el repositorio

```sh
git clone https://github.com/parronator/podcast.git
```

2. Instalar las dependencias

```sh
npm install
```

## Uso

1. Se puede levantar el proyecto para desarrollo

```sh
npm start
```

2. Se puede levantar el proyecto en modo producción dentro de un contenedor de Docker para poder evaluar el resultado final. Es necesario tener libre el puerto 8080 y Docker instalado:

```sh
npm run deploy:start
```

3. Para eliminar cualquier rastro del contenedor de Docker:

```sh
npm run deploy:stop
```

4. Para correr los tests unitarios:

```sh
npm test
```

6. Para correr el linter y comprobar los errores:

```sh
npm run lint
```

7. Para ver el grafo de dependencias 

```sh
npm run graph
```

## Autor

* [Albert Parrón](https://github.com/parronator/) - *FrontDev*
