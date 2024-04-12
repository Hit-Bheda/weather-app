function findWeather(city){
    console.log(city)
    const apikey = '8ae2998c9eb80ceeaa0d3634c273e8ec'
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;

    async function findcity(){
        const response = await fetch(url)
        const data = await response.json()
        document.querySelector('.temprature').innerHTML = Math.round(data.main.temp) 
        document.querySelector('.city-name').innerHTML = data.name + ',' + data.sys.country
        document.querySelector('.wind').innerHTML = data.wind.speed
        document.querySelector('.hum').innerHTML = data.main.humidity
        const weatherIcon = document.querySelector('.img');
        if(data.weather[0].main == 'Clouds'){
          weatherIcon.setAttribute('src', './Assets/images/clouds.png')
        }else if(data.weather[0].main == 'Clear'){
          weatherIcon.setAttribute('src', './Assets/images/clear.png')
        }else if(data.weather[0].main == 'Rain'){
          weatherIcon.setAttribute('src', './Assets/images/rain.png')
        }else if(data.weather[0].main == 'Drizzle'){
          weatherIcon.setAttribute('src', './Assets/images/drizzle.png')
        }else if(data.weather[0].main == 'Mist'){
          weatherIcon.setAttribute('src', './Assets/images/mist.png')
        }else{
          weatherIcon.setAttribute('src', './Assets/images/sun.png')
        }
        console.log(data)
    }
    findcity()
}


const searcBtn = document.querySelector('.search-icon');
const search = document.querySelector('.search')
searcBtn.addEventListener('click',()=>{
  findWeather(search.value);
})


// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }

// function showPosition(position) {
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;
//   alert("Latitude: " + latitude + ", Longitude: " + longitude);
// }

// getLocation();
// showPosition()