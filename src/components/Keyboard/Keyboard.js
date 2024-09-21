import React from "react"
import { AppContext } from "../../App"
import "./Keyboard.css"
import greek_keyboard from "../../components/greek-keyboard.json"

export default function Keyboard(props) {
  const {
    board,
    setBoard,
    currAttempt,
    setCurrAttempt,
    setWon,
    setLose,
    pickedWord,
    gameEnded,
    setGameEnded,
    won,
    lose,
    targetWords,
  } = React.useContext(AppContext)
  const [currPosition, setCurrPosition] = React.useState(0)
  const [endOfRow, setEndOfRow] = React.useState(false)
  const [correctLetters, setCorrectLetters] = React.useState([])
  const [nearLetters, setNearLetters] = React.useState([])
  const [notLetters, setNotLetters] = React.useState([])
  const [numOfCorLetters, setNumOfCorLetters] = React.useState(0)
  const greekKeyboard = greek_keyboard

  function addLetter(event) {
    const { innerHTML } = event.target

    if (innerHTML === "ENTER") {
      const typedWord = board[currAttempt].toString().replace(/[,]/g, "")

      if (targetWords.includes(typedWord)) {
        setCurrAttempt((prevAtt) => (prevAtt = prevAtt + 1))
        setCurrPosition(0)
        setEndOfRow(false)
        checkLetters(currAttempt)
      } else {
        alert(`${typedWord} is not a valid word.`)
      }
    } else if (innerHTML === "DELETE") {
      if (endOfRow === false) {
        if (currPosition <= 0) {
          const newBoard = [...board]
          newBoard[currAttempt][currPosition] = ""
          setBoard(newBoard)
          setCurrPosition(0)
          setEndOfRow(false)
        } else {
          const newBoard = [...board]
          newBoard[currAttempt][currPosition - 1] = ""
          setBoard(newBoard)
          setCurrPosition((prevPoss) => (prevPoss = prevPoss - 1))
          setEndOfRow(false)
        }
      } else {
        const newBoard = [...board]
        newBoard[currAttempt][4] = ""
        setBoard(newBoard)
        setEndOfRow(false)
      }
    } else {
      const newBoard = [...board]
      newBoard[currAttempt][currPosition] = innerHTML
      setBoard(newBoard)
      if (currPosition >= 4) {
        setCurrPosition(4)
        setEndOfRow(true)
      } else {
        setCurrPosition((prevPoss) => (prevPoss = prevPoss + 1))
        setEndOfRow(false)
      }
    }
  }

  React.useEffect(() => {
    if (won) {
      // GAMES PLAYED
      let games = parseInt(
        localStorage.getItem("games") ? localStorage.getItem("games") : 0
      )
      games = games + 1
      localStorage.setItem("games", JSON.stringify(games))

      // TOTAL WINS
      let wins = parseInt(
        localStorage.getItem("wins") ? localStorage.getItem("wins") : 0
      )
      wins = wins + 1
      localStorage.setItem("wins", JSON.stringify(wins))

      // CURRENT WIN STREAK
      let currentStreak = parseInt(
        localStorage.getItem("currentStreak")
          ? localStorage.getItem("currentStreak")
          : 0
      )
      currentStreak = currentStreak + 1
      localStorage.setItem("currentStreak", JSON.stringify(currentStreak))

      // WIN PERCENTAGE
      let winPercent = (wins * 100) / games
      localStorage.setItem("winPercent", JSON.stringify(winPercent))

      // ATTEMPT WON
      let firstAttempt = parseInt(
        localStorage.getItem("firstAttempt")
          ? localStorage.getItem("firstAttempt")
          : 0
      )
      let secondAttempt = parseInt(
        localStorage.getItem("secondAttempt")
          ? localStorage.getItem("secondAttempt")
          : 0
      )
      let thirdAttempt = parseInt(
        localStorage.getItem("thirdAttempt")
          ? localStorage.getItem("thirdAttempt")
          : 0
      )
      let forthAttempt = parseInt(
        localStorage.getItem("forthAttempt")
          ? localStorage.getItem("forthAttempt")
          : 0
      )
      let fifthAttempt = parseInt(
        localStorage.getItem("fifthAttempt")
          ? localStorage.getItem("fifthAttempt")
          : 0
      )
      let sixthAttempt = parseInt(
        localStorage.getItem("sixthAttempt")
          ? localStorage.getItem("sixthAttempt")
          : 0
      )

      if (currAttempt === 1) {
        firstAttempt = firstAttempt + 1
        localStorage.setItem("firstAttempt", JSON.stringify(firstAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem(
          "firstAttemptPercent",
          JSON.stringify(firstAttemptPercent)
        )
        localStorage.setItem(
          "secondAttemptPercent",
          JSON.stringify(secondAttemptPercent)
        )
        localStorage.setItem(
          "thirdAttemptPercent",
          JSON.stringify(thirdAttemptPercent)
        )
        localStorage.setItem(
          "forthAttemptPercent",
          JSON.stringify(forthAttemptPercent)
        )
        localStorage.setItem(
          "fifthAttemptPercent",
          JSON.stringify(fifthAttemptPercent)
        )
        localStorage.setItem(
          "sixthAttemptPercent",
          JSON.stringify(sixthAttemptPercent)
        )
      } else if (currAttempt === 2) {
        secondAttempt = secondAttempt + 1
        localStorage.setItem("secondAttempt", JSON.stringify(secondAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem(
          "firstAttemptPercent",
          JSON.stringify(firstAttemptPercent)
        )
        localStorage.setItem(
          "secondAttemptPercent",
          JSON.stringify(secondAttemptPercent)
        )
        localStorage.setItem(
          "thirdAttemptPercent",
          JSON.stringify(thirdAttemptPercent)
        )
        localStorage.setItem(
          "forthAttemptPercent",
          JSON.stringify(forthAttemptPercent)
        )
        localStorage.setItem(
          "fifthAttemptPercent",
          JSON.stringify(fifthAttemptPercent)
        )
        localStorage.setItem(
          "sixthAttemptPercent",
          JSON.stringify(sixthAttemptPercent)
        )
      } else if (currAttempt === 3) {
        thirdAttempt = thirdAttempt + 1
        localStorage.setItem("thirdAttempt", JSON.stringify(thirdAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem(
          "firstAttemptPercent",
          JSON.stringify(firstAttemptPercent)
        )
        localStorage.setItem(
          "secondAttemptPercent",
          JSON.stringify(secondAttemptPercent)
        )
        localStorage.setItem(
          "thirdAttemptPercent",
          JSON.stringify(thirdAttemptPercent)
        )
        localStorage.setItem(
          "forthAttemptPercent",
          JSON.stringify(forthAttemptPercent)
        )
        localStorage.setItem(
          "fifthAttemptPercent",
          JSON.stringify(fifthAttemptPercent)
        )
        localStorage.setItem(
          "sixthAttemptPercent",
          JSON.stringify(sixthAttemptPercent)
        )
      } else if (currAttempt === 4) {
        forthAttempt = forthAttempt + 1
        localStorage.setItem("forthAttempt", JSON.stringify(forthAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem(
          "firstAttemptPercent",
          JSON.stringify(firstAttemptPercent)
        )
        localStorage.setItem(
          "secondAttemptPercent",
          JSON.stringify(secondAttemptPercent)
        )
        localStorage.setItem(
          "thirdAttemptPercent",
          JSON.stringify(thirdAttemptPercent)
        )
        localStorage.setItem(
          "forthAttemptPercent",
          JSON.stringify(forthAttemptPercent)
        )
        localStorage.setItem(
          "fifthAttemptPercent",
          JSON.stringify(fifthAttemptPercent)
        )
        localStorage.setItem(
          "sixthAttemptPercent",
          JSON.stringify(sixthAttemptPercent)
        )
      } else if (currAttempt === 5) {
        fifthAttempt = fifthAttempt + 1
        localStorage.setItem("fifthAttempt", JSON.stringify(fifthAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem(
          "firstAttemptPercent",
          JSON.stringify(firstAttemptPercent)
        )
        localStorage.setItem(
          "secondAttemptPercent",
          JSON.stringify(secondAttemptPercent)
        )
        localStorage.setItem(
          "thirdAttemptPercent",
          JSON.stringify(thirdAttemptPercent)
        )
        localStorage.setItem(
          "forthAttemptPercent",
          JSON.stringify(forthAttemptPercent)
        )
        localStorage.setItem(
          "fifthAttemptPercent",
          JSON.stringify(fifthAttemptPercent)
        )
        localStorage.setItem(
          "sixthAttemptPercent",
          JSON.stringify(sixthAttemptPercent)
        )
      } else if (currAttempt === 6) {
        sixthAttempt = sixthAttempt + 1
        localStorage.setItem("sixthAttempt", JSON.stringify(sixthAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem(
          "firstAttemptPercent",
          JSON.stringify(firstAttemptPercent)
        )
        localStorage.setItem(
          "secondAttemptPercent",
          JSON.stringify(secondAttemptPercent)
        )
        localStorage.setItem(
          "thirdAttemptPercent",
          JSON.stringify(thirdAttemptPercent)
        )
        localStorage.setItem(
          "forthAttemptPercent",
          JSON.stringify(forthAttemptPercent)
        )
        localStorage.setItem(
          "fifthAttemptPercent",
          JSON.stringify(fifthAttemptPercent)
        )
        localStorage.setItem(
          "sixthAttemptPercent",
          JSON.stringify(sixthAttemptPercent)
        )
      }

      setCurrAttempt(7)
    }

    if (lose) {
      // TOTAL GAMES
      let games = parseInt(
        localStorage.getItem("games") ? localStorage.getItem("games") : 0
      )
      games = games + 1
      localStorage.setItem("games", JSON.stringify(games))

      // BEST STREAK
      let bestStreak = parseInt(
        localStorage.getItem("bestStreak")
          ? localStorage.getItem("bestStreak")
          : 0
      )
      let currentStreak = parseInt(
        localStorage.getItem("currentStreak")
          ? localStorage.getItem("currentStreak")
          : 0
      )

      if (bestStreak < currentStreak) {
        // SET BEST STREAK
        localStorage.setItem("bestStreak", currentStreak)

        // RESET CURRENT STREAK
        localStorage.setItem("currentStreak", "0")
      } else {
        // RESET CURRENT STREAK
        localStorage.setItem("currentStreak", "0")
      }

      // WIN PERCENTAGE
      let wins = parseInt(
        localStorage.getItem("wins") ? localStorage.getItem("wins") : 0
      )
      let winPercent = (wins * 100) / games
      localStorage.setItem("winPercent", JSON.stringify(winPercent))

      setCurrAttempt(7)
    }
  }, [gameEnded])

  React.useEffect(() => {
    setNumOfCorLetters(0)
  }, [currAttempt])

  function checkLetters(at) {
    let arrOfPickedWord = [...pickedWord]
    console.log(pickedWord)

    for (let i = 0; i < 5; i++) {
      if (arrOfPickedWord.includes(board[at][i])) {
        // console.log("Exists in word.")
        setNearLetters((prevLetters) => [...prevLetters, board[at][i]])
      } else {
        setNotLetters((prevLetters) => [...prevLetters, board[at][i]])
      }

      if (board[at][i] === arrOfPickedWord[i]) {
        // console.log("Letter is in the same position")
        setCorrectLetters((prevLetters) => [...prevLetters, board[at][i]])
      }
    }

    for (let i = 0; i < 5; i++) {
      if (board[at][i] === arrOfPickedWord[i]) {
        setNumOfCorLetters((prevNum) => (prevNum = prevNum + 1))
      }
    }
  }

  if (numOfCorLetters === 5 && gameEnded === false) {
    console.log("WIN")
    setWon(true)
    setGameEnded(true)
  }

  if (currAttempt === 6 && gameEnded === false) {
    if (numOfCorLetters < 5) {
      console.log("LOSE")
      setLose(true)
      setGameEnded(true)
    }
  }

  const correctLettersSet = new Set(correctLetters)

  const nearLetArr = nearLetters.filter((lett) => {
    // return those elements not in the correctLettersSet
    return !correctLettersSet.has(lett)
  })

  return (
    <div className="keyboard-wrapper">
      {greekKeyboard.rows.map((row) => {
        return (
          <div className="keyboard-row" key={row.row}>
            {row.keys.map((key) => {
              return (
                <div
                  onClick={(e) => addLetter(e)}
                  className={
                    nearLetArr.includes(key)
                      ? "keyboard-key near"
                      : correctLetters.includes(key)
                      ? "keyboard-key correct"
                      : notLetters.includes(key)
                      ? "keyboard-key not"
                      : key === "DELETE"
                      ? "keyboard-key delete-key"
                      : key === "ENTER"
                      ? "keyboard-key enter-key"
                      : "keyboard-key"
                  }
                  key={key}
                >
                  {key}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
