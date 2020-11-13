import React ,{Component} from 'react';
import MovietypePage from './movietype';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import MovieCarousel from '../Movie_Carousel/movies_carouselAPI';
import UserSubscription from '../UserSubscribeSection/subscribe';
import LanguageFilter from '../Filters/Language/languagefilter';
import RatingsFilter from '../Filters/Ratings/ratingsfilter';
import GenreFilter from '../Filters/Genre/genrefilter';

const url = "https://movies-apis-app.herokuapp.com/movies/"
var limit = 6
class LatestMoviespageApi extends Component{

    constructor(){

        super()

        this.state={
            
            MoviesData:'',
            activePage: 1,
            totalNoOfItems: 1,
        }
    }
    

    componentDidMount(){
        var type = this.props.match.params.id;
        var movietype_url = `${url}${type}` 
        fetch(movietype_url,{method:"GET"})
        .then(res=>res.json())
        .then((data)=>{
            this.setState({
                MoviesData:data.slice(0,data.length),
                totalNoOfItems:data.length-1  
                });
        });
        sessionStorage.setItem('movietype',this.props.match.params.id);
        var movietype = sessionStorage.getItem('movietype');
        var title = movietype.toUpperCase()
        this.setState({movietype:title});
    }

    render(){

        return(
            <React.Fragment>
                <Header/>
                <div className="jumbotron jumbotron-fluid details_jumbotron">
                    <div className="container py-5">
                         
                         <h1 className="details_header text-center pb-5 m-0">{this.state.movietype} MOVIES</h1>
                         <h3 className="text-center facts_header p-4 mt-5">MOVIES DETAILS</h3>
                    </div>
                 </div>
                <MovieCarousel/>
                <h1 className="header_quote text-center">The best online source of movies !</h1>
                <div className = "container-fluid">
                    <div className="row p-2">
                        <div className="col-md-3 ">
                            <h3 className="text-center filter-header py-3 mb-0">Filters here</h3>
                            <div className=" px-3 py-2 filter-conatiner">
                                <LanguageFilter langdata={(data)=>{this.setState({MoviesData:data})}}/>
                                <RatingsFilter ratingsdata={(data)=>{this.setState({MoviesData:data})}}/>
                                <GenreFilter genredata={(data)=>{this.setState({MoviesData:data})}}/>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="movietype-conatiner">
                                <h2 className="text-center movietype-header py-3">HERE ARE YOUR {this.state.movietype} MOVIES !</h2>
                                <div className="row">
                                    <MovietypePage moviesdata = {this.state.MoviesData} activePage={this.state.activePage} limit={limit} totalNoOfItems={this.state.totalNoOfItems}
                        pageNumber={(data) => {this.setState({activePage:data})}}></MovietypePage>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <UserSubscription/>
                <Footer/>
            </React.Fragment>

        )
    }
}

export default LatestMoviespageApi