const iniciarScripts = () => {
  const cabeza = document.querySelector('#cabeza'),
    alternador = document.querySelector('#alternador'),
    menu = document.querySelector('#nav'),
    fondo = document.querySelector('#fondo'),
    body = document.querySelector('body'),
    [btnFormulario, btnFormularioAcciones] = document.querySelectorAll('#btn-formulario'),
    contenedorFormularios = document.querySelector('#contenedor-formularios'),
    cerrarFormulario = document.querySelector('#ocultar-formulario'),
    formIngreso = document.querySelector('#ingreso'),
    formRegistro = document.querySelector('#registro'),
    linkIngreso = document.querySelector('#link-ingreso'),
    linkRegistro = document.querySelector('#link-registro'),
    contenedorFormulariosRes = document.querySelector('#contenedor-formularios-res'),
    cerrarFormularioRes = document.querySelector('#ocultar-formulario-res'),
    formIngresoRes = document.querySelector('#ingreso-res'),
    formRegistroRes = document.querySelector('#registro-res'),
    linkIngresoRes = document.querySelector('#link-ingreso-res'),
    linkRegistroRes = document.querySelector('#link-registro-res'),
    correoIng = document.querySelector('#correoIng'),
    contraIng = document.querySelector('#contraIng'),
    errorCorreoIng = document.querySelector('#correoIngError'),
    errorContraIng = document.querySelector('#contraIngError');
    correoIngRes = document.querySelector('#correoIngRes'),
    contraIngRes = document.querySelector('#contraIngRes'),
    errorCorreoIngRes = document.querySelector('#correoIngErrorRes'),
    errorContraIngRes = document.querySelector('#contraIngErrorRes'),
    datosReg = document.querySelector('#datosReg'),
    correoReg = document.querySelector('#correoReg'),
    contraReg = document.querySelector('#contraReg'),
    politicasReg = document.querySelector('#politicasReg'),
    errorDatosReg = document.querySelector('#datosRegError'),
    errorCorreoReg = document.querySelector('#correoRegError'),
    errorContraReg = document.querySelector('#contraRegError'),
    errorPoliticasReg = document.querySelector('#politicasRegError'),
    buscador = document.querySelector('#busqueda');

  /* Eventos generales */
  cambiarFondoScroll(cabeza);
  eventosMenu(alternador, menu, fondo, body);
  buscarProducto(buscador);
  /* Fin eventos generales */

  /* Eventos para mostrar formulario y cambiar formulario mayor a 992px */
  alternarFormulario(btnFormulario, contenedorFormularios);
  ocultarFormulario(cerrarFormulario, contenedorFormularios);
  cambiarFormulario(linkRegistro, 'registro', formRegistro, formIngreso);
  cambiarFormulario(linkIngreso, 'ingreso', formRegistro, formIngreso);
  /* Fin eventos para mostrar formulario y cambiar formulario mayor a 992px */

  /* Eventos para mostrar formulario y cambiar formulario menor a 992px */
  abrirFormularioResponsive(btnFormularioAcciones, contenedorFormulariosRes, menu, fondo, body);
  ocultarFormulario(cerrarFormularioRes, contenedorFormulariosRes);
  cambiarFormulario(linkRegistroRes, 'registro', formRegistroRes, formIngresoRes);
  cambiarFormulario(linkIngresoRes, 'ingreso', formRegistroRes, formIngresoRes);
  /* Fin eventos para mostrar formulario y cambiar formulario menor a 992px */

  /* Eventos de validación de formulario mayor a 992px */
  enviarFormularioIngreso(formIngreso, correoIng, contraIng, errorCorreoIng, errorContraIng);
  enviarFormularioRegistro(formRegistro, datosReg, correoReg, contraReg, politicasReg, errorDatosReg, errorCorreoReg, errorContraReg, errorPoliticasReg);
  /* Fin eventos de validación de formulario mayor a 992px */
  
  /* Eventos de validación de formulario menor a 992px */
  enviarFormularioIngreso(formIngresoRes, correoIngRes, contraIngRes, errorCorreoIngRes, errorContraIngRes);
  /* Fin eventos de validación de formulario menor a 992px */
}

window.addEventListener('load', iniciarScripts);