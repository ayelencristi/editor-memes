const prueba = document.getElementById('modoClaro');
//const nombreBoton = document.getElementsByClassName('nombre-boton');

const toggleMode = () => {
    document.body.classList.toggle("dark");
    // if (document.body.classList == 'dark') {
    //     nombreBoton.innerText = 'Modo claro';
    // }else {
    //     nombreBoton.innerText = 'Modo oscuro';
    // }
}
prueba.addEventListener('click', toggleMode); 

// document.body.classList = 'modoClaro'
// document.prueba = prueba.innerText('modo oscuro')
// prueba.innerText = 'modo oscuro'

// const cambiarModoOscuro = () => {
//     document.body.classList.remove('light-theme')
//     document.body.classList.add('dark-theme')
//   }
//   const cambiarModoClaro = () => {
//     document.body.classList.remove('dark-theme')
//     document.body.classList.add('light-theme')
//   }


/* Función mostrar/ocultar barra aside texto/imagen*/

const botonImagen = document.getElementById('botonImagen');
const botonTexto = document.getElementById('botonTexto');
const sectionImage = document.getElementById('sectionImage');
const sectionText = document.getElementById('sectionText');

const functionAsideTexto = () => {
    sectionText.classList.remove('oculto');
    sectionImage.classList.add('oculto');
}
botonTexto.addEventListener('click', functionAsideTexto);

const functionAsideImagen = () => {
    sectionImage.classList.remove('oculto');
    sectionText.classList.add('oculto');
}
botonImagen.addEventListener('click', functionAsideImagen);

/* Función url */ 
const imagenURL = document.getElementById('url');
const imagenMeme = document.getElementById('imagenID');

function imagenURLMeme() {
    let url = imagenURL.value;
    imagenMeme.style.backgroundImage = `url("${url}")`;
}
imagenURL.addEventListener('change', imagenURLMeme)

