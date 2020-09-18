

document.getElementById("search").addEventListener("click", ()=>{

    let city= document.getElementById("input").value;

    let mykey = config.MY_KEY;
    let key2 = config.KEY_2;

    let apiKeyUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=` + mykey
    let keyUnsplash = `https://api.unsplash.com/photos/random?query=${city}&client_id=` + key2

    fetch(apiKeyUrl)
        .then(response => response.json())
        .then(data => {

            let latitude = data.city.coord.lat;
            let longitude = data.city.coord.lon;

            console.log(mykey)
            let onecallKey = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=` + mykey

            fetch(onecallKey)
                .then(response => response.json())
                .then(temp => showTemp(temp))
                //changed data to temp, so that data does not override
                .catch(err => console.error(err));

            showData(data)

            //showTemp(data)

        })

        .catch(err => console.error(err));

    fetch(keyUnsplash)
        .then(response => response.json())
        .then(data => showImage(data))
        .catch(err => console.error(err));

})

function showTemp (average) {

    console.log(average);

    document.getElementById("temp1").innerHTML = Math.round((average.daily[1].temp.morn + average.daily[1].temp.day + average.daily[1].temp.eve + average.daily[1].temp.night)/4) + " °C";
    document.getElementById("temp2").innerHTML = Math.round((average.daily[2].temp.morn + average.daily[2].temp.day + average.daily[2].temp.eve + average.daily[1].temp.night)/4) + " °C";
    document.getElementById("temp3").innerHTML = Math.round((average.daily[3].temp.morn + average.daily[3].temp.day + average.daily[3].temp.eve + average.daily[1].temp.night)/4) + " °C";
    document.getElementById("temp4").innerHTML = Math.round((average.daily[4].temp.morn + average.daily[4].temp.day + average.daily[4].temp.eve + average.daily[1].temp.night)/4) + " °C";
    document.getElementById("temp5").innerHTML = Math.round((average.daily[5].temp.morn + average.daily[5].temp.day + average.daily[5].temp.eve + average.daily[1].temp.night)/4) + " °C";

}

function showImage(image){
    document.getElementById("cityImg").src = image.urls.thumb
    document.getElementById("cityName").innerHTML= document.getElementById("input").value;
}

function showData(forecast){

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let day1 = new Date(forecast.list[7].dt_txt);
    let day2 = new Date(forecast.list[15].dt_txt);
    let day3 = new Date(forecast.list[23].dt_txt);
    let day4 = new Date(forecast.list[31].dt_txt);
    let day5 = new Date(forecast.list[39].dt_txt);

    /*
    let now = new Date();
    let time = now.getHours();

    for (i=0; i <= 24; i++){
         if (time <=12 && time > 15 ){block[0]}
        else if (time <=9 && time > 12 ){block[1]}
        else if (time <=6 && time > 9){block[2]}
        else if (time <=3 && time > 6){block[3]}
        else if (time <=0 && time > 3){block[4]}
        else if (time <=21 && time > 24){block[5]}
        else if (time <=18 && time > 21){block[6]}
        else if (time <=15 && time > 18){block[7]}
       
    }
    */

    document.getElementById("date1").innerHTML = weekday[day1.getDay()];
    document.getElementById("img1").src = `https://openweathermap.org/img/wn/${forecast.list[7].weather[0].icon}@2x.png`;
    //document.getElementById("temp1").innerHTML = forecast.list[7].main.temp + " °C";
    document.getElementById("desc1").innerHTML = forecast.list[7].weather[0].description;

    document.getElementById("date2").innerHTML = weekday[day2.getDay()];
    document.getElementById("img2").src = `https://openweathermap.org/img/wn/${forecast.list[15].weather[0].icon}@2x.png`;
    //document.getElementById("temp2").innerHTML = forecast.list[15].main.temp + " °C";
    document.getElementById("desc2").innerHTML = forecast.list[15].weather[0].description;

    document.getElementById("date3").innerHTML = weekday[day3.getDay()];
    document.getElementById("img3").src = `https://openweathermap.org/img/wn/${forecast.list[23].weather[0].icon}@2x.png`;
    //document.getElementById("temp3").innerHTML = forecast.list[23].main.temp + " °C";
    document.getElementById("desc3").innerHTML = forecast.list[23].weather[0].description;

    document.getElementById("date4").innerHTML = weekday[day4.getDay()];
    document.getElementById("img4").src = `https://openweathermap.org/img/wn/${forecast.list[31].weather[0].icon}@2x.png`;
    //document.getElementById("temp4").innerHTML = forecast.list[31].main.temp + " °C"
    document.getElementById("desc4").innerHTML = forecast.list[31].weather[0].description;

    document.getElementById("date5").innerHTML = weekday[day5.getDay()];
    document.getElementById("img5").src = `https://openweathermap.org/img/wn/${forecast.list[39].weather[0].icon}@2x.png`;
    //document.getElementById("temp5").innerHTML = forecast.list[39].main.temp + " °C";
    document.getElementById("desc5").innerHTML = forecast.list[39].weather[0].description;

}

