const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
// countries
const displayCountries = countires => {
    //     for (const country of countires) {
    //         console.log(country);
    //     }
    const countiresDiv = document.getElementById('countries');
    countires.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital
        div.appendChild(p);
        countiresDiv.appendChild(div);
    });
}