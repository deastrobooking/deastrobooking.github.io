import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'))

const myList = (
    <ul>
      <li>Learn React</li>
      <li>Become a Developer</li>
    </ul>
  );
  
  ReactDOM.render(
    myList, 
    document.getElementById('app')
  );