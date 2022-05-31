const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=4cadfe07aadf6046def4e83e86f84006";

const output = (weatherList) => {
    //create parent article to hold all elements
    let article = document.createElement("article");

    //current condition
    let currentCondition = document.createElement("p");
    currentCondition.innerText = weatherList.weather[0].description.charAt(0).toUpperCase() + weatherList.weather[0].description.slice(1);

    //current temp
    let currentTempP = document.createElement("p");
    let currentTempSpan = document.createElement("span");
    currentTempP.innertText = "°F";
    currentTempSpan.innerText = weatherList.main.temp;
    currentTempSpan.setAttribute('id', "temperature");
    currentTempP.appendChild(currentTempSpan);

    //humidity
    let humidity = document.createElement("p");
    humidity.innerText = `${weatherList.main.humidity}%`;

    //append to preston-weather-info-right
    article.appendChild(currentTempP);
    article.appendChild(currentCondition);
    article.appendChild(humidity);

    document.querySelector('.weather-info-right').appendChild(article);
}

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherArray) => {
    output(weatherArray)
  });
