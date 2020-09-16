


document.getElementById("search").addEventListener("click", ()=>{

    let city= document.getElementById("input").value;
    let apiKeyUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=8fb9457f203009590ef435a9f37072b6`

    fetch(apiKeyUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => showData(data))
        .catch(err => console.error(err));

    fetch(`https://api.unsplash.com/photos/random?query=${city}&client_id=So61IiiIyjV1LZs7oCUzjSKdKmKAYHt8O93pE88X9E0`)
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => showImage(data))
        .then(err => console.error(err));


})


function showImage(city){

    document.getElementById("cityImg").src = city.urls.regular

}


function showData(weather){



}
