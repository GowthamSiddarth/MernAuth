import React from "react"
import { Link, BrowserRouter } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar-fixed">
            <nav className="z-depth-0">
                <div className="nav-wrapper white">
                    <BrowserRouter>
                        <Link to="/" style={{ fontFamily: "monospace" }} className="col s5 brand-logo center black-text">
                            <i className="material-icons">code</i>
                            MERN
                        </Link>
                    </BrowserRouter>
                </div>
            </nav>
        </div>
    )
}

export default Navbar