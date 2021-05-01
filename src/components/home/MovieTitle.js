import React, { Component } from 'react'
import './MovieTitle.css'
export default class MovieTitle extends Component {
    state ={
        loading: true,
        movies: null
    }
async componentDidMount(){
const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=5814933a2c3c15dcd667017085ad7ba8&language=en-US&page=1"
const response = await fetch(url);
const data = await response.json();
this.setState({movies: data.results[0], loading: false})
console.log(data);
}
render() {

return (
    <div>
        {/* <div>{this.setState.data.overview}</div> */}
        {this.state.loading || !this.state.movies ? <div>Loading....</div> 
        : <div className= "m_all">
            
             <div className="card card-body bg-dark text-center h-100" > 
             
             <img src ="https://image.tmdb.org/t/p/w500//2CAL2433ZeIihfX1Hb2139CX0pW.jpg" alt = "Movie"/>
              </div>
              <div className="card card-body bg-dark text-center h-100" >
                    <img className="w-100 mb-2" src ="https://image.tmdb.org/t/p/w500/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg" alt = "Movie" />
                    </div>      
                    <div className="card card-body bg-dark text-center h-100">                  
                    <img className="w-100 mb-2" src ="https://image.tmdb.org/t/p/w500////loRmRzQXZeqG78TqZuyvSlEQfZb.jpg" alt = "Movie" />
                    </div>
                    <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src ="https://image.tmdb.org/t/p/w500///rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg" alt = "Movie" />
                    </div>
                    <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src ="https://image.tmdb.org/t/p/w500///fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg" alt = "Movie" /> 
                    </div>
            </div>}
    </div>
)
}
}

