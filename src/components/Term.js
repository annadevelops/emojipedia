import React from 'react';


//create and return a Term which consist =s of its emoji, name, and meaning
function Term(props){
    return(
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
    )
}

export default Term;