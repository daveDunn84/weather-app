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
        this.props.updateWeatherData(this.state.town)
        this.setState(this.initialState)
    }

    render() {
        const {town} = this.state

        return (
            <div className='flex flex-row'>
                <label 
                    className='font-mono'>Town:</label>
                <input 
                    className='basis-1/12'
                    type="text"
                    id="town"
                    value={town}
                    onChange={this.handleEvent}
                    name="town"/>
                <button
                    className='basis-1/12 bg-blue-500 border-dashed border-blue-700'
                    onClick={this.handleSubmit}>
                    Search
                </button>
            </div>
        )
    }
}

export default Search;