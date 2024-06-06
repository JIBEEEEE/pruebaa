function estilos(ruta) {
    const link = document.createElement("link");
    link.setAttribute("rel","stylesheet");
    link.setAttribute("href", ruta);
    document.head.appendChild(link);
}

estilos("./estilos.css")

// categorias y productos//

const milista = [];
const categoria = [

    "bebidas y frutas",
    "verduras y vegetales",
    "pasta y legumbres",
    "carne y embutido",
    "pescado y marisco",
    "desayuno y merienda"
]

const productos = [
    [
    "agua",
    "zumo",
    "refrescos",
    "banana",
    "manzana",
],
[
    "lechuga",
    "tomate",
    "calabaza",
    "berenjena",
    "cebolla",
    "zanahoria",
    
],
[
    "fideos",
    "ñoquis",
    "ravioles",
    "macarrones",
    "lazaña",
    
],
[
    "vacio",
    "chorizo",
    "morcilla",
    "riñon",
    "entraña",
    
],
[
    "merluza",
    "salmon",
    "tilapia",
    "anchoa",
    "mejillon",
],
[
    "leche",
    "cafe",
    "chocolatada",
    "te",
    "pan",
],


]

for (let i = 0; i<productos.length;i++){

    productos[i].sort();
}

const ID = document.getElementById("lista-de-la-compra");
const MAIN = ID.querySelector("main");
const Nav = ID.querySelector("nav");
const INFO = ID.querySelector("div");

//menu categorias// 

function menuDeCategorias(){
    const cats = document.createElement("div");
    cats.innerHTML="<div id='mi-lista'> mi lista de la compra</div>";
    categoria.forEach((item) => {
    const div = document.createElement("div");
    div.setAttribute("cat", item)
    div.textContent=item;
    cats.appendChild(div);
 });
 Nav.appendChild(cats);
}


function monstrarProductos (array){
MAIN.innerHTML = "";

array.forEach((item) => {
const div = document.createElement ("div");
div.className = "producto" ;
div.textContent= item;
MAIN.appendChild(div);
});
}



function mostrarMiLista(){
for (let i=0; i<milista.length;i++){
    milista.sort();
}    
MAIN.innerHTML="";


milista.forEach(item =>{
const div = document.createElement("div")
div.className="item"
div.textContent=item
MAIN.appendChild(div)
})


}



document.body.addEventListener("click", (event)=> {
categoria.forEach((item, i) =>  {
    if (event.target.getAttribute("cat") == item)
        monstrarProductos(productos[i]) ;

});

if (event.target.className == "producto"){
let producto = event.target.textContent;
let existe=false;

for (let i=0; i <milista.length; i++)
    if (producto==milista[i]){
       existe = true;
       break;

    }

    if (!existe) {
        milista.push(producto);
        INFO.textContent = "se a agregado " + producto +" a tu lista";
        setTimeout(() =>(INFO.textContent=="item"), 1000)

    } else {
        INFO.textContent = producto + " ya esta en tu lista";
        setTimeout(() =>(INFO.textContent=="item"), 1000)
    }
} else if (event.target.className == "item"){

        const item = milista.find(
            (elemento) => elemento == event.target.textContent
        );
           delete milista [milista.indexOf(item)];
           mostrarMiLista();
           INFO.textContent = "se a eliminado " + item +" de tu lista";
        setTimeout(() =>(INFO.textContent=="item"), 1000)
    }

    if (event.target.id == "mi-lista")mostrarMiLista();
});
        



menuDeCategorias();
mostrarMiLista();





