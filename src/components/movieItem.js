import React from 'react'

const movieItem = ({ item }) => {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.Poster} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.Title}</h1>
            <ul>
              <li>
                <strong>Year:</strong> {item.Year}
              </li>
              <li>
                <strong>Type:</strong> {item.Type}
              </li>
              {/* <li>
                <strong>Birthday:</strong> {item.birthday}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default movieItem
