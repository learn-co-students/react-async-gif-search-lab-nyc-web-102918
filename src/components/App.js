import React, {Fragment} from 'react'
import NavBar from './NavBar'
import GifListContainer from "../containers/GifListContainer"

// the App component should render out the GifListContainer component

function App() {
  return (
    <Fragment>
      <NavBar color='black' title="Giphy Search" />
      <GifListContainer />
    </Fragment>
  )
}

export default App
