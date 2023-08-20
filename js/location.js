const API_KEY = "c410463b0844d1a3ef9f2922a0d338e4";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    // 실제로 사용자가 url에 갈 필요없이 js가 대신 url을 부른다.
    // url 주소 뒤에 units=metric을 통해 단위 적용한 값을 가져올 수 있다.
    // fetch는 promise에 해당(당장 일어나지 않고 시간이 좀 걸린 뒤에 실행되는 것)
    .then((response) => response.json()) // url로 부터 텍스트로 되어 있는 json을 추출
    .then((data) => {
      const location = document.querySelector(".location");
      const weather = document.querySelector(".weather");
      location.innerText = `📌${data.name}`;
      weather.innerText = `🍀${data.weather[0].main} / ${data.main.temp}°C`;
      // json으로부터 원하는 데이터를 추출해서 html에 추가
    });
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
