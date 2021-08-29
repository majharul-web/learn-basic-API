const loadData = async () => {
  const url = `https://jsonplaceholder.typicode.com/comments`;
  /* fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data[0].name)); */

  // async
  const res = await fetch(url);
  const data = await res.json();
  displayData(data);
};
loadData();

// displayData
const displayData = (data) => {
  const commentDiv = document.getElementById('comment-container');

  data.forEach((element) => {
    const { name, email, body, id } = element;

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="shadow-lg rounded-3 p-3" style="height: 310px;">
    <h4 class="fw-bold"><span class="text-warning">Name:</span>${name}</h4>
    <p class="fw-bold text-primary"><span class="text-danger">Email:</span>${email}</p>
    <p>
        <span class="fw-bold    text-primary">Description</span>
        ${body}
    </p>

    <button onclick="setDetails('${id}')" class="btn btn-danger">Details</button>
    </div>
       
    `;
    commentDiv.appendChild(div);
  });
};

const setDetails = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
  //   console.log(url);

  // async
  const res = await fetch(url);
  const data = await res.json();
  showDetails(data);
};

const showDetails = (data) => {
  window.scrollTo(0, 20);

  const { name, email, body, postId, id } = data;

  const detailsContain = document.getElementById('single-comment');

  detailsContain.innerHTML = `
      <div  class="w-50 p-5 mx-auto shadow-lg rounded-3" >
      <h4 class="fw-bold"><span class="text-warning">Post Id:</span>${postId}</h4>
      <h4 class="fw-bold"><span class="text-warning">Id:</span>${id}</h4>
      <h4 class="fw-bold"><span class="text-warning">Name:</span>${name}</h4>
      <p class="fw-bold text-primary"><span class="text-danger">Email:</span>${email}</p>
      <p>
        <span class="fw-bold text-primary">Description</span>
        ${body}
      </p>

      <button onclick="hideData()" class="btn btn-danger">Hide</button>
    </div>
        
  `;
};

// hide data
const hideData = () => {
  document.getElementById('single-comment').textContent = '';
};

// hide all comment
const hideAllData = () => {
  document.getElementById('main').textContent = '';
};
