const iniciarScripts = () => {
  const cabeza = document.querySelector('#cabeza'),
    alternador = document.querySelector('#alternador'),
    menu = document.querySelector('#nav'),
    fondo = document.querySelector('#fondo'),
    body = document.querySelector('body'),
    buscador = document.querySelector('#busqueda');

  /* Eventos generales */
  cambiarFondoScroll(cabeza);
  eventosMenu(alternador, menu, fondo, body);
  buscarProducto()
  buscarProducto(buscador);
  /* Fin eventos generales */
}

window.addEventListener('load', iniciarScripts);