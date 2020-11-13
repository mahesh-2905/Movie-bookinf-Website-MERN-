import React from 'react';
import {Link ,withRouter} from 'react-router-dom';
import firebase from "firebase"
import './header.css'
const Header = ( props)=>{

    const renderHeader = ()=>{
        sessionStorage.getItem("login")
        if(sessionStorage.getItem("login")===''||sessionStorage.getItem("login")===undefined || !sessionStorage.getItem("login")){
            return(
                <React.Fragment>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-5">
                            <Link className="nav-link" to="/login"><i className="fa fa-user-circle-o mr-2" aria-hidden="true"></i>Login</Link>
                        </li>
                    </ul>
                </React.Fragment>
                    
            )
        }
        else if(sessionStorage.getItem("login") ==='Mahesh Kumar Genugula' || sessionStorage.getItem("login")==='Genugula Mahehs kumar'){
            return(
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item  dropdown mr-5">
                            <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome Administator !
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to = '/addmovies' className="nav-link"><i class="fa fa-plus mr-2" aria-hidden="true"></i>Add Cinema</Link>
                                <Link to = '/customerbookings' className="nav-link"><i class="fa fa-user-o mr-2" aria-hidden="true"></i>Customer Bookings</Link>
                                <Link className="dropdown-item nav-link sign-out-btn"  onClick={()=> {firebase.auth().signOut();sessionStorage.removeItem("login");sessionStorage.removeItem("booking_id");props.history.push('/')}}><i className="fa fa-sign-in mr-2" aria-hidden="true"></i>Sing out</Link>
                            </div>
                        </li>
                    </ul>
                
            )
        }
        else{
            return(
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to = '/myshows' className="nav-link">My shows</Link>
                        </li>
                        <li className="nav-item  dropdown mr-5">
                            <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {sessionStorage.getItem("login").split(" ")[0]}
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <button className="dropdown-item btn sign-out-btn"  onClick={()=> {firebase.auth().signOut();sessionStorage.removeItem("login");sessionStorage.removeItem("booking_id");props.history.push('/')}}><i className="fa fa-sign-in mr-2" aria-hidden="true"></i>Sing out</button>
                            </div>
                        </li>
                    </ul>
            )
            
        }
    }
    
    return(
       <React.Fragment>
           <nav className="navbar navbar-expand-lg fixed-top">
            <Link className="navbar-brand" to="/">
                <img src="/images/logo.png" alt="Movie masti.com"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#moviesNav">
                <i className="fa fa-bars fa-1x" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="moviesNav">
                    {renderHeader()}
            </div>
            </nav>
       </React.Fragment>

    )
}


export default withRouter(Header) ;