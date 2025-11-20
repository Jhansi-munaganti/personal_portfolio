async function getWeather() {
    let city=document.getElementById("cityInput").value;
    if(city==="")return;
     
    let apikey="6db8f582c81286569868538b363b4f44";//replace with your OpenWeather API key
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

    try{
        let response=await fetch(url);
        let data=await response.json();
        if(data.cod===200){
            document.getElementById("weatherResult").innerHTML=
            `Temperature:${data.main.temp}℃<br>condition: ${data.weather[0].description}`;
        
        }else{
            document.getElementById("weatherResult").innerHTML="city not found";
        }
    }catch(error) {
        document.getElementById("weatherResult").innerHTML="Error fetching data";
    }
}