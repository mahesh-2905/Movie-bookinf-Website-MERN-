import React ,{Component} from 'react';
import UpcomingMoviesHomeComponent from './upcomingmovies';

const url = "https://movies-apis-app.herokuapp.com/movies/upcoming"

class UpcomingMoviesApi extends Component{

    constructor(){
        
        super()

        this.state={
             CarouselImages:''
        }
    }

    render(){

        return(
            <UpcomingMoviesHomeComponent Images = {this.state.CarouselImages}></UpcomingMoviesHomeComponent>
        )
    }
    

    componentDidMount(){

        fetch(url,{method:"GET"})
        .then(res=>res.json())
        .then((data)=>{
            this.setState({CarouselImages:data});
        })
    }
}

export default UpcomingMoviesApi;