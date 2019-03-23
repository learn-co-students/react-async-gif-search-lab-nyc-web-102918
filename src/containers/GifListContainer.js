import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  componentDidMount(){
    fetch('http://api.giphy.com/v1/gifs/search?q=dogs&api_key=dc6zaTOxFJmzC&rating=g')
    .then(r => r.json())
    .then(data => {
      this.setState({
        gifs: data.data.slice(0, 3)
      })
    })
  }

  render() {
    return (
      <div>
      <GifList gifs={this.state.gifs}/>
      <GifSearch />
      </div>
    );
  }

}

export default GifListContainer;
