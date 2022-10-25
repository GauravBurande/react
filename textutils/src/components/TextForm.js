import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log('on change');
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');
    // text = 'new text' --> wrong way to set the text
    // setText('new text');    // CORRECT WAY


    return (
    <>
    <div className="container">
    <h1 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>
      <div>
            <div className="mb-3 my-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            </div>
            <button className={`btn btn-primary mx-1 text-${props.mode}`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-primary mx-1 text-${props.mode}`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className={`btn btn-primary mx-1 text-${props.mode}`} onClick={handleClearClick}>Clear text</button>
            <button className={`btn btn-primary mx-1 text-${props.mode}`} onClick={handleCopy}>Copy text</button>
            <button className={`btn btn-primary mx-1 text-${props.mode}`} onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
    </div>

    <div className={`container my-2 text-${props.mode === 'light'?'dark':'light'}`}>
        <h3>Your text summary</h3>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes read.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something in the text box above'}</p>
    </div>
    </>
  );
}

