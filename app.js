const apikey="c67139e700a57b28d5e81554d1a34edd";
const weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}&units=metric`;
  const  response= await fetch(url);
  if(response.status==404){
    document.querySelector(".error").style.display="block";
  }
  else{
    document.querySelector(".error").style.display="none";

   let res=await response.json();

  let cityinfo=document.querySelector(".city");
  cityinfo.innerHTML=res.name;

  let  temp=document.querySelector(".temp");
  temp.innerHTML=`${Math.round(res.main.temp)}°c`;

  let  humidity=document.querySelector(".humidity");
  humidity.innerHTML=`${res.main.humidity}%`;

  let  wind=document.querySelector(".wind-speed");
  wind.innerHTML=`${res.wind.speed}km/h`;
  
  console.log(res.weather[0].main);
  
  if(res.weather[0].main=="Clouds"){
       weatherIcon.src="images/clouds.png";
  }
 else if(res.weather[0].main=="Snow"){
       weatherIcon.src="images/snow.png";
  }
  else if(res.weather[0].main=="Rain"){
       weatherIcon.src="images/rain.png";
  }
 else if(res.weather[0].main=="Wind"){
       weatherIcon.src="images/wind.png";
  }
  else if(res.weather[0].main=="Mist"){
       weatherIcon.src="images/mist.png";
  }
  else if(res.weather[0].main=="Clear"){
       weatherIcon.src="images/clear.png";
  }
 }
}
const input=document.querySelector("#search-box");
const btn=document.querySelector(".search-btn");
 btn.addEventListener("click",()=>{
    let city=input.value;
    checkweather(city);
});