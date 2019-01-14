import React,{Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{
    state = {gifUrls: [],
            searchedGifs: []}

    componentDidMount = () =>{
        fetch('http://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(r=> r.json())
        .then(data => {
            const gifUrls = data.data

            this.setState({gifUrls})
        }
        )
    }

    searchedGifs = (search) => {
        const filteredGifs = this.state.gifUrls.filter(url => url.title.includes(search))
        
        this.setState({searchedGifs: filteredGifs})
    }


    render(){
        return (
            <div>
                <GifSearch searchedGifs = {this.searchedGifs}/>

                <GifList gifUrls = {this.state.searchedGifs.length === 0 ? this.state.gifUrls : this.state.searchedGifs} />
            </div>
        )
    }

}