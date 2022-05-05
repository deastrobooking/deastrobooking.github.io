import React from 'react';
import ReactDOM from 'react-dom';

// Below we declare a class and return the HTML Blockquote Element
class QuoteMaker extends React.Component {
  render() {
    return (
    	<blockquote>
  			<p>
    			What is important now is to recover our senses.
  			</p>
  			<cite>
    		  <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
      	    Susan Sontag
    		  </a>
  			</cite>
			</blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);
//________________________________________________________

const owl = {
    title: 'Excellent Owl',
    src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
  };
  
  // Component class starts here:
  class Owl extends React.Component {
    render() {
      return (
        <div>
          <h1> {owl.title} </h1>
          <img 
                src = {owl.src}
                alt = {owl.title} />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Owl />,
    document.getElementById('app')
  );

/*
A render() function must have a return statement. However, that isn’t all that it can have.
A render() function can also be a fine place to put simple calculations that need to happen 
right before a component renders. Here’s an example of some calculations inside of a render function:

*/

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    let friend = friends[0];
  	return (
    	<div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
    	</div>
  	);
	}
}

ReactDOM.render(<Friend />, document.getElementById('app'));

// ___________________________________________________________________________
// Use a Conditional in a Render Function
/*
Notice that the if statement is located inside of the render function, but before 
the return statement. This is pretty much the only way that you will ever see an if statement used in a render function.
*/


class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);

//_"THIS"_________________________________________________________________________________________________________________
/*
Getter Methods 
Reference Material https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
*/

class MyName extends React.Component {
	// name property goes here:
  get name() {
  	return 'Rybu';
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

//Use an Event Listener in a Component _______________________________________________________________________
/*
render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}
*/

class Button extends React.Component {
    scream() {
      alert('AAAAAAAAHHH!!!!!');
    }
  
    render() {
      return <button onClick={this.scream}>AAAAAH!</button>;
    }
  }
  
  ReactDOM.render(<Button />, document.getElementById('app'));

  //__________________________________________________________________________________________________________
  