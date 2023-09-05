import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode == 'light' ? 'dark' : 'white'}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        TextUtils
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch d-flex flex-row-reverse">
                        <label htmlFor="" className={`text-${props.mode == 'light' ? 'dark' : 'light'}`}> Enable DarkMode</label>
                        <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
                    </div>
                    </div>
                </div>
            </nav>

        </>

    )
}
