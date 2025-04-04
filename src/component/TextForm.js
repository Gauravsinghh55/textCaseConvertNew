import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("")

    const upcase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const change = (e) => {
        setText(e.target.value);
    }

    const locase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clear = () => {
        let newText = '';
        setText(newText);
    }

    const copy = () => {
        navigator.clipboard.writeText(text);
        alert("Text Copied to Clipboard")
    }

    return (
        <>
            <div className='container' >

                <h1 className={`text-center text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.title}</h1>

                <div className=" mt-4 d-flex flex-column justify-content-center align-items-center col-xxl-5 col-lg-6 col-md-8 col-sm-10 mx-auto ">
                    <textarea className="form-control" placeholder='enter text here..!' value={text} onChange={change} style={{ backgroundColor: props.mode === 'dark' ? '#adb5bd' : 'white', color: props.mode === 'dark' ? 'white' : 'dark' }}></textarea>
                </div>

                <div className="row d-flex justify-content-center align-items-center flex-wrap gap-3 mt-3">
                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg px-4 mt-2 text-nowrap"
                            onClick={upcase}
                        >
                            Upper
                        </button>
                    </div>
                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg px-4 mt-2 text-nowrap"
                            onClick={locase}
                        >
                            Lower
                        </button>
                    </div>
                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg px-4 mt-2 text-nowrap"
                            onClick={clear}
                        >
                            Clear
                        </button>
                    </div>
                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg px-4 mt-2 text-nowrap"
                            onClick={() => navigator.clipboard.writeText(text)}
                        >
                            Copy
                        </button>

                    
                    
                    
                </div>


                <div className={`container text-center mt-3 color-${props.mode === 'dark' ? 'dark' : 'light'}`}>
                    <h3 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Text summary</h3>
                    <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text.split(" ").length} words and {text.length} characters</p>
                    <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{0.008 * text.split(" ").length} Minute Read Time</p>
                    <h3 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Preview</h3>
                    <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text}</p>
                </div>

            </div>
        </div>
        </>
    )
}