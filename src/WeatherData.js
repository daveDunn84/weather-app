function WeatherData(props) {
    const { town, temperature, image } = props.props

    return <div className="">
        <label
            className="font-mono text-lg">Weather Data for {town}</label>

        <img src={image} />
        <label
            className="font-mono text-sm">
            Temperature: {temperature} degrees
        </label>
    </div>;
}

export default WeatherData;