// import { Link } from "/react-router-dom";
import movies from './assets/movies.json';
import CardMovie from './components/CardMovie';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import SearchMovie from './components/SearchMovie';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import MainLayout from './components/MainLayout';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/favorite",
        element: <Favorite />
      },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;