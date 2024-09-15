import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import SearchMovie from "../components/SearchMovie";
import Movies from '../assets/movies.json';

const Home = () => {

    const [movies, setMovies] = useState(Movies.results);
    const [isLoading, setIsLoading] = useState(false);


    const fetchData = async () => {
        setIsLoading(true);

        try {
            let res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTBkZDc3OWE5YTc2ZmY3M2VjYjE5ZjhlNjlmYjkwZiIsIm5iZiI6MTcyNjIyODY5OS40NjU1MDgsInN1YiI6IjY2ZDg2NzNlNmRhMGIyMTRkNjI5ZTY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CkxFd4sbWQWcbZk_y7qNVfcSztcMVSqxFNIIF-2-hZM'
                  }
            });
            let data = await res.json();
            setMovies(data.results);
            console.log(data);
            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);

            console.log(error);
        }

        // setIsLoading(false);
    }

    useEffect(() => {fetchData()},[]);

    const SearchMyMovieByName = (params) => {
        // console.log(params);
        setMovies(params);
    };

    return (
        <>
            
            <SearchMovie SearchMyMovieByName={SearchMyMovieByName}/>
            {
                movies.length === 0 ? (
                    <div className="flex justify-center">
                        <p>Movies Not Found</p>
                    </div>
                ) : (<MovieList movies={movies} isLoading={isLoading}/>)
            }
            {/* <MovieList movies={movies} /> */}
        </>
    );
};
export default Home;