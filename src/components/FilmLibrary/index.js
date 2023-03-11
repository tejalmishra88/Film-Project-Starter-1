import FilmDetail from "../FilmDetail";
import TMDB from "../../TMDB";
import FilmRow from "../FilmRow";
import './FilmLibrary.css'
import React, { useState, useEffect } from 'react'

//import './FilmRow.css'


function FilmLibrary() {
  const filmsArray = TMDB.films
  const [films, setFilms] = useState(filmsArray)
 // console.log('films', filmsArray)
  const [selectedFilm, setSelectedFilm] = useState(null)
  const [favourites, setfavourites] = useState([])
  const [option, setOption] = useState('all')

  const handleSelect = (film) => {
    console.log('film back in lib from list',film)
    setSelectedFilm(film)
  }
  
  const handleOption = (option) => {
    console.log('handleoption--',option)
    setOption(option)
  }

  // console.log(option);
  // console.log(films);

  useEffect(() => {
    if (option === 'all') {
      setFilms(filmsArray)
    } else {
      setFilms(favourites)
    }
  }, [option, filmsArray, favourites])


  const handleFavourite = (film) => {
    console.log('favr--',film)
    const newFavourites = [...favourites]
    const filmIndex = newFavourites.indexOf(film)

    if (filmIndex === -1) {newFavourites.push(film)} 
    else {newFavourites.splice(filmIndex, 1)}
    console.log('newfav--',newFavourites)

    setfavourites(newFavourites)
    console.log('newfav2--',newFavourites)
    const updatedFilms = films.map(film => {
      if (newFavourites.indexOf(film) !== -1) 
            { film.isFavourite = true   } 
      else { film.isFavourite = false  }
      return film
    })
    console.log('fav updated---',updatedFilms)
    setFilms(updatedFilms)
  }


  return (
    <div className="FilmLibrary">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
        <button className={option === 'all' ? 'film-list-filter is-active' : 'film-list-filter'} onClick={() => handleOption('all')}>
            ALL
            <span className="section-count">{filmsArray.length}</span>
          </button>
          <button className={option === 'favourites' ? 'film-list-filter is-active' : 'film-list-filter'}  onClick={() => handleOption('favourites')}>
            FAVES
            <span className="section-count" >{favourites.length}</span>
          </button>
        </div>
        
        {films.length ? films.map(film => (
          <FilmRow
            key={film.id}
            film={film}
            favourites={favourites}
            id={film.id}
            title={film.title}
            posterPath={`https://image.tmdb.org/t/p/w780${film.poster_path}`}
            backdropPath={`https://image.tmdb.org/t/p/w1280${film.backdrop_path}`}
            overview={film.overview}
            handleSelect={handleSelect}
            handleFavourite={handleFavourite}
            releaseDate={film.release_date}
          />
        )) : (
          <p style={{textAlign: 'center'}}>No Faves Yet!</p>
        )
      }
      </div>

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <FilmDetail  film={selectedFilm}/>
      </div>
    </div>
  );
}

export default FilmLibrary