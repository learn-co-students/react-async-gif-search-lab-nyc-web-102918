import React from "react"

class GifList extends React.Component {
  render() {
    return (
      <div className="col-md-8">
        <ul>
          {this.props.gifs.map(gif => {
            return  <li key={gif.id}>
                      <img src={gif.images.original.url} alt={gif.slug}/>
                    </li>
          })}
        </ul>
      </div>
    )
  }
}

export default GifList
