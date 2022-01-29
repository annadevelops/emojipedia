import React from 'react';
import Term from './Term';
import emojipedia from '../emojipedia';

//Create a Term from the term that is passed through it
function createTerm(term){
    return(<Term
    key={term.id}
    emoji={term.emoji}
    name={term.name}
    meaning={term.meaning}
    />)

}

function Dictionary(){
    return(
        //creates a dictionary - so a collection of Terms
        <dl className="dictionary">

        {/* Maps through the emojipedia.js and call .createTerm() on each term to create a Term */}
       { emojipedia.map(createTerm)}
       </dl>
    );
}

export default Dictionary;