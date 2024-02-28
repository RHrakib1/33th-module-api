function loaddata2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}




// aita kore array of user pabo
function lodeUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res1 => res1.json())
        .then(data1 =>  display(data1))
}
function display(data){
    console.log(data);
}