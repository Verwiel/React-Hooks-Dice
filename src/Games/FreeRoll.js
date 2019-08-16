import React from "react";
import { useGameDice } from "../Hooks/useGameDice";
import '../Styles/App.css'

// Styling for Dice
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faDiceOne,
//   faDiceTwo,
//   faDiceThree,
//   faDiceFour,
//   faDiceFive,
//   faDiceSix
// } from "@fortawesome/free-solid-svg-icons";

function FreeRoll() {
  const [state, api] = useGameDice(5);
  const { diceValue } = state;

  // Picking right Die image for #
  // const getDiceClassName = useCallback(value => {
  //   switch (value) {
  //     case 1:
  //       return faDiceOne;
  //     case 2:
  //       return faDiceTwo;
  //     case 3:
  //       return faDiceThree;
  //     case 4:
  //       return faDiceFour;
  //     case 5:
  //       return faDiceFive;
  //     default:
  //       return faDiceSix;
  //   }
  // }, []);

  return (
    <section className="App">
      <div>
        <article className="Dice">
          {diceValue &&
            diceValue.map((value, index) => (
              <div key={`dice-${index}`}>
                <p>{value}</p>
              </div>
              // Display Die Image
              // <FontAwesomeIcon
              //   key={`dice-${index}`}
              //   className="diceApp__dice"
              //   icon={getDiceClassName(value)}
              // />
            ))}
        </article>
        <article>
          <button onClick={api.rollDice}>
            <strong>Roll </strong>
          </button>
          <button onClick={api.resetDice}>
            <strong>Reset </strong>
          </button>
        </article>
      </div>
    </section>
  );
}

export default FreeRoll;