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
        if(conditionID >= 701){
            document.body.style.backgroundImage = "url('rain.jpeg')";
        }
    })



})




