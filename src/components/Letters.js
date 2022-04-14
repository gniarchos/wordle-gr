import React from 'react'
import { AppContext } from "../App"

export default function Letters(props) {

  const {board, pickedWord, currAttempt, setCorrectLetters, correctLetters, won} = React.useContext(AppContext)
  const letter = board[props.attempt][props.position]
  

  const correct = pickedWord[props.position] === letter

  // console.log(correctLetters)

  const near = !correct && letter != "" && pickedWord.includes(letter)
  // console.log(letter)

  var letterCheck = ""

  if (currAttempt > props.attempt)
  {
    letterCheck = correct ? "correct" : near ? "near" : "error"
  }

  return (
    <div className='letters-div'>
        {/* <input className='letter-input' type="text" maxlength="1" defaultValue={letter} readonly/> */}
        <div className='letter-input' id={letterCheck} >{letter}</div>
    </div>
  )
}
