import React from "react";

export default function Main(props) {
  return (
    <div className="image-holder">
      <img alt="meme_image" id="meme-image" src={props.url} />
      <p id="upper-text">{props.upper}</p>
      <p id="bottom-text">{props.bottom}</p>
    </div>
  );
}
