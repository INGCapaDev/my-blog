---
translationKey: react-reusability
title: "Reutilización en React: Explorando 3 patrones comunes"
description: "Descubre la esencia de los patrones de reutilización en React, esenciales para crear interfaces de usuario eficientes. Explora tres patrones clave: componentes personalizados, funciones de utilidad y hooks personalizados; y aprende cómo identificar e implementarlos de manera efectiva."
pubDate: 2024-03-15
categories:
  - Development
tags:
  - Post
  - React
  - Development
---
React es una opción popular para construir interfaces de usuario debido a su flexibilidad, rendimiento y, lo más importante que discutiremos en esta publicación, la reutilización, una de las principales ventajas de React es su capacidad para crear componentes de interfaz de usuario reutilizables, revisaremos los patrones de reutilización más comunes para construir componentes de interfaz de usuario reutilizables utilizando React.

## Patrones de reutilización en React ♻️
En este caso, quiero hablar de tres patrones específicos, lo que vamos a hacer es identificar qué tipo de patrón se adapta mejor a nuestros requisitos, te mostraré los criterios que debes seguir para seguir las mejores prácticas y elegir el patrón correcto en cada caso, buscar componentes que tengan funcionalidades, estilos o comportamientos similares, es una señal de que podrías tener un componente donde puedes aplicar algún patrón de reutilización.

### Cómo identificar el patrón 🤔
Si deseas reutilizar el marcado JSX, necesitas crear un componente personalizado, lo que significa el componente común de React al que puedes pasarle propiedades y reutilizarlo en tu aplicación. Si deseas reutilizar la lógica JavaScript, necesitas crear una función de utilidad, solo una función simple de JavaScript sin necesidad de sintaxis de React, y por último, en caso de que desees reutilizar la lógica de React, entonces necesitas crear un hook personalizado de React, solo la lógica de React sin código HTML.

## Profundicemos en cada patrón 🧩

### Reutilización de marcado JSX mediante componentes personalizados
Los componentes personalizados en React son piezas independientes de funcionalidad que podrás reutilizar en cualquier momento en toda tu aplicación, son como bloques de construcción para tu aplicación, puedes encapsular HTML, JavaScript y lógica de React, y personalizar estos componentes con propiedades dinámicas.

#### Ejemplo
Un componente de botón personalizado con algún estilo que podrás reutilizar cuando quieras y mantener una consistencia en el diseño de los botones de tu aplicación.
```jsx
const ReusableButton = ({ onClick, children, disabled }) => { 
return ( 
	<button 
		onClick={onClick} 
		className="..." 
		disabled={disabled}
	>
		{children} 
	</button> 
	); 
};
```
Este es un claro ejemplo de un componente personalizado cuando deseas reutilizar código JSX, no solo lógica JavaScript o lógica de React, es el patrón de reutilización de React más común.

### Reutilización de lógica JavaScript mediante funciones de utilidad
Una función de utilidad se refiere a una función reutilizable o fragmento de código que proporciona funcionalidades comúnmente necesarias, esta función solo tiene lógica JavaScript y es independiente del framework, como una función para manipulación de cadenas, conversión de tipos de datos, entrada/salida de archivos, operaciones matemáticas, formateo de datos, etc.

#### Ejemplo
Una función de utilidad para generar un número entero aleatorio dentro de un rango específico de números.
```js
export const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max -min + 1)) + 1
}
```
Podremos reutilizar esta función de utilidad cuando queramos y en cualquier archivo JavaScript en nuestro proyecto solo importándola, aquí tienes un ejemplo de cómo usarla: `getRandomInt(10, 40)`, esto nos dará un número aleatorio entre 10 y 40.
### Reutilización de lógica React mediante hooks personalizados
El último patrón de reutilización es cuando solo queremos reutilizar la lógica de React sin código HTML, como los hooks useState o useEffect de React, normalmente querremos crear un hook de React cuando estemos utilizando lógica con dos o más hooks de React de la misma manera en nuestro proyecto.

#### Ejemplo

Un ejemplo común es un hook personalizado para recuperar datos en React como el siguiente ejemplo:
```tsx
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;

```

Se recomienda nombrar todos tus hooks personalizados con el prefijo 'use' para identificarlos fácilmente, podrás reutilizar tu hook personalizado en todo tu proyecto de la siguiente manera:
```jsx
const { data, isLoading, error } = useFetch('https://api.example.com/data');
```

## Gracias por leer el artículo 🫶
Al explorar los patrones de reutilización en React, encontramos muchas ideas geniales que pueden hacer nuestro trabajo como desarrolladores mejor y más rápido. Con estas nuevas ideas, componentes personalizados, funciones de utilidad y hooks personalizados, es más fácil desarrollar aplicaciones React robustas, escalables y mantenibles. 🎉 
Gracias por leer este artículo, nos vemos pronto en otra publicación. 👋
