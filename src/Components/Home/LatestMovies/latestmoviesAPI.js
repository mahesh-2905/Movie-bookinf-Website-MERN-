import React ,{Component} from 'react';
import LatestMoviesHomeComponent from './latestmovies';

const url = "https://movies-apis-app.herokuapp.com/movies/latest"

class MovieCarouselApi extends Component{

    constructor(){
        
        super()

        this.state={
             CarouselImages:''
        }
    }

    render(){

        return(
            <LatestMoviesHomeComponent Images = {this.state.CarouselImages}></LatestMoviesHomeComponent>
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

export default MovieCarouselApi;