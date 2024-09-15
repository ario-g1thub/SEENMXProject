import StarMovie from "./StarMovie";
import Swal from 'sweetalert2'

const CardMovie = ({ movie, isLoading }) => {

    if (isLoading) {
        return (
            <div className="border-red-500 border-2 mx-4 my-4 p-4 rounded-md">
                loading
            </div>
        )
    }

    const AddFavorite = (id) => {

        let myFavorite = [];
        let idMovie = { id: id };

        if (localStorage.getItem('favorite')) {
            myFavorite = JSON.parse(localStorage.getItem('favorite'));

            

            console.log(myFavorite.includes(idMovie), myFavorite)

            let isFavorite = true;
            for (let i = 0; i < myFavorite.length; i++) {
                if (myFavorite[i].id === idMovie.id) {
                    isFavorite = false;
                    break;
                }
                console.log(myFavorite[i].id)
            }

            if (isFavorite) {
                myFavorite.push(idMovie);
                localStorage.setItem('favorite', JSON.stringify(myFavorite));
            }

            if(!isFavorite) {
                Swal.fire({
                    title: 'Oops!',
                    text: 'You have already added this to your Favorite',
                    icon: 'error',
                    confirmButtonText: 'Back'
                  })
            }

            console.log(myFavorite)

        } else {
            myFavorite.push(idMovie);
            localStorage.setItem('favorite', JSON.stringify(myFavorite));
        }
    };

    return (
        <div style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`
        }} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
            <div className="mt-4 px-5 pb-5 bg-gradient-to-b from-transparent via-gray-800 via-90% to-black">
                <div>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                        {movie.title}
                    </h5>
                </div>

                <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-200 line-clamp-3">
                        {movie.overview}
                    </h5>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <StarMovie vote={movie.vote_average} />
                    </div>
                    {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        5.0
                    </span> */}
                </div>
                <button onClick={() => AddFavorite(movie.id)} className="text-center border-white border-2 rounded-md w-full mt-4 text-white hidden group-hover:block bg-gradient-to-r hover:from-pink-500 hover:to-orange-500">Add to Favorite</button>
            </div>
        </div>
    )
};
export default CardMovie;