import React from 'react'
import MovieItem from './movieItem'

const movieGrid = ({items, isLoading}) => {
    return isLoading ? (<h1>Loadding...</h1>):(<section className="cards">
        {items.map(item => (<MovieItem key={item.imdbID} item={item}></MovieItem>))}
    </section>)

    
}

export default movieGrid
