import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  handleSubmit = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response=>response.json())
      .then(data=>{
        const gifs = data.data.slice(0,3)
        this.setState({
          gifs: gifs
        })
      })
  }


  render () {
    console.log(this.state);
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer;
