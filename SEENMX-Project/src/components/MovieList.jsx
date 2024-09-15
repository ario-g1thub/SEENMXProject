import CardMovie from "./CardMovie";

const MovieList = ({movies, isLoading}) => {
    return (
        <section className="mt-4 mx-4 px-4">

            <div className='grid grid-cols-4 gap-4'>
                {
                    movies.map((movie, index) => {
                        return <CardMovie key={index} movie={movie} isLoading={isLoading}/>
                    })
                }
            </div>


        </section>
    )
};
export default MovieList;