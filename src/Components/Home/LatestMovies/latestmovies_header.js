import React from 'react';
import {Link} from 'react-router-dom'
import './latestmovies_header.css';

const LM_Header = ()=>{

    return(
        // 
        <div className="container p-0 mt-5">
            <nav className="navbar lt_header p-0">
                <h1 className="navbar-brand">Latest Movies</h1>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item showmore">
                        <Link className="nav-link showmore_link" to="/movies/latest">Show More</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default LM_Header;