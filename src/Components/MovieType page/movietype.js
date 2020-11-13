import React from 'react';
import {Link} from 'react-router-dom'
import Pagination from 'react-js-pagination';
import './movietype.css';
import ReadMore from '../Readmore/readmore'


 const  renderMoviesData = (props,data)=>{
        var limit = props.limit;
        var page = props.activePage;
        data = data.slice((page - 1) * limit, (page - 1) * limit + limit);
        if(data){
            return data.map((data)=>{
                return(
                        <div className="col-md-4 col-sm-6 col-xsm-6 my-3" key={data._id}>
                             <div className="card moviecard ">
                                <div className="img">
                                    <img className="card-img-top movietypecard-img img-fluid moviecard-img" src={data.thumb[0].image} alt={data.name}/>
                                </div>
                                <div className="card-body p-2 pt-2">
                                    <p className="card-title text-center"><b>{data.name}</b></p>
                                    <p className="card-text">
                                        <ReadMore>
                                           {data.overview}
                                        </ReadMore>
                                    </p>
                                </div>
                                <div className="card-footer pb-0 ">
                                    <p className="float-left location"><i className="fa fa-clock-o mr-2" aria-hidden="true"></i>{data.duration}</p>
                                    <Link className="float-right "  id="info_link" to={`/details/${data._id}`}>More info</Link>
                                    <p className=" reviews mx-3"><i className="fa fa-star ml-4" aria-hidden="true"></i>{data.ratings}</p>
                                </div>
                            </div> 
                         </div>   
                )
            })
        }
      }



const handlePageChange = (props,pagenumber)=>{
    props.pageNumber(pagenumber);
    var data = props.moviesdata;
    renderMoviesData(props,data);
}

const LatestMoviesPage = (props)=>{
       
        return (
            
            <React.Fragment>
                <div className="row m-2">
                    {renderMoviesData(props,props.moviesdata)}
                   <div className="col-md-12 mt-3 mb-1 d-flex justify-content-between" >
                        <Pagination 
                        activePage={props.activePage}
                        itemsCountPerPage={props.limit}
                        totalItemsCount={props.totalNoOfItems}
                        pageRangeDisplayed={6}
                        onChange={(pagenumber)=> handlePageChange(props,pagenumber)}
                        itemClass="page-item"
                        linkClass="page-link"
                        />
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
 

export default LatestMoviesPage;