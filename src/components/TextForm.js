import React, { useState } from 'react'

export default function TextForm(props) {
    let [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const convertUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length > 0) {
            props.showAlert(" Converted to UpperCase!", "success")
        }
    }

    const convertLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length > 0) {
            props.showAlert(" Converted to LowerCase!", "success")
        }
    }

    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if (text.length > 0) {
            props.showAlert(" Extra spaces has been Removed!", "success")
        }
    }

    const replaceAll = () => {
        const searchValue = document.getElementById('searchValue').value;
        const newValue = document.getElementById('newValue').value;
        let newText = text.replaceAll(searchValue, newValue);
        setText(newText);
        document.getElementById('close').click()
        document.getElementById('searchValue').value = ""
        document.getElementById('newValue').value = ""
    }


    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert(" Copied to Clipboard!", "success")
    }

    const clear = () => {
        setText("");
        props.showAlert(" Text Cleared!", "success")
    }

    return (
        <>
            <div className={`container text-${props.mode == 'light' ? 'black' : 'white'}`}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows={6} onChange={handleOnChange} style={{ backgroundColor: props.mode == 'light' ? 'white' : 'rgb(3 76 98)', color: props.mode == 'dark' ? 'white' : 'black' }} />
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertUpperCase}>Convert To UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertLowerCase}>Convert To LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>

                <button disabled={text.length === 0} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Find And Replace
                </button>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ backgroundColor: props.mode == 'light' ? 'white' : 'rgb(9 55 69)', color: props.mode == 'dark' ? 'white' : 'black' }}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Find And Replace</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" id='close' aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="searchValue" className="form-label">
                                        searchValue
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="searchValue"
                                            aria-describedby="emailHelp"
                                            name='searchValue'
                                            style={{ backgroundColor: props.mode == 'light' ? 'white' : 'rgb(3 76 98)', color: props.mode == 'dark' ? 'white' : 'black' }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="newValue" className="form-label">
                                        newValue
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="newValue"
                                            name='newValue'
                                            style={{ backgroundColor: props.mode == 'light' ? 'white' : 'rgb(3 76 98)', color: props.mode == 'dark' ? 'white' : 'black' }}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={replaceAll}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clear}>Clear</button>
                <h3 className='my-3'>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h3 className='my-2'>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
