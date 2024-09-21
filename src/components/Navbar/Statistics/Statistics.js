import React from "react"
import "./Statistics.css"

export default function Statistics({ closePopup, pushFilterStyle }) {
  const bar_progress_1 = {
    width: localStorage.getItem("firstAttemptPercent")
      ? `${localStorage.getItem("firstAttemptPercent")}%`
      : "1%",
  }

  const bar_progress_2 = {
    width: localStorage.getItem("secondAttemptPercent")
      ? `${localStorage.getItem("secondAttemptPercent")}%`
      : "1%",
  }

  const bar_progress_3 = {
    width: localStorage.getItem("thirdAttemptPercent")
      ? `${localStorage.getItem("thirdAttemptPercent")}%`
      : "1%",
  }

  const bar_progress_4 = {
    width: localStorage.getItem("forthAttemptPercent")
      ? `${localStorage.getItem("forthAttemptPercent")}%`
      : "1%",
  }

  const bar_progress_5 = {
    width: localStorage.getItem("fifthAttemptPercent")
      ? `${localStorage.getItem("fifthAttemptPercent")}%`
      : "1%",
  }

  const bar_progress_6 = {
    width: localStorage.getItem("sixthAttemptPercent")
      ? `${localStorage.getItem("sixthAttemptPercent")}%`
      : "1%",
  }
  return (
    <div style={pushFilterStyle} className="app-popup-bg">
      <div className="app-popup-container">
        <span className="app-close-popup" onClick={closePopup}>
          &times;
        </span>

        <div className="app-popup-content">
          <h2 style={{ marginTop: "0px" }}>Statistics</h2>
          <div className="statistics-player-info">
            <div className="statistics-player-data">
              <p className="statistics-player-numbers">
                {localStorage.getItem("games")
                  ? localStorage.getItem("games")
                  : "0"}
              </p>
              <p className="statistics-data-subtitle">Played</p>
            </div>
            <div className="statistics-player-data">
              <p className="statistics-player-numbers">
                {localStorage.getItem("winPercent")
                  ? parseFloat(localStorage.getItem("winPercent")).toFixed(1)
                  : "0"}{" "}
                %
              </p>
              <p className="statistics-data-subtitle">Win %</p>
            </div>
            <div className="statistics-player-data">
              <p className="statistics-player-numbers">
                {localStorage.getItem("currentStreak")
                  ? localStorage.getItem("currentStreak")
                  : "0"}
              </p>
              <p className="statistics-data-subtitle">Current Streak</p>
            </div>
            <div className="statistics-player-data">
              <p className="statistics-player-numbers">
                {localStorage.getItem("bestStreak")
                  ? localStorage.getItem("bestStreak")
                  : "0"}
              </p>
              <p className="statistics-data-subtitle">Best Streak</p>
            </div>
          </div>
        </div>

        <div align="center">
          <h2>Guesses</h2>
        </div>

        <div className="statistics-attempts-wrapper">
          <p>1</p>
          <div className="statistics-bar-container">
            <p className="statistics-bar" style={bar_progress_1}>
              <span className="statistics-bar-number">
                {localStorage.getItem("firstAttempt")}
              </span>
            </p>
          </div>
        </div>

        <div className="statistics-attempts-wrapper">
          <p>2</p>
          <div className="statistics-bar-container">
            <p className="statistics-bar" style={bar_progress_2}>
              <span className="statistics-bar-number">
                {localStorage.getItem("secondAttempt")}
              </span>
            </p>
          </div>
        </div>

        <div className="statistics-attempts-wrapper">
          <p>3</p>
          <div className="statistics-bar-container">
            <p className="statistics-bar" style={bar_progress_3}>
              <span className="statistics-bar-number">
                {localStorage.getItem("thirdAttempt")}
              </span>
            </p>
          </div>
        </div>

        <div className="statistics-attempts-wrapper">
          <p>4</p>
          <div className="statistics-bar-container">
            <p className="statistics-bar" style={bar_progress_4}>
              <span className="statistics-bar-number">
                {localStorage.getItem("forthAttempt")}
              </span>
            </p>
          </div>
        </div>

        <div className="statistics-attempts-wrapper">
          <p>5</p>
          <div className="statistics-bar-container">
            <p className="statistics-bar" style={bar_progress_5}>
              <span className="statistics-bar-number">
                {localStorage.getItem("fifthAttempt")}
              </span>
            </p>
          </div>
        </div>

        <div className="statistics-attempts-wrapper">
          <p>6</p>
          <div className="statistics-bar-container">
            <p className="statistics-bar" style={bar_progress_6}>
              <span className="statistics-bar-number">
                {localStorage.getItem("sixthAttempt")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
