const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => showCountry(data))
}
loadCountry()

const showCountry = countries => {
    // console.log(countries)
    const countryContainer = document.getElementById('container');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h1>Country Name:${country.name}</h1> 
        <p>capital:${country.capital}</p> 
        <button onclick="moreInfo('${country.name}' )">More Info</button>  
        `
        countryContainer.appendChild(div);
    })
}

const moreInfo = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`

    fetch(url)
        .then(res => res.json())
        .then(data => countryDetails(data[0]))

}

const countryDetails = (country) => {
    const details = document.getElementById('details')
    details.innerHTML = `
    <h3>country:${country.name}</h3>
    <p>population:${country.population}</p>
    <img width="100px" src="${country.flag}">

    `
}