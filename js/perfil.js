const iniciarScripts = () => {
  const cabeza = document.querySelector('#cabeza'),
    alternador = document.querySelector('#alternador'),
    menu = document.querySelector('#nav'),
    fondo = document.querySelector('#fondo'),
    body = document.querySelector('body'),
    abrirCamaraElementos = document.querySelectorAll('#abrirCamara'),
    cerrarCamaraElemento = document.querySelector('#cerrar-camara'),
    contenedorCamara = document.querySelector('#contenedorCamara'),
    video = document.querySelector('#video'),
    canva = document.querySelector('#canvas'),
    buscador = document.querySelector('#busqueda');

  /* Eventos generales */
  cambiarFondoScroll(cabeza);
  eventosMenu(alternador, menu, fondo, body);
  buscarProducto(buscador);
  /* Fin eventos generales */

  abrirCamara(abrirCamaraElementos, contenedorCamara);
  cerrarCamara(cerrarCamaraElemento, contenedorCamara, video, canva);
}

window.addEventListener('load', iniciarScripts);