const cambiarFondoScroll = (cabeza) =>
  window.addEventListener('scroll', () => {
    window.scrollY >= 70
      ? cabeza.classList.add('scroll')
      : cabeza.classList.remove('scroll');
  });

const manejarMenu = (menu, fondo, body) => {
  menu.classList.toggle('active');
  fondo.classList.toggle('active');
  manejarAlturaBody(fondo, body);
}

const manejarAlturaBody = (fondo, body) =>
  fondo.classList.contains('active') && window.innerWidth < 992
    ? body.style.overflow = 'hidden'
    : body.style.overflow = 'auto';

const eventosMenu = (alternador, menu, fondo, body) => {
  alternador.addEventListener('click', () => manejarMenu(menu, fondo, body));
  fondo.addEventListener('click', () => manejarMenu(menu, fondo, body));
}

const irAContenedorChats = (evElementos, bandejaContenedor, chatContenedor) =>
  evElementos.forEach(el =>
    el.addEventListener('click', () => {
      bandejaContenedor.classList.remove('mostrar');
      chatContenedor.classList.add('mostrar');
    })
  );

const irADetalles = (evElemento, chatContenedor, detallesContenedor) =>
  evElemento.addEventListener('click', () => {
    chatContenedor.classList.remove('mostrar');
    detallesContenedor.classList.add('mostrar');
  });

const regresarABandeja = (evElemento, bandejaContenedor, chatContenedor) =>
  evElemento.addEventListener('click', () => {
    chatContenedor.classList.remove('mostrar');
    bandejaContenedor.classList.add('mostrar');
  });

const regresarAContenedorChats = (evElemento, chatContenedor, detallesContenedor) =>
  evElemento.addEventListener('click', () => {
    detallesContenedor.classList.remove('mostrar');
    chatContenedor.classList.add('mostrar');
  });

const buscarProducto = evElemento => 
  evElemento.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'buscar.html';
  });