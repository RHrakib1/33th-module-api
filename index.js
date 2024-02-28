function loadDataUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}
// for loop use kore sob obj pabo 
// obj paoyar por conosle a "user.emial likhle sob email peye jabo"
function displayUser(data) {
    console.log(data);
    for (const user of data) {
        console.log(user.name);
    }
}



// example 
function loaduser3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res3 => res3.json())
        .then(data3 => displayuser3(data3))
}
function displayuser3(data3) {
    const ul = document.getElementById('list-user');
    for(const user of data3){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li);
    }
}