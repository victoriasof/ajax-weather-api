

let city= document.getElementById("input").value;
//made city a global variable

document.getElementById("search").addEventListener("click", ()=>{

    let mykey = config.MY_KEY;
    let key2 = config.KEY_2;

    let apiKeyUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=` + mykey
    let keyUnsplash = `https://api.unsplash.com/photos/random?query=${city}&client_id=` + key2

    fetch(apiKeyUrl)
        .then(response => response.json())
        .then(data => showData(data))
        .catch(err => console.error(err));

    fetch(keyUnsplash)
        .then(response => response.json())
        .then(data => showImage(data))
        .catch(err => console.error(err));

})

function showImage(image){
    document.getElementById("cityImg").src = image.urls.thumb
    document.getElementById("cityName").innerHTML= city
}

function showData(forecast){

    document.getElementById("date1").innerHTML = forecast.list[7].dt_txt;
    document.getElementById("img1").src = `http://openweathermap.org/img/wn/${forecast.list[7].weather[0].icon}@2x.png`;
    document.getElementById("temp1").innerHTML = forecast.list[7].main.temp + " °C";
    document.getElementById("desc1").innerHTML = forecast.list[7].weather[0].description;

    document.getElementById("date2").innerHTML = forecast.list[15].dt_txt;
    document.getElementById("img2").src = `http://openweathermap.org/img/wn/${forecast.list[15].weather[0].icon}@2x.png`;
    document.getElementById("temp2").innerHTML = forecast.list[15].main.temp + " °C";
    document.getElementById("desc2").innerHTML = forecast.list[15].weather[0].description;

    document.getElementById("date3").innerHTML = forecast.list[23].dt_txt;
    document.getElementById("img3").src = `http://openweathermap.org/img/wn/${forecast.list[23].weather[0].icon}@2x.png`
    document.getElementById("temp3").innerHTML = forecast.list[23].main.temp + " °C";
    document.getElementById("desc3").innerHTML = forecast.list[23].weather[0].description;

    document.getElementById("date4").innerHTML = forecast.list[31].dt_txt;
    document.getElementById("img4").src = `http://openweathermap.org/img/wn/${forecast.list[31].weather[0].icon}@2x.png`
    document.getElementById("temp4").innerHTML = forecast.list[31].main.temp + " °C"
    document.getElementById("desc4").innerHTML = forecast.list[31].weather[0].description;

    document.getElementById("date5").innerHTML = forecast.list[39].dt_txt;
    document.getElementById("img5").src = `http://openweathermap.org/img/wn/${forecast.list[39].weather[0].icon}@2x.png`
    document.getElementById("temp5").innerHTML = forecast.list[39].main.temp + " °C";
    document.getElementById("desc5").innerHTML = forecast.list[39].weather[0].description;

}



