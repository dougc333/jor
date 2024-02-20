import React from 'react';
import { range } from '../../utils'

/* range 6 rows 5 squares */
function Header({ guessWordArray, checkGuessArray }) {

  return (
    <>
      <header>
        <h1>Word Game</h1>
      </header>
      <div className="guess-results">
        {console.log("header checkGuessArray:", checkGuessArray)}
        <p className="guess">
          {range(0, checkGuessArray.length).map(numRows =>
            <span className={`cell ${checkGuessArray[numRows].status}`} key={Math.random()} > {checkGuessArray[numRows].letter}</span>
          )}
        </p>
      </div >
    </>
  );
}

export default Header;
