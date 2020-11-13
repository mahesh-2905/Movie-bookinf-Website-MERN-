import React , {Component} from 'react';
import Header from '../Header/header';
import MyShowsDisplay from './myshowsDisplay';
import './myshows.css'

const url = 'https://movies-apis-app.herokuapp.com/bookings/'
class MyShows extends Component{


    constructor(){

        super()
        this.state={
             myshows:''
        }
    }
    componentDidMount(){
        var myshows_url = `${url}${sessionStorage.getItem("login").split(" ")[0]}`
        fetch(myshows_url,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({myshows:data})
        })
    }

    render(){
         
        return(
            <React.Fragment>
                <Header/>
               <h1 className="text-center myshows-header">BOOKINGS SUMMARY</h1>
               <MyShowsDisplay data={this.state.myshows}/>
            </React.Fragment>
        )
    }
}

export default MyShows;