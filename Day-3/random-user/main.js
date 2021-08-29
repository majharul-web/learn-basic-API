const loadData = async () => {
  const res = await fetch('https://randomuser.me/api/?results=50');
  const data = await res.json();
  showData(data.results);
};

loadData();

const showData = (data) => {
  const container = document.getElementById('user-container');

  data.forEach((element) => {
    //destructuring start -->
    const {
      name: { title, first, last },
      picture: { medium },
      location: {
        street: { number, name },
        city,
        coordinates: { latitude, longitude },
        timezone: { offset, description },
      },
    } = element;

    /* console.log(title, first, last);
    console.log(medium);
    console.log(number, name, city);
    console.log(latitude, longitude);
    console.log(offset, description); */
    // destructuring end  -->

    // show data

    const div = document.createElement('div');
    div.innerHTML = `
        <h1 class="text-danger">Name:${title} ${first} ${last}</h1>
        <img src="${medium}" alt="" />

        <p>street is:${number}</p>
        <div>
  <h3>My Location</h3>
  <p>Street no:${number}</p>
  <p>Street name:${name}</p>
  <p>city :${city}</p>
  <p>latitude no:${parseInt(latitude)}</p>
  <p>longitude no:${parseInt(longitude)}</p>
  <h5>Current Time:${offset}</h5>
  <h6>Location:${description}</h6>
</div>

    `;
    container.appendChild(div);
  });
};
