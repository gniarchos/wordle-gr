import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Board from "./components/Board/Board"
import Keyboard from "./components/Keyboard/Keyboard"
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
        {won && <Confetti />}

        <Board />

        {won ||
          (lose && (
            <div
              className={
                won ? "win-lose-container win" : "win-lose-container lose"
              }
            >
              {won && (
                <>
                  <h1>Συγχαρητήρια!!</h1>
                  <span>Βρήκες την λέξη!</span>

                  {gameEnded && (
                    <button className="btn-newGame" onClick={startNewGame}>
                      New Game
                    </button>
                  )}
                </>
              )}
              {lose && (
                <>
                  <h1>Εχασες!</h1>
                  <span style={{ fontSize: "1.2rem" }}>
                    Η λέξη ήταν: <b>{pickedWord}</b>
                  </span>

                  {gameEnded && (
                    <button className="btn-newGame" onClick={startNewGame}>
                      New Game
                    </button>
                  )}
                </>
              )}
            </div>
          ))}

        {(won || lose) && (
          <div className="blur-bg">
            <div className="win-lose-container-mobile">
              {won && (
                <>
                  <h1>Συγχαρητήρια!!</h1>
                  <h3>Βρήκες την λέξη!</h3>

                  {!gameEnded && (
                    <button className="btn-newGame" onClick={startNewGame}>
                      New Game
                    </button>
                  )}
                </>
              )}
              {lose && (
                <>
                  <h1>Εχασες!</h1>
                  <span style={{ fontSize: "1.2rem" }}>
                    Η λέξη ήταν: <b>{pickedWord}</b>
                  </span>

                  {gameEnded && (
                    <button className="btn-newGame" onClick={startNewGame}>
                      New Game
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}
