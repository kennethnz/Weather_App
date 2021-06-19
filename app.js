

let weather = {

    apikey: "a9a1a1706e9bb35d94c23d5f1926680a",
    fetchWEather: (city)=> {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.diplayWeather(data));

    },
   diplayWeather : (data)=>{
       const {name} = data;
       const {icon, description} = data.weather[0];
       const {temp, humidity} = data.main;
       const {speed } = data.wind;
       document.querySelector(".city").innerText = " weather in " + name;
       document.querySelector(".temp").innerText = temp + "°C";
       document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";
       document.querySelector('.description').innerText = description ;
       document.querySelector('.humidity').innerText = "Humidity :" + humidity + "%" ;
       document.querySelector('.wind').innerText = "Wind speed" + speed + "kmph";
    
   },

   search : ()=>{
      const searchBbar = document.querySelector('.search-bar').value;
      this.fetchWEather(searchBbar);
   
   }

};


document.querySelector('.search button').addEventListener('click', function(){
    weather.search();
});



document.querySelector('.search-bar').addEventListener('keyup', function(e){
    if(e.key == "Enter"){
    weather.search();
    }
})