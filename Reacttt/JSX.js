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

  // Declaring a Class in React className___________________________________________
  const myDiv = <div className="big">I AM A BIG DIV</div>
  // Rendering to Dom Object ______________________________________________________
  ReactDOM.render(myDiv, document.getElementById('app'))
  //________________________________________

  // Adding 2 + 3 _____________________________________________________________________
  ReactDOM.render(
    <h1>{2 + 3}</h1>,
    document.getElementById('app')
  );
//accessing variable inside of JSX expression
  const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

// Example of declaring an image as a variable and calling it throught REACT _________
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose} />;

ReactDOM.render(gooseImg, document.getElementById('app'));

//_____________________________________________________________________________
// Adding Event Listener that changes photo from one photo to another. 

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img onClick = {makeDoggy}
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));

//*********************************************************************************
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Conditional Statements do not work in REACT you must write them outside the JSX Element. 

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);

//____________________--------------------------------------___________________
//--------------------______________________________________--------------------
// The Ternary Operator - a more compact way to write conditonals in JSX 
/*
If the condition is true the statement after ? is executed if false the statement after : is exectuted.

const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
*/

// This snippet uses the Math.random method to switch between heads and tails. 
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
// Ternary operator in use. if the value of the func cointoss === heads kitty if tails dog
const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Conditionals && ________________________________________________________________________
//The logical AND (&&) operator (logical conjunction) for a set of boolean operands will
// be true if and only if all the operands are true. Otherwise it will be false.
// judgmental will be true half the time.
// in line 132 we call the variable judgmental and use the && operator. _________________
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);

// .map method 
/*
We call .map() on this array of strings, and the .map() call returns a new array of <li>s.
On the last line of the example, note that {person} will evaluate to an array, because it’s the returned value of .map()!
 JSX <li>s don’t have to be in an array like this, but they can be.
*/


const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
  <li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

/*
</ul>
A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, 
similar to an id attribute. keys don’t do anything that you can see! React uses them internally to keep track of lists. 
If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items into the wrong order.

Not all lists need to have keys. A list needs keys if either of the following are true:

The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. 
The items shouldn’t get amnesia when they render.

A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.

If neither of these conditions are true, then you don’t have to worry about keys. If you aren’t sure then it never hurts to use them!

*/

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

// React.createElement
/*
const h1 = <h1>Hello world</h1>;
can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
*/
// const greatestDivEver = <div>i am div</div>; // can be written also as below

const greatestDivEver = React.createElement(
	'div',
  null,
  'i am div'
);
