const imgPath = 'https:';
const search = document.getElementById('search');

async function getLocation(location){
    const api_url = `http://api.weatherapi.com/v1/forecast.json?key=66969d88c3924bd892a112402211407&q=${location}&days=3&aqi=yes&alerts=no`;
    const resp = await fetch(api_url);
    const data = await resp.json();

    toPage(data);
    console.log(data);
}

function toPage(data1){
    const weather = document.createElement('div');
    const forecast0 = document.getElementById('date')
    const thepls0 = document.getElementById('pls');
    const forecast1 = document.getElementById('date1')
    const thepls1 = document.getElementById('pls1');
    const forecast2 = document.getElementById('date2')
    const thepls2 = document.getElementById('pls2');

    //cleanup
    forecast0.innerHTML = '';
    thepls0.innerHTML = '';
    forecast1.innerHTML = '';
    thepls1.innerHTML = '';
    forecast2.innerHTML = '';
    thepls2.innerHTML = '';
    

    function box1(){
        const {date} = data1.forecast.forecastday[0];
        const {name} = data1.location;
        const dateele = document.getElementById('date');
        const cityName = document.getElementById('text');

        cityName.innerHTML =`
        <h2>${name}</h2>
        `

        dateele.innerHTML = `
        <d>${date}</d>
        `

        for(i=0; i<24; i++){
            const {icon,text} = data1.forecast.forecastday[0].hour[i].condition;
            const {temp_c,chance_of_rain} = data1.forecast.forecastday[0].hour[i]

            const hourElement = document.createElement('div');
            hourElement.classList.add('hours');
            
            hourElement.innerHTML = `
            <img src='${imgPath + icon}' />
            <i>${i}:00</i>
            <c>${temp_c}°</c>
            `
            
            
            document.getElementById('pls').appendChild(hourElement);
        }
    }

    function box2(){
        const {date} = data1.forecast.forecastday[1];
        const dateele = document.getElementById('date1');

        dateele.innerHTML = `
        <d>${date}</d>
        `

        for(i=0; i<24; i++){
            const {icon,text} = data1.forecast.forecastday[1].hour[i].condition;
            const {temp_c,chance_of_rain} = data1.forecast.forecastday[1].hour[i]

            const hourElement = document.createElement('div');
            hourElement.classList.add('hours');
            
            hourElement.innerHTML = `
            <img src='${imgPath + icon}' />
            <i>${i}:00</i>
            <c>${temp_c}°</c>
            `
            
            
            document.getElementById('pls1').appendChild(hourElement);
        }
    }

    function box3(){
        const {date} = data1.forecast.forecastday[2];
        const dateele = document.getElementById('date2');

        dateele.innerHTML = `
        <d>${date}</d>
        `
        
        for(i=0; i<24; i++){
            const {icon} = data1.forecast.forecastday[2].hour[i].condition;
            const {temp_c,chance_of_rain} = data1.forecast.forecastday[2].hour[i]

            const hourElement = document.createElement('div');
            hourElement.classList.add('hours');
            
            hourElement.innerHTML = `
            <img src='${imgPath + icon}' />
            <i>${i}:00</i>
            <c>${temp_c}°</c>
            `
            
            
            document.getElementById('pls2').appendChild(hourElement);
        }
    }

    box1();
    box2();
    box3();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    if (location){
        getLocation(location);
    }
});