import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Clicked")
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter the text to Analyse"); // text is the state variable and setText is the function that will update the state variable
  return (
    <div className="container my-3">
        <h1>{props.heading}</h1>
            <div className="form-group">
           <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button className="btn btn-primary my-4" onClick={handleUpClick}>Capitalise</button>
    </div>
  )
}


