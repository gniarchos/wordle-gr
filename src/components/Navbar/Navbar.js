import React, { useContext, useState } from "react"
import { Icon } from "@iconify/react"
import { AppContext } from "../../App"
import "./Navbar.css"
import Statistics from "./Statistics/Statistics"
import HowToPlay from "./HowToPlay/HowToPlay"

export default function Navbar() {
  const { setLightTheme } = useContext(AppContext)
  const [openStatistics, setOpenStatistics] = useState(false)
  const [openInfo, setOpenInfo] = useState(false)

  const pushFilterStyle = {
    top: "0px",
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

  function changeTheme() {
    if (
      localStorage.getItem("lightTheme") === "false" ||
      !localStorage.getItem("lightTheme")
    ) {
      localStorage.setItem("lightTheme", "true")
      setLightTheme(true)
    } else {
      localStorage.setItem("lightTheme", "false")
      setLightTheme(false)
    }
  }

  return (
    <div className="navbar-wrapper">
      <div className="navbar-info-git">
        <a target="_blank" href="https://github.com/gniarchos/wordle-gr">
          <Icon className="navbar-git-img" icon="ant-design:github-filled" />
        </a>

        <Icon
          onClick={openInfoPop}
          className="navbar-info-img"
          icon="eva:question-mark-circle-fill"
        />
      </div>

      <div className="navbar-logo-container">
        <h1 className="navbar-wordle-logo">Wordle</h1>
        <p className="navbar-logo-subtitle">- Greek Edition -</p>
      </div>

      <div className="navbar-theme-stats">
        <Icon
          onClick={changeTheme}
          icon="gg:dark-mode"
          className="navbar-theme-img"
        />
        <Icon
          onClick={openStatisticsPop}
          className="navbar-score-img"
          icon="ic:round-leaderboard"
        />
      </div>

      {openStatistics && (
        <Statistics closePopup={closePopup} pushFilterStyle={pushFilterStyle} />
      )}

      {openInfo && (
        <HowToPlay closePopup={closePopup} pushFilterStyle={pushFilterStyle} />
      )}
    </div>
  )
}
