const apiKey = 'a0280d2c2fcbd4b1a72d00d8999686b5';
const city = 'Dinajpur';
const state = 'BD-14';
const getData = async (city, state, apiKey) => {
  const res = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}`);
  const data = await res.json();
  console.log(data);
};
getData(city, state, apiKey);
