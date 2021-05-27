const container = document.getElementById("container");
const btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener("click", ()=> {
    const titulo = document.getElementById("titulo").value;
    const artista = document.getElementById("artista").value;
    const lanzamiento = document.getElementById("lanzamiento").value;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", ()=>{
        let respuesta = JSON.parse(xhr.responseText);
        container.innerHTML = "";
        respuesta.forEach(element => {
        });
        
        respuesta.forEach(element => {
                container.innerHTML += `
                <div class="card text-center">
                    <img src="${element.tapa}" class="card-img-top" alt="Tapa de ${element.titulo}">
                    <div class="card-body">
                    <h5 class="card-title">${element.artista}</h5>
                    <p class="card-text">${element.titulo} - ${element.lanzamiento}</p>
                    </div>
                </div>
                `    
        });
    });

    let filtros = "";
    if(titulo){
        filtros += "titulo=" + titulo;
    }
    if(artista){
        filtros += "&artista=" + artista;
    }
    if(lanzamiento){
        filtros += "&lanzamiento=" + lanzamiento;
    }

    xhr.open("GET", "/disco?" + filtros);
    xhr.send();
});