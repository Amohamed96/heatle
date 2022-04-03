import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div>
      <input id="check" type="checkbox" />
      <label for="check">
        <svg viewBox="0 0 30 30" width="30" height="30">
          <path
            id="one"
            d="M4 10h22M4"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <path
            id="two"
            d="M4 20h22M4"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
        <div class="guide">GUIDE</div>
      </label>
      <aside>
        <div class="top">
          <p>
            Solve this puzzle by tackling the solution letter by letter. Each
            letter in your guess will give you a clue as to how close it is to
            the solution. For example
          </p>
          <div>
            <h3>Color Guide (How many letters away)</h3>
            <div class="correct"> Correct Letter</div>
            <div class="close1"> Burning: 1 letter</div>
            <div class="close2"> Very Warm: 2 letters </div>
            <div class="close3"> Warm: 3 letters </div>
            <div class="close4"> Chilly: 4-6 letters </div>
            {/* <div class="far4"> Wear A Sweater: 7 letters </div>
            <div class="far3"> Cold: 9 letters </div> */}
            <div class="far2"> Very Cold: 7-9 letters </div>
            <div class="far1"> Freezing: 10+ letters </div>
          </div>
          <img
            src="https://lh3.googleusercontent.com/pw/AM-JKLVZiI9SwHovp4uSPMHUpBZYYUsZq-PIewuxwm2efZu1TaGCD8IdFuPfj9MQhJOtedWkDc68aSAyzIHyYF5Xg-f8OhpTQ0vnQKW6tLaMt5dGxJiPOygwJ8-yeqGa5IooQ-InmUnvwfn8E3v_q6KENao=w838-h1006-no?authuser=0"
            width={"300px"}
            alt="game"
          />
          <div>
            <img
              src="images/freezing.png"
              width={"150"}
              alt="freezing challenge"
            />
            &nbsp;&nbsp;
            <img
              src="images/burning.png"
              width={"150"}
              alt="burning challenge"
            />
          </div>

          {/* <div class="correct">
            <a href="https://twitter.com/HeatleGame">TWITTER</a>
          </div> */}
        </div>
      </aside>
    </div>
  );
}

export default Navbar;
