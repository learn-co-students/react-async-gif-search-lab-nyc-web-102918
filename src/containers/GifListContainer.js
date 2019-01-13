import React from "react"
import GifList from  "../components/GifList"
import GifSearch from  "../components/GifSearch"

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    searchTerm: ""
  }

  setSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  searchGifs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        gifs: data.data.slice(0,3)
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <GifList gifs={this.state.gifs}/>
          <GifSearch setSearchTerm={this.setSearchTerm} searchTerm={this.state.searchTerm} searchGifs={this.searchGifs}/>
        </div>
      </div>
    )
  }
}

export default GifListContainer
