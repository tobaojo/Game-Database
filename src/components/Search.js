import React, { useState } from 'react'

const Search = ({getQuery}) => {

const [text,setText] = useState('');
const onChange = (q) => {
    setText(q);
    //getQuery(q)
}

    return (
        <section className ="Search">
            <form action="">
                <input type="text"
                className="form-control"
                placeholder="Search Game"
                autoFocus
                value={text}
                onChange={(e)=> onChange(e.target.value)}
                
                />
            </form>

            
        </section>
    )
}

export default Search
