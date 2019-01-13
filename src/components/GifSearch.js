import React from 'react'


class GifSearch extends React.Component {

  state = {
    searchInput: ''
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.searchInput)
  }

  render () {
    return (
      <form>
        <input type='text' value={this.props.searchText} onChange={this.handleChange}/>
        <input type='submit' onClick={this.submitForm}/>
      </form>
    )
  }
}

export default GifSearch;
