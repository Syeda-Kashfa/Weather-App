let apiKey="af65669d560ccc364eb918fc9af9dc22";
let btn=document.getElementById("btn")

btn.addEventListener("click",()=>{
 let city=document.getElementById("city").value;
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//console.log(city);
city= " ";

 fetch(url)
 .then(res=>res.json())
 .then(data=>{
    console.log(data);
    let cityName=document.querySelector(".cityname");
    cityName.innerHTML=`<h1>${data.name}</h1>`;
    let clouds=document.querySelector(".clouds");
    clouds.innerHTML=`<h1>${data.weather[0].main}</h1>`;
    let imG=document.querySelector(".imag");
    console.log(imG);
    
    if(data.weather[0].main=="Clouds"){
      imG.src="Images/weather.png"

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
 else if(data.weather[0].main=="Sunny"){
      imG.src="Images/haze.png"

    }


    let temp=document.querySelector(".temp");
    temp.innerHTML=`<h1>${data.main.temp}</h1>`;
    let humidity=document.querySelector(".humidity");
    humidity.innerHTML=`<h1>${data.main.humidity}</h1>`;
    let wind=document.querySelector(".wind");
    wind.innerHTML=`<h1>${data.wind.speed}</h1>`

  
    
    
 })

})



