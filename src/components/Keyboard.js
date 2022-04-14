import React from 'react'
import { AppContext } from "../App"
import wordsBank from "../words-bank.txt"

export default function Keyboard(props) {

  const {board, setBoard, currAttempt, setCurrAttempt, setWon, setLose, pickedWord, gameEnded, setGameEnded, won, lose} = React.useContext(AppContext)
  const [currPosition, setCurrPosition] = React.useState(0)
  const [endOfRow, setEndOfRow] = React.useState(false)
  const [correctLetters, setCorrectLetters] = React.useState([])
  const [nearLetters, setNearLetters] = React.useState([])
  const [notLetters, setNotLetters] = React.useState([])
  const [numOfCorLetters, setNumOfCorLetters] = React.useState(0)

  function addLetter(event) {
    const {innerHTML} = event.target

    if (innerHTML === "ENTER")
    {
      
      fetch(wordsBank)
      .then((response) => response.text())
        .then((result) => {
          const wordArr = result.split("\r\n");
          const typedWord = board[currAttempt].toString().replace(/[,]/g, '');
          // console.log(wordArr.includes(typedWord))
        
          if (wordArr.includes(typedWord))
          {
            setCurrAttempt(prevAtt => prevAtt = prevAtt + 1)
            setCurrPosition(0)
            setEndOfRow(false)
            // props.checkLetters(currAttempt)
            checkLetters(currAttempt)
          }
          else 
          {
            alert(`${typedWord} is not a valid word.`)
          }

      })

    }
    else if (innerHTML === "DELETE")
    {
      
      if (endOfRow === false)
      {
        if (currPosition <= 0 )
        {
          const newBoard = [...board]
          newBoard[currAttempt][currPosition] = ""
          setBoard(newBoard)
          setCurrPosition(0)
          setEndOfRow(false)
        }
        else
        {
          const newBoard = [...board]
          newBoard[currAttempt][currPosition-1] = ""
          setBoard(newBoard)
          setCurrPosition(prevPoss => prevPoss = prevPoss - 1)
          setEndOfRow(false)
        }
      }
      else
      {
        // console.log("hello")
        const newBoard = [...board]
        newBoard[currAttempt][4] = ""
        setBoard(newBoard)
        // setCurrPosition(prevPoss => prevPoss = prevPoss - 1)
        setEndOfRow(false)
        // setEnterPressed(false)
      } 
      
    }
    else
    {
      const newBoard = [...board]
      newBoard[currAttempt][currPosition] = innerHTML;
      setBoard(newBoard);
      if(currPosition >= 4 )
      {
        setCurrPosition(4)
        setEndOfRow(true)

      }
      else
      {
        setCurrPosition(prevPoss => prevPoss = prevPoss + 1)
        setEndOfRow(false)
      }

    }

  }

  React.useEffect(() => {

    if (won) 
    {
      // GAMES PLAYED
      let games = parseInt(localStorage.getItem("games") ? localStorage.getItem("games") : 0) 
      games = games + 1
      localStorage.setItem("games", JSON.stringify(games))

      // TOTAL WINS
      let wins = parseInt(localStorage.getItem("wins") ? localStorage.getItem("wins") : 0)
      wins = wins + 1
      localStorage.setItem("wins", JSON.stringify(wins))

      // CURRENT WIN STREAK
      let currentStreak = parseInt(localStorage.getItem("currentStreak") ? localStorage.getItem("currentStreak") : 0)
      currentStreak = currentStreak + 1
      localStorage.setItem("currentStreak", JSON.stringify(currentStreak))

      // WIN PERCENTAGE
      let winPercent = (wins * 100) / games
      localStorage.setItem("winPercent", JSON.stringify(winPercent))

      // ATTEMPT WON
      let firstAttempt = parseInt(localStorage.getItem("firstAttempt") ? localStorage.getItem("firstAttempt") : 0)
      let secondAttempt = parseInt(localStorage.getItem("secondAttempt") ? localStorage.getItem("secondAttempt") : 0)
      let thirdAttempt = parseInt(localStorage.getItem("thirdAttempt") ? localStorage.getItem("thirdAttempt") : 0)
      let forthAttempt = parseInt(localStorage.getItem("forthAttempt") ? localStorage.getItem("forthAttempt") : 0)
      let fifthAttempt = parseInt(localStorage.getItem("fifthAttempt") ? localStorage.getItem("fifthAttempt") : 0)
      let sixthAttempt = parseInt(localStorage.getItem("sixthAttempt") ? localStorage.getItem("sixthAttempt") : 0)

      if (currAttempt === 1)
      {
        firstAttempt = firstAttempt + 1
        localStorage.setItem("firstAttempt", JSON.stringify(firstAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem("firstAttemptPercent", JSON.stringify(firstAttemptPercent))
        localStorage.setItem("secondAttemptPercent", JSON.stringify(secondAttemptPercent))
        localStorage.setItem("thirdAttemptPercent", JSON.stringify(thirdAttemptPercent))
        localStorage.setItem("forthAttemptPercent", JSON.stringify(forthAttemptPercent))
        localStorage.setItem("fifthAttemptPercent", JSON.stringify(fifthAttemptPercent))
        localStorage.setItem("sixthAttemptPercent", JSON.stringify(sixthAttemptPercent))
      }
      else if (currAttempt === 2)
      {
        secondAttempt = secondAttempt + 1
        localStorage.setItem("secondAttempt", JSON.stringify(secondAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem("firstAttemptPercent", JSON.stringify(firstAttemptPercent))
        localStorage.setItem("secondAttemptPercent", JSON.stringify(secondAttemptPercent))
        localStorage.setItem("thirdAttemptPercent", JSON.stringify(thirdAttemptPercent))
        localStorage.setItem("forthAttemptPercent", JSON.stringify(forthAttemptPercent))
        localStorage.setItem("fifthAttemptPercent", JSON.stringify(fifthAttemptPercent))
        localStorage.setItem("sixthAttemptPercent", JSON.stringify(sixthAttemptPercent))
      }
      else if (currAttempt === 3)
      {
        thirdAttempt = thirdAttempt + 1
        localStorage.setItem("thirdAttempt", JSON.stringify(thirdAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem("firstAttemptPercent", JSON.stringify(firstAttemptPercent))
        localStorage.setItem("secondAttemptPercent", JSON.stringify(secondAttemptPercent))
        localStorage.setItem("thirdAttemptPercent", JSON.stringify(thirdAttemptPercent))
        localStorage.setItem("forthAttemptPercent", JSON.stringify(forthAttemptPercent))
        localStorage.setItem("fifthAttemptPercent", JSON.stringify(fifthAttemptPercent))
        localStorage.setItem("sixthAttemptPercent", JSON.stringify(sixthAttemptPercent))
      }
      else if (currAttempt === 4)
      {
        forthAttempt = forthAttempt + 1
        localStorage.setItem("forthAttempt", JSON.stringify(forthAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem("firstAttemptPercent", JSON.stringify(firstAttemptPercent))
        localStorage.setItem("secondAttemptPercent", JSON.stringify(secondAttemptPercent))
        localStorage.setItem("thirdAttemptPercent", JSON.stringify(thirdAttemptPercent))
        localStorage.setItem("forthAttemptPercent", JSON.stringify(forthAttemptPercent))
        localStorage.setItem("fifthAttemptPercent", JSON.stringify(fifthAttemptPercent))
        localStorage.setItem("sixthAttemptPercent", JSON.stringify(sixthAttemptPercent))
      }
      else if (currAttempt === 5)
      {
        fifthAttempt = fifthAttempt + 1
        localStorage.setItem("fifthAttempt", JSON.stringify(fifthAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem("firstAttemptPercent", JSON.stringify(firstAttemptPercent))
        localStorage.setItem("secondAttemptPercent", JSON.stringify(secondAttemptPercent))
        localStorage.setItem("thirdAttemptPercent", JSON.stringify(thirdAttemptPercent))
        localStorage.setItem("forthAttemptPercent", JSON.stringify(forthAttemptPercent))
        localStorage.setItem("fifthAttemptPercent", JSON.stringify(fifthAttemptPercent))
        localStorage.setItem("sixthAttemptPercent", JSON.stringify(sixthAttemptPercent))
      }
      else if (currAttempt === 6)
      {
        sixthAttempt = sixthAttempt + 1
        localStorage.setItem("sixthAttempt", JSON.stringify(sixthAttempt))

        let firstAttemptPercent = (firstAttempt * 100) / wins
        let secondAttemptPercent = (secondAttempt * 100) / wins
        let thirdAttemptPercent = (thirdAttempt * 100) / wins
        let forthAttemptPercent = (forthAttempt * 100) / wins
        let fifthAttemptPercent = (fifthAttempt * 100) / wins
        let sixthAttemptPercent = (sixthAttempt * 100) / wins
        localStorage.setItem("firstAttemptPercent", JSON.stringify(firstAttemptPercent))
        localStorage.setItem("secondAttemptPercent", JSON.stringify(secondAttemptPercent))
        localStorage.setItem("thirdAttemptPercent", JSON.stringify(thirdAttemptPercent))
        localStorage.setItem("forthAttemptPercent", JSON.stringify(forthAttemptPercent))
        localStorage.setItem("fifthAttemptPercent", JSON.stringify(fifthAttemptPercent))
        localStorage.setItem("sixthAttemptPercent", JSON.stringify(sixthAttemptPercent))
      }
  
      setCurrAttempt(7)
    }

    if (lose) 
    {

      // TOTAL GAMES
      let games = parseInt(localStorage.getItem("games") ? localStorage.getItem("games") : 0)
      games = games + 1
      localStorage.setItem("games", JSON.stringify(games))

      // BEST STREAK
      let bestStreak = parseInt(localStorage.getItem("bestStreak") ? localStorage.getItem("bestStreak") : 0)
      let currentStreak = parseInt(localStorage.getItem("currentStreak") ? localStorage.getItem("currentStreak") : 0)

      if (bestStreak < currentStreak)
      {
        // SET BEST STREAK
        localStorage.setItem("bestStreak", currentStreak)

        // RESET CURRENT STREAK
        localStorage.setItem("currentStreak", "0")
      }
      else
      {
        // RESET CURRENT STREAK
        localStorage.setItem("currentStreak", "0")
      }

      // WIN PERCENTAGE
      let wins = parseInt(localStorage.getItem("wins") ? localStorage.getItem("wins") : 0)
      let winPercent = (wins * 100) / games
      localStorage.setItem("winPercent", JSON.stringify(winPercent))

      setCurrAttempt(7)
    }
 
  }, [gameEnded])

  React.useEffect(() => {
    setNumOfCorLetters(0)
  }, [currAttempt])

  function checkLetters(at) {
    // let pickedWord = fixedPickedWord.slice(0, -1)
    let arrOfPickedWord = [...pickedWord]
    console.log(pickedWord)

    for (let i=0; i < 5; i++)
    {
      if (arrOfPickedWord.includes(board[at][i]))
      {
        // console.log("Exists in letter.")
        setNearLetters(prevLetters => [...prevLetters, board[at][i]])
      }
      else {
        setNotLetters(prevLetters => [...prevLetters, board[at][i]])
        // console.log(notLetters)
      }

      if(board[at][i] === arrOfPickedWord[i])
      {
        // console.log("Letter is in the same position")
        setCorrectLetters(prevLetters => [...prevLetters, board[at][i]])
        
      }
      
    }

    for (let i=0; i < 5; i++) {
      if(board[at][i] === arrOfPickedWord[i]) {
        setNumOfCorLetters(prevNum => prevNum = prevNum + 1)
      }
    }
  }


  if (numOfCorLetters === 5 && gameEnded === false) {
    console.log("WIN")
    // setCurrAttempt(7)
    setWon(true)
    setGameEnded(true)
  }

  if (currAttempt === 6 && gameEnded === false) {
    if (numOfCorLetters < 5)
    {
      console.log("LOSE")
      // setCurrAttempt(7)
      setLose(true)
      setGameEnded(true)
    }
  }

  const correctLettersSet = new Set(correctLetters)

  const nearLetArr = nearLetters.filter((lett) => {
    // return those elements not in the correctLettersSet
    return !correctLettersSet.has(lett);
  })

  return (
    <div className='keyboard'>
      <div className='row'>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Ε") ? "key near" : correctLetters.includes("Ε") ? "key correct" : notLetters.includes("Ε") ? "key not" : "key"}>Ε</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Ρ") ? "key near" : correctLetters.includes("Ρ") ? "key correct" : notLetters.includes("Ρ") ? "key not" : "key"}>Ρ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Τ") ? "key near" : correctLetters.includes("Τ") ? "key correct" : notLetters.includes("Τ") ? "key not" : "key"}>Τ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Υ") ? "key near" : correctLetters.includes("Υ") ? "key correct" : notLetters.includes("Υ") ? "key not" : "key"}>Υ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Θ") ? "key near" : correctLetters.includes("Θ") ? "key correct" : notLetters.includes("Θ") ? "key not" : "key"}>Θ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Ι") ? "key near" : correctLetters.includes("Ι") ? "key correct" : notLetters.includes("Ι") ? "key not" : "key"}>Ι</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Ο") ? "key near" : correctLetters.includes("Ο") ? "key correct" : notLetters.includes("Ο") ? "key not" : "key"}>Ο</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Π") ? "key near" : correctLetters.includes("Π") ? "key correct" : notLetters.includes("Π") ? "key not" : "key"}>Π</div>
      </div>
      <div className='row'>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Α") ? "key near" : correctLetters.includes("Α") ? "key correct" : notLetters.includes("Α") ? "key not" : "key"}>Α</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Σ") ? "key near" : correctLetters.includes("Σ") ? "key correct" : notLetters.includes("Σ") ? "key not" : "key"}>Σ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Δ") ? "key near" : correctLetters.includes("Δ") ? "key correct" : notLetters.includes("Δ") ? "key not" : "key"}>Δ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Φ") ? "key near" : correctLetters.includes("Φ") ? "key correct" : notLetters.includes("Φ") ? "key not" : "key"}>Φ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Γ") ? "key near" : correctLetters.includes("Γ") ? "key correct" : notLetters.includes("Γ") ? "key not" : "key"}>Γ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Η") ? "key near" : correctLetters.includes("Η") ? "key correct" : notLetters.includes("Η") ? "key not" : "key"}>Η</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Ξ") ? "key near" : correctLetters.includes("Ξ") ? "key correct" : notLetters.includes("Ξ") ? "key not" : "key"}>Ξ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Κ") ? "key near" : correctLetters.includes("Κ") ? "key correct" : notLetters.includes("Κ") ? "key not" : "key"}>Κ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Λ") ? "key near" : correctLetters.includes("Λ") ? "key correct" : notLetters.includes("Λ") ? "key not" : "key"}>Λ</div>
      </div>
      <div className='row'>
          <div onClick={(e) => addLetter(e)} className='key enter-key'>ENTER</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Ζ") ? "key near" : correctLetters.includes("Ζ") ? "key correct" : notLetters.includes("Ζ") ? "key not" : "key"}>Ζ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Χ") ? "key near" : correctLetters.includes("Χ") ? "key correct" : notLetters.includes("Χ") ? "key not" : "key"}>Χ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Ψ") ? "key near" : correctLetters.includes("Ψ") ? "key correct" : notLetters.includes("Ψ") ? "key not" : "key"}>Ψ</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Ω") ? "key near" : correctLetters.includes("Ω") ? "key correct" : notLetters.includes("Ω") ? "key not" : "key"}>Ω</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Β") ? "key near" : correctLetters.includes("Β") ? "key correct" : notLetters.includes("Β") ? "key not" : "key"}>Β</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Ν") ? "key near" : correctLetters.includes("Ν") ? "key correct" : notLetters.includes("Ν") ? "key not" : "key"}>Ν</div>
          <div onClick={(e) => addLetter(e)} className={nearLetArr.includes("Μ") ? "key near" : correctLetters.includes("Μ") ? "key correct" : notLetters.includes("Μ") ? "key not" : "key"}>Μ</div>
          <div onClick={(e) => addLetter(e)} className='key delete-key'>DELETE</div>
      </div>
    </div>
  )
}
