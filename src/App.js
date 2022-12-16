import "./App.css";
import React, { useEffect, useState } from "react";


function App() {
  const backgroundColors = ["purple", "green", "pink", "orange", "yellow", "Aqua", "DarkGrey", "Gold", "LawnGreen", "Lavender", "Ivory", "LightSteelBlue", "MidnightBlue", "SandyBrown" ];
  document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
  
  

  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

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
        <div id="buttonBox tweet-quote">
          <a
            id="tweet-quote"
            target="_blank"
            href="twitter.com/intent/tweet"
            data-text="custom share text"
          >
            <i class="fa fa-twitter randomBgColor tweet-quote" aria-hidden="true"></i>
          </a>
          <button
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
