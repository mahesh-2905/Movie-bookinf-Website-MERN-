import React from 'react';
import Slider from 'react-slick';
import './cast.css';

const CastComponent = (props)=>{
   

            const settings = {
              className: "center",
              centerMode: true,
              infinite: true,
              centerPadding: "60px",
              slidesToScroll: 1,
              slidesToShow: 3,
              autoplaySpeed: 3000,
              autoplay:true,
              arrows:false,
              adaptiveHeight:false,
              swipeToSlide:true,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows:false,
                  }
                },
                {
                  breakpoint: 720,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding:"5px",
                    arrows:false,
                  } 
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: "5px",
                    arrows:false,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "5px",
                    arrows:false,
                  }
                },
                {
                  breakpoint: 250,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "5px",
                    arrows:false,
                  }
                }
              ]
            };
    // console.log(props);
  
  

  const renderCast = ({castdata})=>{
           
     if(castdata){
       return castdata.map((data)=>{

           return(
                <div className="CastSlide" key={data.name}>
                  <div className="Cast_image">
                      <img src={data.thumb}  alt=""></img>
                      <div className="cast_overlay">
                        <h5 className="movieinfo">{data.name}</h5>
                      </div>
                  </div>  
                </div>
           )
       })
     }
  }
            return (
              <React.Fragment>
              <div className="cast_carousel cast_section">
                <div className="inner-cast_section">
                  <h1 className="header_quote cast_hader text-center">ACTOR CAST</h1>
                  <Slider {...settings}>
                    {renderCast(props)}
                  </Slider>
                </div>
              </div>
            </React.Fragment>
            );
          }



export default CastComponent;