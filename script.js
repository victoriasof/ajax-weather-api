


document.getElementById("search").addEventListener("click", ()=>{

    let city= document.getElementById("input").value;
    let apiKeyUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=8fb9457f203009590ef435a9f37072b6`

    fetch(apiKeyUrl)
        .then(response => response.json())
        .then(data => showData(data))
        .catch(err => console.error(err));

    /*
    fetch(`https://api.unsplash.com/photos/random?query=${city}&client_id=So61IiiIyjV1LZs7oCUzjSKdKmKAYHt8O93pE88X9E0`)
        .then(response => response.json())
        .then(data => showImage(data))
        .catch(err => console.error(err));
    */

})

/*
function showImage(image){
    document.getElementById("cityImg").src = image.urls.thumb
}
*/



function showData(forecast){

    document.getElementById("date1").innerHTML = forecast.list[8].dt_txt
    //document.getElementById("img1").src = forecast.list[8].weather.icon
    document.getElementById("temp1").innerHTML = forecast.list[8].main.temp
    document.getElementById("desc1").innerHTML = forecast.list[8].weather[0].description

    document.getElementById("date2").innerHTML = forecast.list[16].dt_txt
    //document.getElementById("img2").src = forecast.list[16].weather.icon
    document.getElementById("temp2").innerHTML = forecast.list[16].main.temp
    document.getElementById("desc2").innerHTML = forecast.list[16].weather[0].description

    document.getElementById("date3").innerHTML = forecast.list[24].dt_txt
    //document.getElementById("img3").src = forecast.list[24].weather.icon
    document.getElementById("temp3").innerHTML = forecast.list[24].main.temp
    document.getElementById("desc3").innerHTML = forecast.list[24].weather[0].description

    document.getElementById("date4").innerHTML = forecast.list[32].dt_txt
    //document.getElementById("img4").src = forecast.list[32].weather.icon
    document.getElementById("temp4").innerHTML = forecast.list[32].main.temp
    document.getElementById("desc4").innerHTML = forecast.list[32].weather[0].description

    document.getElementById("date5").innerHTML = forecast.list[39].dt_txt
    //document.getElementById("img5").src = forecast.list[39].weather.icon
    document.getElementById("temp5").innerHTML = forecast.list[39].main.temp
    document.getElementById("desc5").innerHTML = forecast.list[39].weather[0].description

}
