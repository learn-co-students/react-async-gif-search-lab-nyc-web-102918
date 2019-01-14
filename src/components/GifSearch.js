import React,{Component} from 'react'

export default class GifSerch extends Component {

    state = {
        searched: ''
    }

    handleChange = (event) => {
        event.persist()
        this.setState({searched: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.searchedGifs(this.state.searched)
    }

    render(){
        return (
            <div> 
                <form onSubmit = {event => this.handleSubmit(event)}>
                    <label>Enter a Search Term: </label>
                    <input name='gifSearch' value={this.state.searched} type='text' onChange = {event => this.handleChange(event)}/>
                    <button type="submit"> Submit </button>
                </form> 
             </div>
        )
    }
}