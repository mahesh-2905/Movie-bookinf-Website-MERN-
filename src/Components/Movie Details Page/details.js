import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header/header';
import {withRouter} from 'react-router-dom';

import './details.css';

var typeid = sessionStorage.getItem('movietype');
const MovieDetailsPage = (props)=>{
    

    const renderMovieName = ({moviedata})=>{
        if(moviedata){
            return moviedata[0].name.toUpperCase();
        }
    }
    const renderMovieLang = ({moviedata})=>{
        if(moviedata){
            return moviedata[0].languages.map((data)=>{
                return (
                    <span className="badge lang-badge badge-secondary  mx-1" key={data.name}>{data.name}</span>
                )
            })
        }
    }
    const renderMovieGenre = ({moviedata})=>{
        if(moviedata){
            return moviedata[0].genre.map((data)=>{
                return (
                    <span className="badge genre-badge  mx-1" key={data.name}>{data.name}</span>
                )
            })
        }
    }
    const renderMovieData = ({moviedata})=>{
        
        if(moviedata){
            return (
                    
                    <div className="details_section" key={moviedata[0]._id}>
                        <div className="text">
                        <h1 className="details_header text-center py-5 my-5">{renderMovieName(props)}</h1>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 my-4 ">
                                    <div className="card">
                                        <div className=" row">
                                        <div className="col-md-6 col-sm-6 item_image">
                                            <img width="100%" src={moviedata[0].thumb[0].image} className="card-img" alt="Night Life"/>
                                        </div>
                                        <div className="col-md-6 col-sm-6 ">
                                        <div className="card-body  moviedetails-body">
                                            <h1 className="card-title"><b>{moviedata[0].name}</b></h1>
                                            <p className="card-text mt-5"><span><i className="fa fa-calendar mr-2" aria-hidden="true"></i>{moviedata[0].release_date}  <i className="fa fa-clock-o mx-2" aria-hidden="true"></i>{moviedata[0].duration}</span></p>
                                            <p className="card-text">{renderMovieLang(props)}</p>
                                            <p className="card-text">{renderMovieGenre(props)}</p>
                                            <p className="card-text"><i className="fa fa-star mr-1" aria-hidden="true"></i>{moviedata[0].ratings}</p>
                                            <p className="card-text"><b>Story by : </b>{moviedata[0].description[0].Story_by}</p>
                                            <p className="card-text"><b>Actors : </b>{moviedata[0].description[0].Acotors}</p>
                                        </div>
                                        <div className="card-footer">
                                            <Link className="btn btn-danger" to={`/movies/${typeid}`}>Back</Link> &nbsp;
                                            {}
                                            <button className="btn btn-success" onClick={()=>{
                                                if(sessionStorage.getItem("login") === " " | sessionStorage.getItem("login") === undefined || !sessionStorage.getItem("login")){
                                                    props.history.push('/login');
                                                    sessionStorage.setItem('booking_id',moviedata[0]._id)
                                                }
                                                else{
                                                    props.history.push(`/bookings/${moviedata[0]._id}`)
                                                }
                                            }}>Book Ticket</button>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-4 ">
                                    <iframe width='90%' height='310px' src={moviedata[0].trailer} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' title={moviedata.name} allowFullScreen></iframe>
                                </div>
                            </div>
                        </div> 
                    </div>   
            )
        }
    }

        return(

            <React.Fragment>
                 <Header/>
                 <div className="jumbotron jumbotron-fluid details_jumbotron">
                    <div className="container py-5">
                         <h3 className="text-center facts_header p-4 mt-5">FACTS & INFO</h3>
                         <h1 className="details_header text-center pb-5 m-0">MOVIE DETAILS</h1>
                    </div>
                 </div>
                 <div className="links">
                     <button className="btn link"><Link to ="/" className="nav_link">Home</Link></button>
                     <button className="btn link"><Link to = "/movies/latest" className="nav_link">Latest Movies</Link></button>
                     <button className="btn link"><Link to = "/movies/upcoming" className="nav_link">Upcoming Movies</Link></button>
                 </div>
                 {renderMovieData(props)}
                 
            </React.Fragment>
        )
    }


export default withRouter(MovieDetailsPage)