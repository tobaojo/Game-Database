import React from 'react'

const movieItem = ({ item }) => {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.thumbnail} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.Title}</h1>
            <ul>
              <li>
                <strong>Name</strong> {item.title}
              </li>
              <li>
                <strong>Platform:</strong> {item.platform}
              </li>
              <li>
                <strong>Genre:</strong> {item.genre}
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
