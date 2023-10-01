import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark mx-2 px-2 navbar container-fluid">
                <Link className="navbar-brand navbarbrand" to="/">Rajan </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" style={{ display: 'none' }}> <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/general">General</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link> </li>
                    </ul>                   
                </div>
            </nav>
        </div>
    )

}

export default NavBar