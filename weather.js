



const searchWeather = ()=>{
    const inputField =  document.querySelector('.search-field');
    const inputText = inputField.value;
    inputField.value = '';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=bc44a7d740b72549084540e023a794e3&units=metric`;
    fetch(url)
    .then(response =>response.json())
    .then(data=>diplayWeather(data))
};

const diplayWeather = weather=>{
    console.log(weather);
    const temp = weather.main.temp;
    const weatherDescription = weather.weather[0].description;
    const div = document.querySelector('#weather');
    const icon = weather.weather[0].icon;
    div.innerHTML =`
    <h2> ${weather.name},${weather.sys.country}</h2>
    <h6>CURRENT WEATHER</h6>
    <img  src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="" srcset="">
    <h1>${temp}℃</h1>
    <h5>FEELS LIKE ${weather.main.feels_like}℃. ${weatherDescription}</h5>
   
  `
    console.log(temp);
}