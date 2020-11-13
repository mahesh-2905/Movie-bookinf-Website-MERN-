import React from 'react';
import {Link} from 'react-router-dom'
import './upmovie_header.css';


const UM_Header = ()=>{

    return(
        // 
        <div className="container p-0 mt-5">
            <nav className="navbar upm_header p-0">
                <h1 className="navbar-brand">Upcoming Movies</h1>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item showmore">
                        <Link className="nav-link showmore_link" to="movies/upcoming">Show More</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default UM_Header;