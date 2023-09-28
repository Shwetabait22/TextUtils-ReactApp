import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked");
    //UpperCase
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("converted to UpperCase!","success")
  };

  const handleLowClick = () => {
    //LowerCase
    let newText = text.toLowerCase();
    setText(newText);

    props.showAlert("converted to LowerCase!","success")
  };

  const handleSpeakClick = () => {
    //Speak
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);

    props.showAlert("Converted to speak!","success")
  };

  const handlecapClick = () => {
    //1st letter capital
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);

    props.showAlert("converted to Capitalized!","success")
  };

  const handleCopyClick = () => {
    //copy text
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

    props.showAlert("converted to Copy Text!","success")
  };

  const handleExtraSpace = () => {
    //Remove extra space
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showAlert("Removed Extra-spaces","success")
  };

  const handleOnChange = (event) => {
    //console.log("OnChange");
    setText(event.target.value);
  };
  
  const [text, setText] = useState(" ");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#d2d3db':'white',fontSize:'20px', border: props.mode==='dark'?'4px solid white':'1px solid black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpeakClick}>
          Speak
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecapClick}>
          capitalize case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charaters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter somthing in the TextBox above to preview it here"}</p>
      </div>
      </div>
    </>
  );
}
