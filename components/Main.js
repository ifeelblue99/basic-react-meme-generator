import data from "../src/data";
import React from "react";
import Meme from "../components/Meme";

export default function Main() {
  let [url, setUrl] = React.useState(
    data.memes[Math.floor(Math.random() * data.memes.length)].url
  );
  // on click
  function getNewImage() {
    setUrl(data.memes[Math.floor(Math.random() * data.memes.length)].url);
  }

  //listen for outputs
  let [up, setUp] = React.useState("type...");
  function listenUpperInput() {
    setUp(document.getElementById("input1").value);
  }
  let [bottom, setBottom] = React.useState("type...");
  function listenBottomInput() {
    setBottom(document.getElementById("input2").value);
  }

  return (
    <div className="main">
      <main>
        <div className="form">
          <input
            onChange={listenUpperInput}
            id="input1"
            type="text"
            placeholder="upper text"
          />
          <input
            onChange={listenBottomInput}
            id="input2"
            type="text"
            placeholder="bottom text"
          />
          <button onClick={getNewImage}>Get new image 🖼</button>
          <p>{url}</p>
        </div>
      </main>
      <Meme url={url} upper={up} bottom={bottom} />
    </div>
  );
}
