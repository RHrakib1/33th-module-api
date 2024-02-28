function photo() {
    const url = ('https://jsonplaceholder.typicode.com/photos')
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoto(data))
}
function displayPhoto(dataPic){
    const divId = document.getElementById('photoPic')
    for(const pic of dataPic){
        const div = document.createElement('div')
        div.innerHTML=`
        <h1>id:${pic.id}</h1>
        <h3>title:${pic.title}</h3>
       
        `
        divId.appendChild(div)
    }

}
photo()