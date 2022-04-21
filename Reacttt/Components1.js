import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
 
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

/* 
Here’s another fact about components: we can use a JavaScript class to define a new React component. 
We can also define components with JavaScript functions, but we’ll focus on class components first.
*/

// class x  extends React.Component {} // Examples
// Component class variable names must begin with capital letters!
// Upper CamelCase
// https://en.wikipedia.org/wiki/Naming_convention_(programming)#Java

// Code below creates a React component. 
//<MyComponentClass />
 /* 
 ReactDOM.render() will tell <MyComponentClass /> to call its render method.

<MyComponentClass /> will call its render method, which will return the JSX element <h1>Hello world</h1>. 
ReactDOM.render() will then take that resulting JSX element, and add it to the virtual DOM. This will make 
“Hello world” appear on the screen.
 */
ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
  );