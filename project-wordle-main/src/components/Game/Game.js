import React from 'react';
import { useState } from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ guessWordArray, setGuessWordArray, setCheckGuessArray }) {
  const [guessWord, setGuessWord] = useState("")
  const [index, setIndex] = useState(0)
  function handleSubmit(e) {
    e.preventDefault()
    console.log("guessWord:", guessWord, guessWord.length, "index:", index)
    if (guessWord.length === 5 && index < NUM_OF_GUESSES_ALLOWED) {
      guessArr = [...guessWordArray]
      guessArr[index] = { guessWord, id: Math.random() }
      setIndex(index => index + 1)
      setGuessWordArray(guessArr)
      console.log("after guess, guessWordArray:", guessWordArray, " index:", index)
      console.log(checkGuess(guessWord, answer))
      setCheckGuessArray(checkGuess(guessWord, answer))
      if (guessWord === answer) {
        console.log("match answer:")
      } else {
        console.log("no match answer")
      }
      console.log("resetting input to blank")
      setGuessWord("")
    }
  }
  function onChange(e) {
    setGuessWord(e.target.value.toUpperCase())
  }
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          maxLength="5"
          required={"true"}
          pattern="\w{5,5}"
          value={guessWord}
          onChange={onChange}
        />
      </form>
    </>);
}

export default Game;
