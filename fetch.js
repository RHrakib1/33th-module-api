// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))




// fetch(url)
//  .then(response => response.json())
//  .then(json => console.log(json))


// fetch l call krle j data se seta pabo setak abr .json a convart krbo 
const url = 'https://jsonplaceholder.typicode.com/todos/1';
function loadData() {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}