import React ,{Component} from 'react';
import MovieCarousel from './movie_carousel';

const url = "https://movies-apis-app.herokuapp.com/movies/latest"


class MovieCarouselApi extends Component{

    constructor(){

        super()

        this.state={

            Images:''
        }
    }
    
    componentDidMount(){

        fetch(url,{method:'GET'})
        .then(res=>res.json())
        .then((data)=>{
            this.setState({Images:data});
        })
    }

    render(){

        return(
            <MovieCarousel Images={this.state.Images}></MovieCarousel>
        )
    }
}

export default MovieCarouselApi;