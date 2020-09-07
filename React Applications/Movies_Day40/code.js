import  React ,{ Component } from "react";
// import Header from './header'
// import Footer from './footer'
// import {Nav} from 'react-bootstrap';
import movie_data from './movie_data.js';

class movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts : movie_data
        }; 
        // console.log(window.location);
    }
    render() {
        const {posts} = this.state;
        let movies = null;
        movies = (
            posts.map(movie =>
                (
                    <div>
                        <img src= {movie.poster} height = "280"  width =  "200" alt="hi" key={movie.movie_id}/>
                        <h3>Title : {movie.title}</h3>
                        Release date : {movie.release_date}<br/>
                        Rating : {movie.avg_rating}<br/>
                    </div>
            ))
        );

      return (
        <div>
            <div className="hi">
                {movies}
            </div>
        </div>
      );
    }
}

export default movies;