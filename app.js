let apiKey="af65669d560ccc364eb918fc9af9dc22";
let btn=document.getElementById("btn");
let cityInput=document.getElementById("city")
let search=document.querySelector(".search");


cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") { 
    btn.click();
    
  }
});


btn.addEventListener("click",()=>{
 let city=document.getElementById("city").value;
 if(city===""){
  alert("Please enter a city name")
  return
 }
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//console.log(city);
// =====================GET DATE=================;
    const today=new Date();
    let date=today.getDate();
    let month=today.getMonth();
    let year=today.getFullYear();
    let months=["Jan","Febr","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"];
  let monthName=months[month]

 fetch(url)
 .then(res=>{
  if(res.status===404){
    throw new Error("City not found ❌")
  }
  if(!res.ok){
    throw new Error("Something went wrong 😢")
  }
  return res.json()})
 .then(data=>{
    console.log(data);
    let cityName=document.querySelector(".cityname");
    cityName.classList.add("cityname")
    cityName.innerHTML=`<span><i class="fa-solid fa-location-dot"></i>${data.name}</span>`;
    let clouds=document.querySelector(".clouds");
    clouds.classList.add("clouds")
    clouds.innerHTML=`<h1>${data.weather[0].main}</h1><span>${date},${monthName},${year}</span>`;
    let imG=document.querySelector(".imag");
    console.log(imG);
    
    if(data.weather[0].main=="Clouds"){
      imG.src="Images/cloudy.png"

    }
      else if(data.weather[0].main=="Clear"){
      imG.src="Images/clear-sky.png"

    }
     else if(data.weather[0].main=="Haze"){
      imG.src="Images/haze.png"

    }
     else if(data.weather[0].main=="Smoke"){
      imG.src="Images/smoke.png"

    }
    else if(data.weather[0].main=="Dust"){
      imG.src="Images/dust.png"

    }
    else if(data.weather[0].main=="Fog"){
      imG.src="Images/fog.png"

    }
     else if(data.weather[0].main=="Mist"){
      imG.src="Images/mist.png"

    }
    else if(data.weather[0].main=="Snow"){
      imG.src="Images/snow.png"

    }
    else if(data.weather[0].main=="Rain"){
      imG.src="Images/rainy-day.png"

    }


    let temp=document.querySelector(".temp");
    temp.classList.add("temp")
    temp.innerHTML=`<span>Temp ${data.main.temp}°C</span><span>Feels Like ${data.main.feels_like}</span>`;
    let humidity=document.querySelector(".humdty");
    humidity.classList.add("humdty")
    humidity.innerHTML=`<span><img src="Images/humidity (3).png"></span><span>humidity <br> ${data.main.humidity}%</span>`;
    let wind=document.querySelector(".wind");
    wind.classList.add("wind")
    wind.innerHTML=`<span><img src="Images/wind (3).png"></span><span>Wind Speed <br>${data.wind.speed}M/s</span>`

    cityInput.value=""
    search.style.display="none"
   
})
.catch(err=>{
  alert(err.message)
})
})



