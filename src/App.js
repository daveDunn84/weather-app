import { Component } from 'react';
import Search from './Search'
import WeatherData from './WeatherData';
import GetWeatherData from './WeatherService';

const defaultImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQL-oP1o-wM07-Mj1S7MNhCXit7vYC97Wigg&usqp=CAU';

class App extends Component {

  initialState = {
    town: '',
    temperature: 0,
    image: defaultImageUrl,
  }

  state = this.initialState

  getWeatherData = (town) => {
    // weather api logic to go here
    GetWeatherData(town, this.onWeatherDataLoaded)
  }

  onWeatherDataLoaded = (data) => {
    this.setState({
      town: data.town,
      temperature: data.temperature,
      image: data.image,
    });
  }

  render() {
    return <div>
      <Search updateWeatherData={this.getWeatherData} />
      <WeatherData props={this.state} />
    </div>
  }
}

export default App;
