import React from "react"
import Navbar from "./components/Navbar"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import { createContext } from "react"
import wordsBank from "./words-bank.txt"
import Confetti from 'react-confetti'

export const AppContext = createContext()

export default function App() {

  const [lightTheme, setLightTheme] = React.useState(localStorage.getItem("lightTheme"))

  // !localStorage.getItem("lightTheme") && localStorage.setItem("lightTheme", "false")


  React.useEffect(() => {

    if (localStorage.getItem("lightTheme") === "true" ) 
    {
      document.body.classList.add('light')
    }
    else
    {
      document.body.classList.remove('light')
    }


  }, [lightTheme])

  

  const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ]

const [pickedWord, setPickedWord] = React.useState("")
const [board, setBoard] = React.useState(boardDefault)
const [currAttempt, setCurrAttempt] = React.useState(0)
const [won, setWon] = React.useState(false)
const [lose, setLose] = React.useState(false)
const [gameEnded, setGameEnded] = React.useState(false)
// const [winsData, setWinsData] = React.useState(localStorage.getItem("wins") ? localStorage.getItem("wins") : 0)

const showDiv = {
  display: won || lose && "block"
}




React.useEffect(() => {
  fetch(wordsBank)
    .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split("\r\n");
        // setWordsList([wordArr])
        // wordArr.includes("ΚΑΛΟΣ\r")
        // console.log(wordArr)
        // console.log(wordArr.includes("ΚΑΛΟΣ"))
        setPickedWord(wordArr[Math.floor(Math.random() * wordArr.length)])
        // console.log(todaysWord)
      })
}, [])


  function startNewGame() {
    console.log("Starting new game...")
    window.location.reload()
  }

  return (
    <div className="app">
      
      <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt, pickedWord, setWon, setLose, setGameEnded, gameEnded, won, lose, lightTheme, setLightTheme}}>
        <Navbar />
        {won === true && <Confetti />}
        <div className="win-lose">
          {won === true && <h1>YOU WON!</h1>}
          {lose === true && <h1>{pickedWord}</h1>}
        </div>

        {( won === true || lose === true) && 
        <div className="blur-bg">
          <div className="win-lose-mobile">
            {won === true && <h1>YOU WON!</h1>}
            {lose === true && <h1>{pickedWord}</h1>}
          </div>
        </div>}

        <Board />

        <div className="btn-new-div">
          {gameEnded && <button className="btn-newGame" onClick={startNewGame}>New Game</button>}
        </div>
        
        <Keyboard />
      </AppContext.Provider>
      
    </div>
  )
}

