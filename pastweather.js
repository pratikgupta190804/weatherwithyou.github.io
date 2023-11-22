let pastWeather = {
  "apiKey": "204839194a9bab1305b974d5136e6660",
  fetchWeather: function(city) {
    
    let date = "1369728000"
  fetch("https://history.openweathermap.org/data/2.5/history/city?q=${city}&type=hour&start=${date}&end=${date}&units=metric&appid=${this.apiKey}")
  .then((response) => response.json())
  .then((data) => console.log(data));
  }
}
