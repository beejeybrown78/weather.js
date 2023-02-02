const apiKey = "4803d0adb8a74a3297e144040232301";



const header = document.querySelector('.header');
const form = document.querySelector('.form');
const input = document.querySelector('.input');



form.onsubmit = function (e){
    e.preventDefault()
   let city = input.value.trim();

    /ЗАПИТ НА СЕРВЕР/ 

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    fetch(url).then( (res) =>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        console.log(data.location.name);
        console.log(data.location.country);
        console.log(data.current.temp_c);
        console.log(data.current.condition.text);


        // /ВИДАЛЕННЯ КАРТОК/

        const prevCard = document.querySelector('.card');
            if(prevCard) prevCard.remove();
        

        /размітка для карточки/

        const html = ` <div class="card">
            <h2 class="card__city">${data.location.name}<span>${data.location.country}</span></h2>
            <div class="card_weather">
                <div class="card__value">${data.current.temp_c}<sup>°С</sup></div>
            
            <img class="card__img" src="./image/weather.png" alt="">
        </div>
        <div class="card__description">${data.current.condition.text}</div>
        </div>`


       
        header.insertAdjacentHTML('afterend', html)
      
    })
    
    
}