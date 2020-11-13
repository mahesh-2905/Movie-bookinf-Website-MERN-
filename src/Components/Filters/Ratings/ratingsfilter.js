import React,{Component} from 'react'

const base_url = "https://movies-apis-app.herokuapp.com/movies";

class CostFilter extends Component{

    constructor(){

        super()
        this.state={

        }
    }
    ratingsFilter= (event)=>{
        var rf_url;
        var movietype= sessionStorage.getItem('movietype');
        var ratings = (event.target.value).split(',');
        var lr = Number(ratings[0]);
        var hr = Number(ratings[1]);
        if(ratings.length === 1){
           rf_url = `${base_url}/${movietype}`;
        }
        else{
            rf_url = `${base_url}/${movietype}?lr=${lr}&hr=${hr}`
        }

        fetch(rf_url,{method:"GET"})
        .then(res=> res.json())
        .then((data)=>{
            this.props.ratingsdata(data)
        })
      }
    render(){

        return(
            <React.Fragment>
            <h6> Ratings </h6>
            <div className="cuisine-select" onChange={this.ratingsFilter}>
                    <label className="radio">
                        <input type="radio" value=" " name="cost"/>
                        &nbsp;All
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="2,2.5" name="cost"/>
                        &nbsp; 	<i className="fa fa-star mr-1" aria-hidden="true"></i> 2.0 - <i className="fa fa-star mr-1" aria-hidden="true"></i> 2.5
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="2.5,3.0" name="cost"/>
                        &nbsp; <i className="fa fa-star mr-1" aria-hidden="true"></i> 2.5 - <i className="fa fa-star mr-1" aria-hidden="true"></i> 3.0
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="3,3.5" name="cost"/>
                        &nbsp; 	<i className="fa fa-star mr-1" aria-hidden="true"></i> 3.0 - <i className="fa fa-star mr-1" aria-hidden="true"></i> 3.5
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="3.5,4.0" name="cost"/>
                        &nbsp; <i className="fa fa-star mr-1" aria-hidden="true"></i> 3.5 - <i className="fa fa-star mr-1" aria-hidden="true"></i> 4.0
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="4.0,4.5" name="cost"/>
                        &nbsp; <i className="fa fa-star mr-1" aria-hidden="true"></i> 4.0 - <i className="fa fa-star mr-1" aria-hidden="true"></i> 4.5
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="4.5,5.0" name="cost"/>
                        &nbsp; <i className="fa fa-star mr-1" aria-hidden="true"></i> 4.5 - <i className="fa fa-star mr-1" aria-hidden="true"></i> 5
                    </label><br/>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter