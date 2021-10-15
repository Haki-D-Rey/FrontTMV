'use strict';

const LS_IMAGEN = 'LS_IMAGEN';

const cerrarMedios = (contenedorCamara, video, canva) => {
  contenedorCamara.classList.remove('activo');
  video.srcObject.getTracks()[0].stop();
  canva.getContext('2d').clearRect(0, 0, canva.width, canva.height);
}

const cerrarCamara = (evElemento, contenedorCamara, video, canva) =>
  evElemento.addEventListener('click', () =>
    cerrarMedios(contenedorCamara, video, canva)
  );

const abrirCamara = (evElementos, contenedorCamara) =>
  evElementos.forEach(el => {
    el.addEventListener('click', () => {
      contenedorCamara.classList.add('activo');
      iniciarCamara();
    });
  });

const guardarFoto = (evElemento, contenedorCamara, video, canva) =>
  evElemento.addEventListener('click', () => {
    const img = canva.toDataURL('image/jpg');
    localStorage.setItem(LS_IMAGEN, img);
    cerrarMedios(contenedorCamara, video, canva);
  });

const iniciarCamara = () => {
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const snap = document.getElementById("snap");

  const constraints = {
    audio: false,
    video: {
      width: 350,
      height: 250,
    },
  };

  // Access webcam
  async function init() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
    } catch (e) {
      console.log(e);
    }
  }

  // Success
  function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
  }

  // Load init
  init();

  // Draw image
  let context = canvas.getContext('2d');
  snap.addEventListener("click", () =>
    context.drawImage(video, 0, 0, 350, 250)
  );
};