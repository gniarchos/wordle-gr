import React, { useContext } from "react"
import { AppContext } from "../../App"

export default function Letters(props) {
  const { board, pickedWord, currAttempt } = useContext(AppContext)
  const letter = board[props.attempt][props.position]
  const correct = pickedWord[props.position] === letter

  const near = !correct && letter != "" && pickedWord.includes(letter)

  var letterCheck = ""

  if (currAttempt > props.attempt) {
    letterCheck = correct ? "correct" : near ? "near" : "error"
  }

  return (
    <div className="board-letter-cell" id={letterCheck}>
      {letter}
    </div>
  )
}
