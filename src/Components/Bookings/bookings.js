import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer/footer';
import './bookings.css';
const url = "https://movies-apis-app.herokuapp.com/movie/"


class Placebookings extends Component{

    constructor(props){

        super()

        this.state={
           fullname:'',
           phno:'',
           mail:'',
           date:'',
           persons:'',
           time:'',
        }
        this.handeldate = this.handeldate.bind(this);
        this.handelmail = this.handelmail.bind(this);
        this.handelpersons = this.handelpersons.bind(this);
        this.handeltime = this.handeltime.bind(this);
        this.handelphno = this.handelphno.bind(this);
        this.handleState = this.handleState.bind(this)
    }
    
    componentDidMount(){
        if(sessionStorage.getItem("login")){
            this.setState({fullname:sessionStorage.getItem('login').split(" ")[0]})
        }
        var rurl = `${url}${this.props.match.params.id}`;
        fetch(rurl, {method:"GET"})
        .then(res=>res.json())
        .then((data)=>{
            this.setState(
                {
                    name:data[0].name,
                    thumb:data[0].thumb[0].image,
                    release_date:data[0].release_date,
                    duration:data[0].duration,
                    overview:data[0].overview,
                    ratings:data[0].ratings,
                    story_by:data[0].description[0].Story_by,
                    actors:data[0].description[0].Acotors}
                 )
        })
    }
     
    handeldate(event){
       this.setState({date:event.target.value})
    }
     handelphno(event){
        this.setState({phno:event.target.value})
     }
     handelmail(event){
        this.setState({mail:event.target.value})
     }
     handelpersons(event){
        this.setState({persons:event.target.value})
     }
     handeltime(event){
        this.setState({time:event.target.value})
     }
     handleState(){
         var purl = "https://movies-apis-app.herokuapp.com/bookings";
         var id = Math.floor(Math.random()*10000);
         var data = {
            _id : id,
            name : this.state.name,
            fullname : this.state.fullname,
            email : this.state.mail,
            phno : this.state.phno,
            persons:this.state.persons,
            date:this.state.date,
            time:this.state.time
        }
         fetch(purl,{
             method:"POST",
             headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(this.props.history.push('/myshows'));

     }
    render(){

        return(
            <React.Fragment>

                    <div className="bookings_banner">
                        <div className="bookings_banner-info">
                            <div className="bookings_banner-info-links">
                                <h1 id='bookings-heading' className="mb-5">PLACE YOUR SEAT NOW !</h1>
                                <Link to='/' id="home-link" className="my-5">Home </Link><span id="pyo">/ Place your seat</span>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5 bookings-container">
                        <div className="row">
                            <div className="col-md-4">
                               <div className="card card-bookings-body">
                                   <img className="card-img-top booking-img" src={this.state.thumb} alt={this.state.name}/>
                                   <div className="card-body  p-2  text-left">
                                        <div className="quicksearch_header">
                                          <h4 className="card-title text-center pt-2">{(this.state.name)}</h4>
                                        </div>
                                        <div className="mt-4">
                                            <p className="card-text mt-5"><i className="fa fa-calendar mr-2" aria-hidden="true"></i>{this.state.release_date} </p>
                                            <p className="card-text"><i className="fa fa-clock-o mr-2" aria-hidden="true"></i>{this.state.duration}</p>
                                            <p className="card-text"><i className="fa fa-star mr-2" aria-hidden="true"></i>{this.state.ratings}</p>
                                            <p className="card-text"><b>Story by : </b>{this.state.story_by}</p>
                                            <p className="card-text"><b>Actors : </b>{this.state.actors}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="quicksearch_header">
                                    <h1 className="card-title pt-2 text-right">Place Your Seat</h1>
                                    <div className="row">
                                        <div className="col-md-12 my-2">
                                           <input type="text" name=""  className="form-control bookings-form" id="bookings-form-read"  value={(this.state.name) || ''} readOnly/>
                                        </div>
                                        <div className="col-md-6 my-2">
                                           <input type="text" name=""  className="form-control bookings-form"  value={(this.state.fullname) || ''}  readOnly/>
                                        </div>
                                        <div className="col-md-6 my-2">
                                           <input type="text" name=""  className="form-control bookings-form" onChange={this.handelphno} value={(this.state.phno) || ''} placeholder="PHONE NUMBER"/>
                                        </div>
                                            <div className="col-md-6 my-2">
                                           <input type="text" name=""  className="form-control bookings-form" onChange={this.handelmail} value={(this.state.mail) || ''} placeholder="EMAIL"/>
                                        </div>
                                        <div className="col-md-6 my-2">
                                           <input type="date" name=""  className="form-control bookings-form" onChange={this.handeldate} value={(this.state.date) || ''} />
                                        </div>
                                        
                                        <div className="col-md-6 my-2">
                                          <select className="form-control bookings-form" onChange={this.handelpersons} value={(this.state.persons) || ''} name="" >
                                            <option>NUMBER OF PERSONS</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="7">6</option>
                                            <option value="7">7</option>
                                          </select>
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <select className="form-control bookings-form" onChange={this.handeltime} value={(this.state.time) || ""} name="" >
                                                <option>Select Show Timings</option>
                                                <option value="09:00 am">09:00 am</option>
                                                <option value="12:00 pm">12:00 pm</option>
                                                <option value="03:00 pm">03:00 pm</option>
                                                <option value="6:00 pm">6:00 pm</option>
                                                <option value="9:00 pm">9:00 pm</option>
                                                <option value="12:00 am">12:00 am</option>
                                            </select>
                                        </div>
                                     </div> 
                                     <button className="btn btn-success m-2 btn-block" onClick={this.handleState}>Place your seat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
            </React.Fragment>

        )
    }
}

export default Placebookings;