import React,{Component} from 'react'

const base_url = "https://movies-apis-app.herokuapp.com/";
class MovieGenreFilter extends Component{

    constructor(){

        super()
        this.state={

        }
    }
    GenreFilter = (event)=>{
        var genre = event.target.value;
        var gurl;
        var movietype= sessionStorage.getItem('movietype');
      if(genre === ''){
           gurl = `${base_url}${movietype}`
      }
      else{
          gurl = `${base_url}${movietype}?genre=${genre}`
      }
      fetch(gurl,{method:"GET"})
      .then(res =>res.json())
      .then((data)=>{
          this.props.genredata(data)
      })
    }
    render(){

        return(
            <React.Fragment>
            <h6> Movie Genre </h6>
            <div className="cuisine-select" onChange={this.GenreFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="genre"/>
                        &nbsp; All
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="1" name="genre"/>
                        &nbsp; Action
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="2" name="genre"/>
                        &nbsp; Adventure
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="3" name="genre"/>
                        &nbsp; Fantasy
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="4" name="genre"/>
                        &nbsp; Crime
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="5" name="genre"/>
                        &nbsp; Thriller
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="6" name="genre"/>
                        &nbsp; Animation
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="7" name="genre"/>
                        &nbsp; Family
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="8" name="genre"/>
                        &nbsp; Horror
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="9" name="genre"/>
                        &nbsp; Comedy
                    </label><br/>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default MovieGenreFilter