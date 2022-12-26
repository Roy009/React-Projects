import React, { useState } from 'react'

export default function TextFroms(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleLowClick = () => {
        setText(text.toLowerCase())
    }
    const handleClearClick = () => {
        setText("")
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleCopy = () => {
        const text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    return (
        <>
            <div className='container'style={{color: props.mode ==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode === 'dark' ? 'text-light' : 'text-dark'}}></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'dark' ? 'dark':'primary'} mx-1`} onClick={handleLowClick}>Convert to lower case</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'dark':'primary'} mx-1`} onClick={handleClearClick}>Clear text</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'dark':'primary'} mx-1`} onClick={handleUpClick}>Convert to upper case</button>
                <button className={`btn btn-${props.mode === 'dark' ? 'dark':'primary'} mx-1`} onClick={handleCopy}>Copy text</button>

            </div>
            <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Can be read in {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'You have not entered any text'}</p>
            </div>
        </>
    )
}
