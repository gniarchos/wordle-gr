import React from 'react'
import { Icon } from '@iconify/react';
import { AppContext } from "../App"

export default function Navbar() {

  const {lightTheme, setLightTheme} = React.useContext(AppContext)
  const [openStatistics, setOpenStatistics] = React.useState(false)
  const [openInfo, setOpenInfo] = React.useState(false)

  const pushFilterStyle  = {
    top: "0px"

  }

  function closePopup() {
    setOpenStatistics(false)
    setOpenInfo(false)
  }

  function openStatisticsPop() {
    setOpenStatistics(true)
  }

  function openInfoPop() {
    setOpenInfo(true)
  }

  function gotoGithub() {
    window.location.href='https://github.com/gniarchos/wordle-gr'
  }

  function changeTheme() {
    
    if (localStorage.getItem('lightTheme') === "false" || !localStorage.getItem('lightTheme')) {
      localStorage.setItem('lightTheme', "true")
      setLightTheme(true)
    }
    else {
      localStorage.setItem('lightTheme', "false")
      setLightTheme(false)
    }
      
  }

  const bar_progress_1 = {
    width: localStorage.getItem("firstAttemptPercent") ? `${localStorage.getItem("firstAttemptPercent")}%` : "1%"
  }

  const bar_progress_2 = {
    width: localStorage.getItem("secondAttemptPercent") ? `${localStorage.getItem("secondAttemptPercent")}%` : "1%" 
  }

  const bar_progress_3 = {
    width: localStorage.getItem("thirdAttemptPercent") ? `${localStorage.getItem("thirdAttemptPercent")}%` : "1%"
  }

  const bar_progress_4 = {
    width: localStorage.getItem("forthAttemptPercent") ? `${localStorage.getItem("forthAttemptPercent")}%` : "1%"
  }

  const bar_progress_5 = {
    width: localStorage.getItem("fifthAttemptPercent") ? `${localStorage.getItem("fifthAttemptPercent")}%` : "1%"
  }

  const bar_progress_6 = {
    width: localStorage.getItem("sixthAttemptPercent") ? `${localStorage.getItem("sixthAttemptPercent")}%` : "1%"
  }

  return (
    <div className='navbar'>
      <div className='info-git-div'>
        <Icon onClick={gotoGithub} className='git-img' icon="ant-design:github-filled" width="29" />
        <Icon onClick={openInfoPop} className='info-img' icon="eva:question-mark-circle-fill" width="30" />
      </div>
      
      <div className='nav-logo'>
        <h1 className='worlde-h1'>Wordle</h1>
        <p className='logo-subtitle'>- Greek Edition -</p>
      </div> 

      <div className='theme-stats-div'>
        <Icon onClick={changeTheme} icon="gg:dark-mode" className='theme-img' width="30" />
        <Icon onClick={openStatisticsPop} className='score-img' icon="ic:round-leaderboard" width="30" />
      </div>
      
       
      {openStatistics && <div style={pushFilterStyle} className='popup-bg'>
        <div className='popup-div'>
          <span className="close" onClick={closePopup}>&times;</span>

            <div className='popup-content' >
              <h2>Statistics</h2>
              <div className='player-info'>
                <div className='data-div'>
                  <p className='number-data'>{localStorage.getItem("games") ? localStorage.getItem("games") : "0"}</p>
                  <p className='data-subtitle'>Played</p>
                </div>
                <div className='data-div'>
                  <p className='number-data'>{localStorage.getItem("winPercent") ? parseFloat(localStorage.getItem("winPercent")).toFixed(1) : "0"} %</p>
                  <p className='data-subtitle'>Win %</p>
                </div>
                <div className='data-div'>
                  <p className='number-data'>{localStorage.getItem("currentStreak") ? localStorage.getItem("currentStreak") : "0"}</p>
                  <p className='data-subtitle'>Current Streak</p>
                </div>
                <div className='data-div'>
                  <p className='number-data'>{localStorage.getItem("bestStreak") ? localStorage.getItem("bestStreak") : "0"}</p>
                  <p className='data-subtitle'>Best Streak</p>
                </div>
              </div>
            </div>

            <div align="center">
              <h2>Guesses</h2>
            </div>
            

            <div className='attempts-wrapper'>

              <p className='number-att'>1</p>
              <div className="meter">
                <p className="bar" style={bar_progress_1}><span className='bar-number'>{localStorage.getItem("firstAttempt")}</span></p>
              </div>

            </div>

            <div className='attempts-wrapper'>
              <p className='number-att'>2</p>
              <div className="meter">
                <p className="bar" style={bar_progress_2}><span className='bar-number'>{localStorage.getItem("secondAttempt")}</span></p>
              </div>
            </div>

            <div className='attempts-wrapper'>
              <p className='number-att'>3</p>
              <div className="meter">
                <p className="bar" style={bar_progress_3}><span className='bar-number'>{localStorage.getItem("thirdAttempt")}</span></p>
              </div>
            </div>

            <div className='attempts-wrapper'>
              <p className='number-att'>4</p>
              <div className="meter">
                <p className="bar" style={bar_progress_4}><span className='bar-number'>{localStorage.getItem("forthAttempt")}</span></p>
              </div>
            </div>

            <div className='attempts-wrapper'>
              <p className='number-att'>5</p>
              <div className="meter">
                <p className="bar" style={bar_progress_5}><span className='bar-number'>{localStorage.getItem("fifthAttempt")}</span></p>
              </div>
            </div>

            <div className='attempts-wrapper'>
              <p className='number-att'>6</p>
              <div className="meter">
                <p className="bar" style={bar_progress_6}><span className='bar-number'>{localStorage.getItem("sixthAttempt")}</span></p>
              </div>
            </div>

            
            
        </div>
      </div>}

      {openInfo && <div style={pushFilterStyle} className='popup-bg'>
        <div className='popup-div info'>
          <span className="close" onClick={closePopup}>&times;</span>

          <div className='popup-content' >
            <h1>HOW TO PLAY</h1>
            <p className='game-info'>The goal of the game is to guess the word within six tries. Each guess should be a <b>valid five-letter</b> word. Hit the ENTER button to submit your guess. After each guess the color of the tiles will change to indicate how close your guess was to the answer.</p>
          </div>
          
          <div className='letters-info-container'>
            <div className='letter-wrapper'>
              <h1 className='letter-green'>Ε</h1>
              <p className='color-info'>The letter Ε is in the word and in the correct spot.</p>
            </div>
            <div className='letter-wrapper'>
              <h1 className='letter-yellow'>Λ</h1>
              <p className='color-info'>The letter Λ is in the word but in the wrong spot.</p>
            </div>
          </div>
          <div className='letter-wrapper'>
              <h1 className='letter-grey'>Α</h1>
              <p className='color-info'>The letter Α is in the word but in the wrong spot.</p>
            </div>
          </div>
      </div>}
    </div>
  )
}
