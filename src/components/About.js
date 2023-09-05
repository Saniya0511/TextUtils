import React from 'react'

export default function About(props) {
    let mystyle = {
        color : props.mode === 'dark'?'white':'black',
        backgroundColor : props.mode === 'light'?'white':'rgb(3 76 98)'
    }
    return (
        <>
        <div className={`container text-${props.mode == 'light' ? 'black' : 'white'}`}>
        <h1>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={mystyle}
                        >
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={mystyle}>
                        We provide free tools to help you with your daily tasks. You will find tools for converters, tools for handling text, such as UpperCase to LowerCase, LowerCase To UpperCase, Copy text, Remove extra spaces and many others.
                        TextUtils gives you a way to analyze your text quickly and efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={mystyle}
                        >
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={mystyle}>
                             TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtiles reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={mystyle}
                        >
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={mystyle}>
                            This word counter software works in any web browsers such as Chrome , Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document, essays, etc
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
