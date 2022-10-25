let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    let body = ""
    for (var i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }
    document.getElementById('data').innerHTML = body

}


function fuentedatos(JSON = "JSON Placeholder") {
    document.write(`<footer class="pie">Los datos tomados provienen de <a href="https://jsonplaceholder.typicode.com/users/" target="_blank">${JSON}</a><br></footer>`)
}

fuentedatos();

function sumarNumeros(a, b, c) {
    let suma = a + b + c;
    return (suma);
}

let resultado = sumarNumeros(8, 30, 1);
document.write(resultado)