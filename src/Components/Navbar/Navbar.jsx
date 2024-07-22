import React, { useContext } from 'react';
import './NavbarStyles.css';
import { Link, useNavigate } from 'react-router-dom';
import { MovieContext } from '../MovieContext';

function Navbar() {
    const navigate = useNavigate();
    const { changeWord } = useContext(MovieContext); 
    function handleSearch(e) {
        const searchValue = e.target.value;
        if (searchValue.length > 0) {
            navigate("/search");
        } else {
            navigate("/");
        }
        changeWord(searchValue);
    }

    return (
      <>
        <nav className="navbar navbar-expand-lg nav">
            <div className="container-fluid">
                <Link className="navbar-brand Nav-Navi-color" to="">Noxe</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-1 mb-2 mb-lg-0 Nav-Navi-color">
                        <li className="nav-item">
                            <Link className="nav-link active Nav-Navi-color nav-span" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active Nav-Navi-color nav-span" aria-current="page" to="/Movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active Nav-Navi-color nav-span" aria-current="page" to="/TvShows">TvShow</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active Nav-Navi-color nav-span" aria-current="page" to="/People">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active Nav-Navi-color nav-span" aria-current="page" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active Nav-Navi-color nav-span" aria-current="page" to="/Networks">NetWorks</Link>
                        </li>
                    </ul>
                    <form className="d-flex align-items-center gap-5" role="search">
                        <input 
                            className="form-control ms-5" 
                            type="search" 
                            placeholder="Search" 
                            onChange={handleSearch} 
                            aria-label="Search"
                        />
                        <div className='d-flex gap-3 social-media-cursor'>
                            <i className="fa-brands fa-facebook Nav-Navi-color fs-4 icons-cursor"></i>
                            <i className="fa-brands fa-youtube Nav-Navi-color fs-4 icons-cursor"></i>
                            <i className="fa-brands fa-instagram Nav-Navi-color fs-4 icons-cursor"></i>
                            <i className="fa-brands fa-whatsapp Nav-Navi-color fs-4 icons-cursor"></i>
                        </div>
                        <Link to='/login' className='text-light text-decoration'>Login</Link>
                    </form>
                </div>
            </div>
        </nav>
    </>


  )
}

export default Navbar;