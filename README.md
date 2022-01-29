# Emojipedia App

This project was created with React and displays the meaning of emoji(s).

## Installation

Create a new React app from your chosen environment. I used VS Code and the [steps](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial) can be found here.

## Usage

The below explains the files in the repo.


### Term.js
This creates a Term for each emoji to be displayed which outputs the  emoji, name, then meaning for the Term.


### Dictionary.js
This creates a collection of Term(s) and group them into a div (container) that can be used by App.js and subsequently index.js to render the page with React.

Dictionary first creates a function to create a Term that is modelled from Term.js from the whatever term/data that is passed to it

```
function createTerm(term){
    return(
        <Term />
    )
};
```

Each new Term created with the function will have the **key, emoji, name, meaning** displayed within the Dictionary
```
function createTerm(term){
    return(
        <Term 
            emoji={term.emoji}
            name={term.name}
            meaning={term.meaning}
        />
    )
};
```

React creates a virtual version of the DOM so it also [requires](https://reactjs.org/docs/lists-and-keys.html) the **key** to be created with each new component and they have to be unique. Each emoji in the *emojipedia.js* has its own **id** so that can be used as a key. Complete code for the *.createTerm()* is
```
function createTerm(term){
    return(
        <Term 
            key={term.id}
            emoji={term.emoji}
            name={term.name}
            meaning={term.meaning}
        />
    )
};
``` 

Then finally create a function to create the actual Dictionary
```
function Dictionary(){
    return(
        //creates a dictionary - so a collection of Terms
        <dl className="dictionary">

        // Maps through the emojipedia.js and call .createTerm() on each term to create a Term 
       { emojipedia.map(createTerm)}
       </dl>
    );
}
```

### App.js
This file calls the components that the page should render. In this case, it's the Dictionary we want to create

### index.js
*App.js* is then called here and rendered as a React application

### emojipedia.js
This file contains the data to be displayed. New emoji definition added to this file will reflect on the homepage.

