import React from "react"
import "./HowToPlay.css"

export default function HowToPlay({ closePopup, pushFilterStyle }) {
  return (
    <div style={pushFilterStyle} className="app-popup-bg">
      <div className="app-popup-container info">
        <span className="app-close-popup" onClick={closePopup}>
          &times;
        </span>

        <div className="app-popup-content">
          <h1>HOW TO PLAY</h1>
          <p className="game-info-general">
            The goal of the game is to guess the word within six tries. Each
            guess should be a <b>valid five-letter</b> word. Hit the ENTER
            button to submit your guess. After each guess the color of the tiles
            will change to indicate how app-close-popup your guess was to the
            answer.
          </p>
        </div>

        <>
          <div className="game-info-letter-container">
            <h1 className="game-info-letter green">Ε</h1>
            <p className="game-info-color-text">
              The letter Ε is in the word and in the correct spot.
            </p>
          </div>
          <div className="game-info-letter-container">
            <h1 className="game-info-letter orange">Λ</h1>
            <p className="game-info-color-text">
              The letter Λ is in the word but in the wrong spot.
            </p>
          </div>
        </>

        <div className="game-info-letter-container">
          <h1 className="game-info-letter grey">Α</h1>
          <p className="game-info-color-text">
            The letter Α is not in the word in any spot.
          </p>
        </div>
      </div>
    </div>
  )
}
