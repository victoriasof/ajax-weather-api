
document.getElementById("search").addEventListener("click", async()=>{

    let city= document.getElementById("input").value;
    let apiKeyUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=8fb9457f203009590ef435a9f37072b6`


    await fetch(apiKeyUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => showData(data))
        .catch(err => console.error(err));

})

function showData(weather){



}