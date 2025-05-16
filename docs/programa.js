var map = L.map('map').setView([4.628108163491138, -74.06593836859484], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.628108163491138, -74.06593836859484]).addTo(map);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

// Abrir archivo GeoJSON
// JavaScript se ejecuta de tal manera que si una línea de código se demora, se pasa a la siguiente sin esperar.
// Esto puede generar problemas cuando se requiere secuencialidad .

async function cargarpuntos (){
    var miArchivo= await fetch("microondas.geojson");

    //Convertir el contenido a json: objeto js
    var datos= await miArchivo.json();
    //Obtener el arreglo de la llave features que es un conjunto de objetos tipo feature
    let listaFeatures= datos["features"];

    //Obtener la geometria del primer elemento

    console.log(datos);
    for(let i = 0; i<10; i++){
        console.log(datos["features"][i]);
        let miscoordenadas = listaFeatures[i]["geometry"]["coordinates"];

        var miMarcador= L.marker(miscoordenadas);
        miMarcador.addTo(map);
    }
}

cargarpuntos();

