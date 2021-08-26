const myObj = {
  name: 'jony',
  id: 113,
  tech: ['react', 'angular', 'node-js'],
};

const stringyfield = JSON.stringify(myObj);
console.log(stringyfield);

const newMyObj = JSON.parse(stringyfield);
console.log(newMyObj);
