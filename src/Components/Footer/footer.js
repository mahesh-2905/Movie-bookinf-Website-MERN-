import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


const Footer = ()=>{


    return (
        <React.Fragment>
            <div className="container-fluid footer">
                <div className="row ">
                    <div className="col-md-4">
                        <h5 className="text-center footer_header my-4">Language Movies</h5>
                        <ul>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>English Movie</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Telugu Movie</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Hindi Movie</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Korean Movie</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Maliyalam Movies</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>English Action Movie</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Hindi Action Movie</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-center footer_header my-4">Movie by Presenter</h5>
                        <ul>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Action Movies</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Adventure Movies</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Comedy Movies</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Horror Movies</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Thriller Movies</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Family Movies</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>Fantasy Movies</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-center footer_header my-4">Booking Online</h5>
                        <ul>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>example.com</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>hello.com</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>example.com</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i className="fa fa-circle mr-2" aria-hidden="true"></i>hello.com</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-12 container-fluid copyright pt-3">
                      <p className="text-center"><i className="fa fa-copyright" aria-hidden="true"></i> 2020-2021<b id="site_name"> Movies masti.com </b>. All rights received.<span id="tou"> Terms of use | Privacy Policy</span></p>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Footer;