import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../Home/home';
import MovieTypePage from'../MovieType page/movietypeApi';
import ScrollToTop from '../ScrollToTop/scrolltotop';
import MovieDetailsPage from '../Movie Details Page/detailsApi';
import Placebookings from '../Bookings/bookings';
import Login from '../login/login';
import MyShows from '../myShows/myshows'
import CustomerBookings from '../Admin page/customerbookings';

const Router = ()=>{

    return(

        <BrowserRouter>
           <ScrollToTop/>
           <Route exact path = '/' component={Home}></Route>
           <Route path = '/movies/:id' component={MovieTypePage}></Route>
           <Route path='/details/:id' component={MovieDetailsPage}></Route>
           <Route path = '/bookings/:id' component = {Placebookings}></Route>
           <Route path ="/login" component={Login} ></Route>
           <Route path = '/myshows' component={MyShows}></Route>
           <Route path='/customerbookings' component={CustomerBookings}></Route> 
        </BrowserRouter>

    )
}

export default Router;