import React,{Component} from 'react';
import Header from '../Header/header';
import './customerbookings.css'


class CustomerBookings extends Component{

    constructor(){

        super()

        this.state={

        }
    }

    render(){

        return(
            <React.Fragment>
                <Header/>
                <h1 className="text-center cb-header">Customer Bookings </h1>
            </React.Fragment>
        )
    }
}

export default CustomerBookings;