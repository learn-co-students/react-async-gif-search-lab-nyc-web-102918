import React from "react"

class GifSearch extends React.Component {
  handleChange = (e) => {
    this.props.setSearchTerm(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchGifs()
  }

  render() {
    return (
      <div className="col-md-4">
        <h4>Enter a Search Term:</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.props.searchTerm}/>
          <button>Find Gifs</button>
        </form>
      </div>
    )
  }
}

export default GifSearch
