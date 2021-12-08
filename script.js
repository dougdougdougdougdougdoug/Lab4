var input = document.querySelector('.zipCode');
var button = document.querySelector('.button');
var zipCode = document.querySelector('.zipCode');
var condition = document.querySelector('.condition');
var temperature = document.querySelector('.temperature');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?zip='+zipCode.value+',us&appid=e598fb661c91a91421649a50c9b21fed&units=metric')
    .then(response => response.json())
    .then(data => {
    
        var temperatureValue = data['main']['temp'];
        var conditionValue = data['weather'][0]['description'];
        var conditionID = data['weather'][0]['id'];

        temperature.innerHTML = temperatureValue + " C";
        condition.innerHTML = conditionValue;
        zipCode.value = "";
        if(conditionID >= 300 && conditionID <= 531){
            document.body.style.backgroundImage = "url('rain.jpeg')";
        }
        else if(conditionID >= 200 && conditionID <= 232){
            document.body.style.backgroundImage = "url('thunder.jpeg')";
        }
        else if(conditionID >= 600 && conditionID <= 622){
            document.body.style.backgroundImage = "url('snow.jpeg')";
        }
        else if(conditionID >= 700 && conditionID <= 781){
            document.body.style.backgroundImage = "url('smokemist.jpeg')";
        }
        else if(conditionID == 800){
            document.body.style.backgroundImage = "url('clearsky.jpeg')";
        }
        else if(conditionID >= 801 && conditionID <= 804){
            document.body.style.backgroundImage = "url('cloudy.jpeg')";
        }
        

    })



})




