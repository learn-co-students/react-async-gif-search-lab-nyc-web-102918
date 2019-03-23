import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: [],
    search: ''
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

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
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
      <GifSearch
      search={this.state.search}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      />
      </div>
    );
  }

}

export default GifListContainer;
