const apiUrl = `https://api.weatherapi.com/v1/current.json`;
const key = '7efeca117c5d406fb3b122904221312';
const aqi = 'no';

function GetWeatherData(town, onWeatherDataLoaded) {

    // fetch from the API
    const fullApiUrl = `${apiUrl}?key=${key}&q=${town}&aqi=${aqi}`;
    console.log(`Weather API Url: ${fullApiUrl}`);

    fetch(fullApiUrl)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const mappedData = MapApiData(data)
            onWeatherDataLoaded(mappedData)
        });
}

function MapApiData(data) {
    const { temp_c } = data.current
    const { icon } = data.current.condition
    const { name } = data.location

    const mappedObject = {
        town: name,
        temperature: temp_c,
        image: icon,
    };

    return mappedObject;
}

export default GetWeatherData;