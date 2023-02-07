import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () =>{
    //console.log("Uppercase was clicked");
    let newTxt = text.toUpperCase();
    setText(newTxt);
  }

  const handleLoClick = () =>{
    //console.log("Lowercase was clicked");
    let newTxt = text.toLowerCase();
    setText(newTxt);
  }

  const handleCopyClick = () => {
    //console.log("Lowercase was clicked");
    let newTxt = text;
    let textmsg = 'Text copied the clipboard';
    console.log(newTxt);
    // Copy the text inside the text field
    navigator.clipboard.writeText(text);
    setText1(textmsg);

  }

  const handleClearClick = () =>{
    //console.log("Uppercase was clicked");
    let newTxt = '';
    setText(newTxt);
  }

  const handleOnChange = (event) =>{
    //console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  const [textmsg, setText1] = useState("");
  //text="new text"; //wrong way to change text
  //setText("new Text"); //Correct way to change the text
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to Clipboard</button>
      </div>
      <div className="containe my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(function(num) { return num !== '' }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Mintues Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <p>{textmsg}</p>
      </div>
    </>
    
  )
}
