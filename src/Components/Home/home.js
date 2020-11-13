import React from 'react'
import Header from '../Header/header'
import MovieCarousel from '../Movie_Carousel/movies_carouselAPI';
import LatestMovies from './LatestMovies/latestmoviesAPI';
import UpcomingMovies from './UpcomingMovies/upcomingmoviesApi'
import Footer from '../Footer/footer';
import UserSubscription from '../UserSubscribeSection/subscribe';

const Home = ()=>{

    return(
        <React.Fragment>
            <Header/>
            <MovieCarousel/>
            <h1 className="header_quote text-center">Don't be bored ! Entertain yourself !</h1>
            <LatestMovies/>
            <UpcomingMovies/>
            <UserSubscription/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;