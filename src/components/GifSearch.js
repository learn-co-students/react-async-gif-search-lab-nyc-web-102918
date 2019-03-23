import React from 'react'

const GifSearch = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
    <label>Search Gifs...</label>
    <input onChange={props.handleChange}></input>
    </form>

  </div>
);

export default GifSearch
