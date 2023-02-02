function WeatherData(props) {
    const { town, temperature, image } = props.props

    return <div>
        <h1>Weather Data for {town}</h1>
        <label>Temperature:</label>{temperature}
        <img src={image} />
    </div>;
}

export default WeatherData;