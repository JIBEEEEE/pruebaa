function estilos(ruta) {
    const link = document.createElement("link");
    link.setAttribute("rel","stylesheet");
    link.setAttribute("href",ruta);
    document.head.appendChild(link);
}