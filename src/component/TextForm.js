import React,{useState} from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("")
    const upcase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const change = (event) => { 
        setText(event.target.value);
    }
    const locase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <>
            <div>
                <h1 className='text-center'>{props.title}</h1>
                <div className="mt-4 d-flex flex-column justify-content-center align-items-center col-xxl-5 col-lg-6 col-md-8 col-sm-10 mx-auto">
                    <textarea className="form-control" placeholder='enter text here..!' value={text} onChange={change}></textarea>
                </div>
                <div className='row gap-3 d-flex justify-content-center align-items-center'>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 mt-4  col-sm-1" onClick={upcase}>
                        Upper
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 mt-4  col-sm-1" onClick={locase}>
                        Lower
                    </button>
                    </div>
            </div>
        </>
    )
}
