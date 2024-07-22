import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Navbar from "./Components/Navbar/Navbar";
import Network from "./Components/Network/Network";
import TvShow from "./Components/TvShow/TvShow";
import People from "./Components/People/People";
import MovieView from "./Components/Movies/MovieView";
import HomeView from "./Components/Home/HomeView";
import TvShowView from "./Components/TvShow/TvShowView";
import PeopleView from "./Components/People/PeopleView";
import Search from "./Components/Search";
import { MovieContextProvider } from "./Components/MovieContext";
import Login from "./Components/Login/Login";


function App() {
  return (
    <>
    <MovieContextProvider>
      <Navbar />
  <Routes>
    <Route path="" element={<Home />}/>
    <Route path="/HomeView/:id" element={<HomeView />}/>
    <Route path="Movies" element={<Movies />}/>
    <Route path="/Movies/MovieView/:id" element={<MovieView />}/>
    <Route path="TvShows" element={<TvShow />}/>
    <Route path="/TvShows/TvShowView/:id" element={<TvShowView />}/>
    <Route path="People" element={<People />}/>
    <Route path="/people/PeopleView/:id" element={<PeopleView />}/>
    <Route path="About" element={<About />}/>
    <Route path="Networks" element={<Network />}/>
    <Route path="login" element={<Login />}/>
    <Route path="search" element={<Search />} />
          <Route path="*" element={<h1>not found 404</h1>} />
    </Routes>
    </MovieContextProvider>
    </>
  );
}

export default App;
