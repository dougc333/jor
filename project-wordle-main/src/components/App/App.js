import Game from '../Game';
import Header from '../Header';
import { useState } from 'react'

function App() {
  const [guessWord, setGuessWord] = useState("")
  const [guessWordArray, setGuessWordArray] = useState([{ "guessWord": "     ", "id": Math.random() },
  { "guessWord": "     ", "id": Math.random() }, { "guessWord": "     ", "id": Math.random() }, { "guessWord": "     ", "id": Math.random() }, { "guessWord": "     ", "id": Math.random() }, { "guessWord": "     ", "id": Math.random() }])
  const [checkGuessArray, setCheckGuessArray] = useState([])

  return (
    <div className="wrapper">
      <Header
        guessWordArray={guessWordArray}
        checkGuessArray={checkGuessArray}
      />

      <div className="game-wrapper">
        <Game guessWordArray={guessWordArray}
          setGuessWordArray={setGuessWordArray}
          guessWord={guessWord}
          setGuessWord={setGuessWord}
          setCheckGuessArray={setCheckGuessArray}
        />
      </div>
    </div>
  );
}

export default App;
