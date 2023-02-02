const apiUrl = `https://api.weatherapi.com/v1/current.json`;
const key = '7efeca117c5d406fb3b122904221312';
const aqi = 'no';

function GetWeatherData(town, onWeatherDataLoaded) {

    console.log(`hitting that API for ${town}!!!`);

    const q = town;

    // fetch from the API
    const fullApiUrl = `${apiUrl}?key=${key}&q=${q}&aqi=${aqi}`;
    console.log(`Weather API Url: ${fullApiUrl}`);

    console.log('Fetch initiated')
    fetch(fullApiUrl)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            const mappedData = MapApiData(data)
            onWeatherDataLoaded(mappedData)
        });

    console.log('Fetch done')
}

function MapApiData(data) {
    console.log('mapping the data!');
    console.log(data);

    const { temp_c } = data.current
    const { icon } = data.current.condition
    const { name } = data.location

    const mappedObject = {
        town: name,
        temperature: temp_c,
        image: icon,
    };

    console.log('Mapped data..');
    console.log(mappedObject);

    return mappedObject;
}

export default GetWeatherData;