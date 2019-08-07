import React from 'react';
import propTypes from "prop-types";

// state 가 필요 없을 경우 function오로

function Movie({id, year, title, summary, poster}){
    return <h1>{title}</h1>;
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired
};

export default Movie;