import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Board from "./components/Board/Board"
import Keyboard from "./components/Keyboard"
import { createContext } from "react"
import Confetti from "react-confetti"
import wordsBank from "./words-bank.json"

export const AppContext = createContext()

export default function App() {
  const targetWords = wordsBank

  const [lightTheme, setLightTheme] = useState(
    localStorage.getItem("lightTheme")
  )

  useEffect(() => {
    if (localStorage.getItem("lightTheme") === "true") {
      document.body.classList.add("light")
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#fffff")
    } else {
      document.body.classList.remove("light")
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#121213")
    }
  }, [lightTheme])

  const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]

  const [pickedWord, setPickedWord] = useState("")
  const [board, setBoard] = useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState(0)
  const [won, setWon] = useState(false)
  const [lose, setLose] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)

  console.log(pickedWord)

  useEffect(() => {
    setPickedWord(targetWords[Math.floor(Math.random() * targetWords.length)])
  }, [])

  function startNewGame() {
    window.location.reload()
  }

  return (
    <div className="app">
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          pickedWord,
          setWon,
          setLose,
          setGameEnded,
          gameEnded,
          won,
          lose,
          lightTheme,
          setLightTheme,
          targetWords,
        }}
      >
        <Navbar />
        {won === true && <Confetti />}
        <div className="win-lose">
          {won === true && <h1>YOU WON!</h1>}
          {lose === true && <h1>{pickedWord}</h1>}
        </div>

        {(won === true || lose === true) && (
          <div className="blur-bg">
            <div className="win-lose-mobile">
              {won === true && <h1>YOU WON!</h1>}
              {lose === true && <h1>{pickedWord}</h1>}
            </div>
          </div>
        )}

        <Board />

        <div className="btn-new-div">
          {gameEnded && (
            <button className="btn-newGame" onClick={startNewGame}>
              New Game
            </button>
          )}
        </div>

        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}
