import React from "react"
import "./HowToPlay.css"

export default function HowToPlay({ closePopup, pushFilterStyle }) {
  return (
    <div style={pushFilterStyle} className="app-popup-bg">
      <div className="app-popup-container">
        <span className="app-close-popup" onClick={closePopup}>
          &times;
        </span>

        <div className="app-popup-content">
          <h1 style={{ marginTop: "0px" }}>Πληροφορίες</h1>
          <p className="game-info-general">
            Ο στόχος του παιχνιδιού είναι να μαντέψεις τη λέξη μέσα σε{" "}
            <b>έξι</b> προσπάθειες. Κάθε μαντεψιά πρέπει να είναι μια έγκυρη
            λέξη με πέντε γράμματα. Πάτησε το κουμπί ENTER για να υποβάλεις τη
            μαντεψιά σου. Μετά από κάθε μαντεψιά, το χρώμα των πλακιδίων θα
            αλλάξει για να δείξει πόσο κοντά ήταν η μαντεψιά σου στη σωστή
            απάντηση.
          </p>
        </div>

        <>
          <div className="game-info-letter-container">
            <h1 className="game-info-letter green">Ε</h1>
            <p className="game-info-color-text">
              Το γράμμα Ε υπάρχει στη λέξη και βρίσκεται στη σωστή θέση.
            </p>
          </div>
          <div className="game-info-letter-container">
            <h1 className="game-info-letter orange">Λ</h1>
            <p className="game-info-color-text">
              Το γράμμα Λ υπάρχει στη λέξη, αλλά βρίσκεται σε λάθος θέση.
            </p>
          </div>
        </>

        <div className="game-info-letter-container">
          <h1 className="game-info-letter grey">Α</h1>
          <p className="game-info-color-text">
            Το γράμμα Α δεν υπάρχει στη λέξη σε καμία θέση.
          </p>
        </div>
      </div>
    </div>
  )
}
