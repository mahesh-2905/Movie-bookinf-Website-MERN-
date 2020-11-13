import React,{Component} from 'react';
import './subscribe.css';



class UserSubscription extends Component{

    constructor(){

        super()

        this.state={

        }
    }

    render(){
         

        return(
            
            <React.Fragment>
                <div className="container-fluid subscription_section">
                    <h1 className=" text-center  header_quote mb-5" id="subscription_header">News Letter</h1>
                    <h5 className="d-flex justify-content-center text my-5">Enter your email address to receive all news, updates on new arrivals, special offers and other discount information.</h5>
                    <div className="form-group details  row">
                        <div className=" mx-4">
                           <input type="email" id="subs_email" className="form-control mt-3" name="subs_email" placeholder="Enter your mail"/>
                        </div>
                        <button type="submit" id="submit" className="btn mx-4 my-3">Submit</button>
                    </div>
                </div>
                
            </React.Fragment>
        )
        
    }
}


export default UserSubscription;