const key = 'oR1L5biEhzsqNvFZvpkXEuqYIiHohHNR';

//getCity infomation
const getCity = async (city) => {
    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    //use ? to follow the query parameters and use & to follow the other one
    const response = await fetch(baseUrl + query);
    //response =fetch().then()
    const data = await response.json();
    //data = response.json.then()

    return data[0];
};

// getCity('taipei')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
//{Version: 1, Key: "4-315078_1_AL", Type: "City", Rank: 20, LocalizedName: "Taipei", …}
//key is the one we need



//get weather condition

const getWeather = async (cityKey) => {
    const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${key}`;
    //city is not part of query is just after / 
    const response = await fetch(baseUrl + query);
    const data = await response.json();
    return data[0];
    // return an array and make it an object 
};

// getCity(city_name)
//     .then(key => getWeather(key))
//     .then(data => {
//         console.log(data)
//         cityName.textContent = city_name;
//         weatherCondition.textContent = data.WeatherText;
//         temp.textContent = data.Temperature.Metric.Value;
//     }).catch(err=>console.log(err));
