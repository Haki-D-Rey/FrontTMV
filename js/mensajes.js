const iniciarScripts = () => {
  const cabeza = document.querySelector('#cabeza'),
    alternador = document.querySelector('#alternador'),
    menu = document.querySelector('#nav'),
    fondo = document.querySelector('#fondo'),
    body = document.querySelector('body'),
    bandejaContenedor = document.querySelector('#bandeja'),
    chatContenedor = document.querySelector('#chat'),
    chatPerfil = document.querySelector('#chatPerfil'),
    usuarios = document.querySelectorAll('#usuario'),
    detallesContenedor = document.querySelector('#detalles'),
    retrocederABandeja = document.querySelector('#aBandeja'),
    retrocederAChats = document.querySelector('#aChat'),
    buscador = document.querySelector('#busqueda');

  /* Eventos generales */
  cambiarFondoScroll(cabeza);
  eventosMenu(alternador, menu, fondo, body);
  buscarProducto(buscador);
  /* Fin eventos generales */

  irAContenedorChats(usuarios, bandejaContenedor, chatContenedor);
  regresarABandeja(retrocederABandeja, bandejaContenedor, chatContenedor);
  irADetalles(chatPerfil, chatContenedor, detallesContenedor);
  regresarAContenedorChats(retrocederAChats, chatContenedor, detallesContenedor);
}

window.addEventListener('load', iniciarScripts);