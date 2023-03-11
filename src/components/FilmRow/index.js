
import React from 'react'

const FilmRow = (props) => {
   // console.log('propsddd', props)
    const moonLanding = new Date(props.releaseDate);
   // console.log('dates', moonLanding.getFullYear())

    const handleSelect = () => {
        props.handleSelect(props.film)
      }
  return (
    <div> 
                <div className="FilmRow">
          <img src={props.posterPath} alt="{film title} film poster" />
          <div className="film-summary">
            <h3>{props.title}</h3>
            <p>{moonLanding.getFullYear()}</p>
            <div className="actions">
            <button className="action" onClick={() => props.handleFavourite(props.film)}>
              {!props.film.isFavourite ? (
              <span className="material-icons">add_to_queue</span>
              ) : (
                <span className="material-icons">remove_from_queue</span>
              )}
            </button>
              <button className="action" onClick={handleSelect}>
                <span className="material-icons">read_more</span>
              </button>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default FilmRow