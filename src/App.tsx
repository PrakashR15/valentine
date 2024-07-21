import { useState } from "react";
import "./App.css";

const phrase = [
  "No",
  "yes solu😡",
  "Poo d punda please👉👈",
  "I'll kiss u daily",
  "Ferarri merch vangi thare😘",
  "avalo thimuraa😏",
  "onakaga elame panre❤",
  "onaya um panre🥰",
  "saraku vangi thare🍻",
  "kolantha ah alaya vidura🥹",
  "sooru vangi thare🥰",
  "I identify myself as women ipa🫣",
  "nanu lesbian ah marirueen🙈",
  "yes solu punda😤",
  "ilana onaya kadathiruven",
  "vida matenes solra varikum",
  "ipidi ah kenja viduva",
  "onna vita enaku yaru irukaaaaa",
  "veetuku vanthu appa ta pesuven",
  "onaya konduven",
  "ithu set agathu nerla vanthu thookitu vanthurueen",
  "beg you pleaseee",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrase[Math.min(noCount, phrase.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">YAYYYYYY!! </div>
          <div className="text">INIMEL NEE THA EAN </div>
          <div className="text">PONDATI </div>
          <div className="text">ATHA THADUKURAVAN THALI LA MANVETTI </div>
        </>
      ) : (
        <>
          <img
            alt="bear with flowers"
            src="http://media.tenor.com/2xHbZ6Z8wqEAAAAd/bear-with-flowers.gif"
          />

          <div>Will you be my Valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
