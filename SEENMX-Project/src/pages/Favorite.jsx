import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import SearchMovie from "../components/SearchMovie";

const Favorite = () => {

    const [movies, setMovies] = useState([]);
   


    const fetchData = async () => {
        // setIsLoading(true);

        try {
            let res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTBkZDc3OWE5YTc2ZmY3M2VjYjE5ZjhlNjlmYjkwZiIsIm5iZiI6MTcyNjIyODY5OS40NjU1MDgsInN1YiI6IjY2ZDg2NzNlNmRhMGIyMTRkNjI5ZTY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CkxFd4sbWQWcbZk_y7qNVfcSztcMVSqxFNIIF-2-hZM'
                }
            });
            let data = await res.json();
            
            let dataMovies = data.results;
            console.log(dataMovies)

            let favoriteMovies = [];

            let favoriteLocal = JSON.parse(localStorage.getItem('favorite'))
            console.log(dataMovies, favoriteLocal)

            for(let i=0; i < dataMovies.length; i++) {

                for(let j=0; j < favoriteLocal.length; j++) {
                    console.log(favoriteLocal[j].id === dataMovies[i].id)
                    if(favoriteLocal[j].id === dataMovies[i].id) {
                        favoriteMovies.push(dataMovies[i])
                    }
                }
            }
            setMovies(favoriteMovies);
            
          

        } catch (error) {
            
        }

        // setIsLoading(false);
    }

    useEffect(() => { fetchData() }, []);

    return (
        <>

            <MovieList movies={movies}/>
        </>
    );
};
export default Favorite;