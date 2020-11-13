import React,{Component} from 'react'

const base_url = "https://movies-apis-app.herokuapp.com/movies/latest";
class LanguageFilter extends Component{

    constructor(){

        super()
        this.state={

        }
    }
    LanguageFilter = (event)=>{
        var lang = event.target.value;
        var lurl;
      if(lang === ''){
           lurl = `${base_url}`
      }
      else{
          lurl = `${base_url}?lang=${lang}`
      }
    //   console.log(lurl)
      fetch(lurl,{method:"GET"})
      .then(res =>res.json())
      .then((data)=>{
          this.props.langdata(data)
      })
    }
    render(){

        return(
            <React.Fragment>
            <h6> Languages </h6>
            <div className="cuisine-select" onChange={this.LanguageFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="language"/>
                        &nbsp; All
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="1" name="language"/>
                        &nbsp; English
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="2" name="language"/>
                        &nbsp; Hindi
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="3" name="language"/>
                        &nbsp; Telugu
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="4" name="language"/>
                        &nbsp; Korean
                    </label><br/>
                    
                    
                </div>
            </React.Fragment>
        )
    }
}

export default LanguageFilter