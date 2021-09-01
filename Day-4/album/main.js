const loadData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();
  showData(data);
};
loadData();

const showData = (data) => {
  //   console.log(data[0]);
  const cardContainer = document.getElementById('card-row');
  data.forEach((album) => {
    const { title, url, thumbnailUrl, id } = album;
    // console.log(title, url, thumbnailUrl, id);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card">
            <img src="${thumbnailUrl}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <button onclick="getDetails('${id}')" class="btn btn-danger">see details</button>
            </div>
        </div>
    `;
    cardContainer.appendChild(div);
  });
};

const getDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = await res.json();
  showDetails(data);
};

const showDetails = (album) => {
  console.log(album);
  const { title, url, thumbnailUrl, id } = album;
  const details = document.getElementById('single');

  details.innerHTML = `
        <div class="card w-50">
            <img src="${thumbnailUrl}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <button onclick="hideDetails()" class="btn btn-danger">hide details</button>
            </div>
        </div>
    `;
};

const hideDetails = () => {
  document.getElementById('single').textContent = '';
};
