import React ,{Component} from 'react';
import MovieDetails from './details';
import Footer from '../Footer/footer';
import UserSubscription from '../UserSubscribeSection/subscribe'
import Cast from './castComponent/cast'

const base_url = "https://movies-apis-app.herokuapp.com/movie/"

class MovieDetailsApi extends Component{

    constructor(props){

        super()

        this.state={
            details:'',
            cast:''

        }
    }
    

    componentDidMount(){
        var movie_url = `${base_url}${this.props.match.params.id}`
        fetch(movie_url,{method:"GET"})
        .then(res=>res.json())
        .then((data)=>{
            this.setState({details:data});
            this.setState({cast:data[0].cast})
        })
    }
    render(){
        return(
            <React.Fragment>
                <MovieDetails  moviedata={this.state.details}></MovieDetails>
                <Cast castdata = {this.state.cast}></Cast>
                <UserSubscription/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default MovieDetailsApi;