import React, { Component } from "react"
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './login.css'

firebase.initializeApp({
  apiKey: "AIzaSyAqJkCubqLrHAN3yu3ap56GOrQ3dze-dP0",
  authDomain: "movies-booking-oauth.firebaseapp.com"
})

class Login extends Component {

  constructor(){

    super()
    this.state={
      isSignedIn: false 
    }
    this.renderIsSignedIn = this.renderIsSignedIn.bind(this);
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }
  componentDidUpdate(){

    if(this.state.isSignedIn){
      if(sessionStorage.getItem("booking_id")){
        return this.props.history.push(`/bookings/${sessionStorage.getItem("booking_id")}`)
      }
      else{
        return(
          this.props.history.push('/')
        )
      }
    }
    
  }

  renderIsSignedIn(){
    if(this.state.isSignedIn){
      sessionStorage.setItem("login",firebase.auth().currentUser.displayName)
    }
    else{
      return(
            <div className=" login-container container">
                  <div className="row  ">
                      <div className="col-md-6 d-flex justify-content-center">
                          <div className="logo-section">
                                <img src="/images/logo.png" className="logo-banner-img img-fluid" alt="movie mast.com"/>
                          </div>
                      </div>
                      <div className="col-md-6  d-flex justify-content-center">
                          <div className="sign-options">
                            <StyledFirebaseAuth uiConfig={this.uiConfig}  firebaseAuth={firebase.auth()}/>
                          </div>
                      </div>
                  </div>
              </div>
      )
    }
  }
  render() {
    return (
      <div className="App">
        {/* {this.renderRouteChanger()} */}
        {this.renderIsSignedIn()}
        {/* {this.state.isSignedIn ? (this.props.history.push('/'),sessionStorage.setItem("login",firebase.auth().currentUser.displayName)) : (

          <div className=" login-container container">
              <div className="row  ">
                  <div className="col-md-6 d-flex justify-content-center">
                      <div className="logo-section">
                            <img src="/images/logo.png" className="logo-banner-img img-fluid" alt="movie mast.com"/>
                      </div>
                  </div>
                  <div className="col-md-6  d-flex justify-content-center">
                      <div className="sign-options">
                         <StyledFirebaseAuth uiConfig={this.uiConfig}  firebaseAuth={firebase.auth()}/>
                      </div>
                  </div>
              </div>
          </div>
          


        )} */}
      </div>
    )
  }
}

export default Login
