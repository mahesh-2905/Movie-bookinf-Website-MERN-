import React  from 'react';
import Slider from 'react-slick';
import './movie_carousel.css';

const MovieCarousel = (props)=> {

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "120px",
      slidesToScroll: 1,
      slidesToShow: 1,
      autoplaySpeed: 4000,
      autoplay:true,
      arrows:false,
      adaptiveHeight:false,
      swipeToSlide:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding:"5px",
            arrows:false,
          } 
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "5px",
            arrows:false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
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


    const renderCarouselImages = ({Images})=>{

      if(Images){
        return Images.slice(4,10).map((data)=>{
          return(
                <div className="Slide" key={data._id}>
                  <div className="Banner_image">
                      <img src={data.thumb[0].background} alt={data.name}></img>
                      <div className="Banner_info">
                        <h1 id="movie_name">{data.name}</h1>
                        <h3 id="trailer">
                          Watch trailer 
                          <a href={data.trailer} target="blank"><i className="fa fa-play ml-3" aria-hidden="true"></i> </a>
                        </h3>
                      </div>
                  </div>  
                </div>
          )
        })
      }
    }
    return (
      <div className="movie_carousel">
        <Slider {...settings}>
          {renderCarouselImages(props)}
        </Slider>
      </div>
    );
  }




export default MovieCarousel;
