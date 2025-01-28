document.addEventListener('DOMContentLoaded',()=>{

    let cityinput = document.getElementById('city-input');
    let getweatherbtn = document.getElementById('get-weather-btn');
    let weatherinfo = document.getElementById('weather-info');
    let cityname = document.getElementById('city-name');
    let temperature = document.getElementById('temperature');
    let description = document.getElementById('description');
    let errormessage = document.getElementById('error-message');


    const API_KEY = '0d29292fcd93cccac704d70c90799b6a';

    getweatherbtn.addEventListener('click', async()=>{
        const cityname = cityinput.value.trim();

        if(cityname.length>0){

      try {
         const response = await featchcitydata(cityname);
         display(response);
      } catch (error) {
        showerror(error.message);
      }

        }else{
            alert("please enter city name first");
        }
    })

  async function featchcitydata(city){

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

const res = await fetch(url);

                 if (!res.ok) {
                 throw new Error("City not found"); 
               }

               const data = await res.json();
return data;

   }

function display(data){

    const {name , main , weather} = data;
   

    cityname.textContent = name;
    temperature.textContent = `Temperature : ${main.temp}°C`;
    description.textContent = `Weather : ${weather[0].description}`;
    

    weatherinfo.classList.remove('hidden');
    errormessage.classList.add('hidden');
}

   function showerror(){
    weatherinfo.classList.add('hidden');
    errormessage.classList.remove('hidden');

   }

})