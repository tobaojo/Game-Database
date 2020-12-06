import React from 'react'
import MovieItem from './movieItem'
import Spinner from './Spinner'

const movieGrid = ({items, isLoading}) => {
    return isLoading ? (<Spinner />):(<section className="cards">
        {items.map(item => (<MovieItem key={item.imdbID} item={item}></MovieItem>))}
    </section>)

    
}

export default movieGrid
