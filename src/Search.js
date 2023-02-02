import React, { Component } from 'react'

class Search extends Component {

    initialState = {
        town:''
    }

    state = this.initialState

    handleEvent = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })

        console.log(`${name}:${value}`)
    }

    handleSubmit = () => {
        // alert(`loading weather for ${this.state.town}...`)
        this.props.updateWeatherData(this.state.town)
        this.setState(this.initialState)
    }

    render() {
        const {town} = this.state

        return (
            <div>
                <label>Town:</label>
                <input 
                    type="text"
                    id="town"
                    value={town}
                    onChange={this.handleEvent}
                    name="town"/>
                <button
                    onClick={this.handleSubmit}>
                    Search
                </button>
            </div>
        )
    }
}

export default Search;