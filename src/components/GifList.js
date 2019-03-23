import React from 'react'

const GifList = (props) => (
  <div>
  {
    props.gifs.map(gif => {
      return <ul>
              <li><img src={`${gif.images.original.url}`}></img ></li>
             </ul>
    })
  }
  </div>
);

export default GifList
