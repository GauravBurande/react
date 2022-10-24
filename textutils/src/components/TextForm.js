import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log('on change');
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // text = 'new text' --> wrong way to set the text
    // setText('new text');    // CORRECT WAY
    return (
    <>
    <h1>{props.heading}</h1>
      <div>
          <div className="mb-3 my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
    </>
  );
}

