---
title: "React Reusability: Exploring 3 common patterns"
description: Discover the essence of React reusability patterns, essential for crafting efficient user interfaces. Explore three key patterns – custom components, utility functions, and custom hooks – and learn how to identify and implement them effectively.
pubDate: 2024-03-15
heroImage: https://images.unsplash.com/photo-1611347022329-4e3bceb508a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
categories:
  - Development
tags:
  - Post
  - React
  - Development
---
React it's a popular choice for building user interfaces due to its flexibility, performance and the main thing that we're talking about in this post, reusability, one of the key advantages of React is its ability to create reusable UI components, we'll review the most common reusability patterns for building reusable UI components using React.

## React reusability patterns ♻️
In this case, I want to talk three specific patterns, the thing that we're going to do it's identify what kind of pattern suit best for our requirement, I'll show you the criteria that you must follow in order to follow the best practices and choose the correct pattern in each case, look for a components that have similar functionality, styling or behavior, it's a signal that you might have a component where you can apply some reusability pattern.

### How to identify the pattern 🤔
If you want to reuse JSX Markup you need to create a custom component it means the common React component which you can give it props and reuse it througth your app, if you want to reuse JavaScript logic you need to create a utility function, only a simple JavaScript function without need of React syntax, and the last one in case you want to reuse the React logic then you need to create a React custom hook, only React logic without HTML code.

## Let's dive in each pattern 🧩
### Reusing JSX markup through custom components
Custom components in React are independent pieces of functionality that you'll be able to reuse in any moment througt all your app, they are like building block for your app, you can encapsulate HTML, JavaScript and React logic, and customize this components with dynamic props.

#### Example
A button custom component with some style that you will be able to reuse whenever you want and mantain a consistency in your app button's design.
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
This is a clear example of a custom component when you want to reuse JSX code, not only JavaScript logic or React logic, it's the most common React reusability pattern.

### Reusing JavaScript logic through utility functions
An utility function refer to a reusable function or code snippet that provide commonly needed functionality, this function only have JavaScript logic and it's framework agnostic, like a function to string manipulation, data type conversion, file input/output, mathematical operations, data formatting, etc.

#### Example
An utility function to generate a random integer within a specified range of numbers.
```js
export const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max -min + 1)) + 1
}
```
We'll be able to reuse this utility function whenever we want and in any javascript file in our project only importing it, here's an example of how to use it: `getRandomInt(10, 40)`, this will give us a random number between 10 and 40.

### Reusing React logic through custom hooks
The last one reusability pattern is when we only want to reuse React logic without HTML code, like React useState or useEffect hooks, normally we'll want to make a custom React hook when we are using logic with two or more React hooks in the same way through our project.

#### Example
One common example is a custom hook to fetch data in React like the following example: 
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

I'ts recommended to name all your custom hooks with the prefix 'use' to identify them easily, you'll be able to reuse your custom hook through all your project in the following way: 
```jsx
const { data, isLoading, error } = useFetch('https://api.example.com/data');
```

## Thanks for read the article 🫶
As we explored React reusability patterns, we found lots of cool ideas that can make our work as a developers better and faster. With these new ideas, custom components, utility functions and custom hooks, it's easier to develop robust, scalable and maintainable React apps. 🎉
Thanks for read this article, see you soon in another post. 👋