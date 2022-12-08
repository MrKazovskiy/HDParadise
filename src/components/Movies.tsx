import React from 'react';
import PropTypes from 'prop-types';

function Movies({id, title, year, summary, poster, video}: any) {
    return <> 
        <div className='movie'>
            <img src={poster} alt={title} title={title} />
            <div className='movie__column'>
                <h3 className='movie__title'>{title}</h3>
                <h5 className='movie__year'>{year}</h5>
                <p className='movie__summary'>{summary}</p>
            </div> 
            <video width="750" height="500" controls >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
        <br/>
    </>
}

Movies.propsType = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movies;


