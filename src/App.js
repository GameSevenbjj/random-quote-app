import "./App.css";
import React, { useEffect, useState } from "react";


function App() {

    //Array of colors for the background and I use two methods of math to get a random color
  const backgroundColors = ["purple", "green", "pink", "orange", "yellow", "Aqua", "DarkGrey", "Gold", "LawnGreen", "Lavender", "Ivory", "LightSteelBlue", "MidnightBlue", "SandyBrown" ];
  document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
  
  
  //react hook to maintain the state of the quotes
  const [quotes, setQuotes] = useState("");
  //fetching the data from the api to get quotes
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        //Randomizes the quote selection
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };
  //Retrieves a new quote on every refresh
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div class="page-content randomBgColor">
      <div id="quote-box">
        <div id="text">
          <span id="quoteText" class="randomTxtColor">
            "{quotes.text}"
          </span>
          <br />
          <span id="author" class="randomTxtColor">
            {quotes.author}
          </span>
        </div>
        <div id="buttonBox">
          <a
            id="tweet-quote"
            target="_blank"
            href="twitter.com/intent/tweet"
            data-text="custom share text"
          >
            <i class="fa fa-twitter randomBgColor" aria-hidden="true"></i>
          </a>
          <button
          //Gives the button functionality, so everytime its click it changes the quote
            onClick={() => {
              getQuote();
            }}
            id="new-quote"
            class="cta randomBgColor"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
