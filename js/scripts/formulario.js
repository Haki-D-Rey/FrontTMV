const alternarFormulario = (evElemento, contenedorFormularios) =>
  evElemento.addEventListener('click', () =>
    contenedorFormularios.classList.toggle('activo')
  );

const abrirFormularioResponsive = (evElemento, contenedorFormularios, menu, fondo, body) =>
  evElemento.addEventListener('click', () => {
    manejarMenu(menu, fondo, body);
    contenedorFormularios.classList.add('activo');
  });

const ocultarFormulario = (evElemento, contenedorFormularios) =>
  evElemento.addEventListener('click', () =>
    contenedorFormularios.classList.remove('activo')
  );

const seleccionarFormularioIngreso = (formIngreso, formRegistro) => {
  formRegistro.classList.remove('formulario-activo');
  formIngreso.classList.add('formulario-activo');
}

const seleccionarFormularioRegistro = (formIngreso, formRegistro) => {
  formIngreso.classList.remove('formulario-activo');
  formRegistro.classList.add('formulario-activo');
}

const cambiarFormulario = (evElemento, tipoCambio, formRegistro, formIngreso) =>
  evElemento.addEventListener('click', e => {
    e.preventDefault();
    tipoCambio === 'ingreso'
      ? seleccionarFormularioIngreso(formIngreso, formRegistro)
      : seleccionarFormularioRegistro(formIngreso, formRegistro);
  });

const enviarFormularioIngreso = (evElement, campoCorreo, campoContra, errorCorreo, errorContra) =>
  evElement.addEventListener('submit', e => {
    e.preventDefault();
    const correo = campoCorreo.value;
    const contra = campoContra.value;

    // Validación de los datos
    !correo
      ? errorCorreo.classList.add('activo')
      : errorCorreo.classList.remove('activo');
    !contra
      ? errorContra.classList.add('activo')
      : errorContra.classList.remove('activo');

    if (!correo || !contra) return;

    alert('Bienvenido a Tienda SM');
    window.location.href = 'perfil.html';
  });

const enviarFormularioRegistro = (evElement, campoDatos, campoCorreo, campoContra, campoPoliticas, errorDatos, errorCorreo, errorContra, errorPoliticas) =>
  evElement.addEventListener('submit', e => {
    e.preventDefault();
    const datos = campoDatos.value;
    const correo = campoCorreo.value;
    const contra = campoContra.value;
    const politicas = campoPoliticas.checked;

    // Validación de los datos
    !datos
      ? errorDatos.classList.add('activo')
      : errorDatos.classList.remove('activo');
    !correo
      ? errorCorreo.classList.add('activo')
      : errorCorreo.classList.remove('activo');
    !contra
      ? errorContra.classList.add('activo')
      : errorContra.classList.remove('activo');
    !politicas
      ? errorPoliticas.classList.add('activo')
      : errorPoliticas.classList.remove('activo');

    if (!datos || !correo || !contra || !politicas) return;

    alert('Gracias por unirte a Tienda SM, Bienvenido');
    window.location.href = 'perfil.html';
  });