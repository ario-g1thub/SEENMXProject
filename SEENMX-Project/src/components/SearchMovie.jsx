import { useState } from "react";
import Movies from '../assets/movies.json';

const SearchMovie = ({ SearchMyMovieByName }) => {

    const [search, setSearch] = useState('');

    // const searchMovie = () => {
    //     let newMovies = Movies.results.filter((movie) => {
    //         // console.log(movie.title, search, movie.title.toLowerCase().includes(search.toLowerCase()));

    //         if(movie.title.toLowerCase().includes(search.toLowerCase())) {
    //             return movie
    //         }
    //     })
    //     SearchMyMovieByName(newMovies)
    // };

    const searchMovie = async () => {

        try {
            let res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTBkZDc3OWE5YTc2ZmY3M2VjYjE5ZjhlNjlmYjkwZiIsIm5iZiI6MTcyNjIyODY5OS40NjU1MDgsInN1YiI6IjY2ZDg2NzNlNmRhMGIyMTRkNjI5ZTY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CkxFd4sbWQWcbZk_y7qNVfcSztcMVSqxFNIIF-2-hZM'
                }
            });
            let data = await res.json();
            SearchMyMovieByName(data.results);
            // setMovies(data.results);
            // console.log(data);

        } catch (error) {

            console.log(error);
        }

        // setIsLoading(false);
    };

    return (
        <section className="mt-4 mx-4 px-4">
            <div className="flex justify-center">
                <div className="w-1/2 text-center rounded-md py-2">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seach Movie" className="h-full focus:outline-none border-gray-500 border-2 rounded-md pl-2 mr-2" />
                    <button onClick={searchMovie} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Search</button>
                </div>
            </div>
        </section>
    )
};
export default SearchMovie;