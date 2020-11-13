import React from 'react';
import LMHeader from './latestmovies_header';
import {Link} from 'react-router-dom'
import '../movietypecommon.css';

const HomeLatestMovies = (props)=>{
   

            

  
  

  const renderLatestCarousel = ({Images})=>{
           
     if(Images){
       return Images.slice(0,4).map((data)=>{

           return(
                <div className="col-md-3 col-sm-6 col-xsm-6 my-2" key={data._id}>
                    <div className="card moviecard ">
                      <div className="img">
                          <img className="card-img-top img-fluid moviecard-img" src={data.thumb[0].image} alt={data.name}/>
                      </div>
                        <div className="card-body p-0 pt-2">
                          <p className="card-title text-center"><b>{data.name}</b></p>
                        </div>
                        <div className="card-footer pb-0">
                          <p className="float-left location"><i className="fa fa-clock-o mr-2" aria-hidden="true"></i>{data.duration}</p>
                          <p className="float-right reviews"><i className="fa fa-star mr-1" aria-hidden="true"></i>{data.ratings}</p>
                        </div>
                        <div className="show_details">
                          <h3 className="mt-5 text-center text-light"><b>Watch trailer</b></h3><br/>
                          <div className="show-trailer">
                            <p>
                            <i className="fa fa-play-circle fa-3x" aria-hidden="true"  data-toggle="modal" data-target={`#target${data._id}`}></i>
                            </p>
                          </div>
                          <Link className="info_link text-center d-flex justify-content-center" to={`/details/${data._id}`} ><i className="fa fa-link mr-2 fa-2x" id="fa-link"></i><b>More Info</b></Link>
                        </div>
                        <div className="modal fade trailer-modal" id={`target${data._id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content">
                            <div className="modal-body  p-0" id="trailer-body">
                                <iframe width='800px' height='1700px' src={data.trailer} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' title={data.name}  allowFullScreen></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
           )
       })
     }
  }
            return (
              <React.Fragment>
                <LMHeader></LMHeader>
                <div className="movie_carousel movies_section">
                  <div className="container">
                    <div className="row">
                    {renderLatestCarousel(props)}
                    </div>
                  </div>
                </div>
            </React.Fragment>
            );
          }



export default HomeLatestMovies;