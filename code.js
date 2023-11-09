/*Función para cambiar la imagen del logo al apoyar el cursor sobre el*/

/*La función "cambiarImagen()" cambia la imagen a una nueva imagen. Al retirar el cursor, la función "restaurarImagen()" se activa y restablece la imagen original*/
function cambiarImagen() {
  document.getElementById('logo').src = './imagenes/venecia.jpg';
}

function restaurarImagen() {
  document.getElementById('logo').src = './imagenes/miimagen.PNG';
}





/*Con este código cambio de color el fondo de mi html al hacer scroll hacia abajo*/
window.addEventListener('scroll', function() {
  const scroll = window.scrollY; /*Declaro una constante llamada "scroll"*/

  /* Utilizo un condicinal para cambiar el color de fondo al hacer scroll. De blanco a rosa*/
  if (scroll > 500) {
      document.body.style.backgroundColor = '#FFC0CB'; /*Cambia a un color rosa al hacer scroll más allá de 500px*/
  } else {
      document.body.style.backgroundColor = '#fff'; /*Si no, vuelve al color blanco original si se hace scroll arriba de 500px*/
  }
});





/*Con los siguientes códigos lo que hago es que al apretar el botón "Guía de viaje paso a paso: Roma " aparezca una breve historia de Roma*/

/*Acá obtengo la referencia al botón y al párrafo por su class*/
let botonHistoria = document.getElementsByClassName("botonHistoria")[0];
let resultadoHistoria = document.getElementsByClassName("historia")[0];

/*Acá agrego un manejador de eventos al botón, donde al apretarlo explica la historia de Roma brevemente mediante la incorporación de un párrafo*/
botonHistoria.addEventListener("click", function() {
    resultadoHistoria.textContent = "¡Roma es una ciudad italiana, capital de la región del Lacio y de Italia. Con una población de 2 857 321 habitantes,es el municipio más poblado de Italia y la tercera ciudad más poblada de la Unión Europea. Por antonomasia, se le conoce desde la Antigüedad como la Urbe (Urbs). También es llamada «La Ciudad Eterna» En el transcurso de su historia, que abarca tres milenios, llegó a extender sus dominios sobre toda la cuenca del Mediterráneo y gran parte de Europa, Oriente Próximo y África del Norte. Como capital de la República y del Imperio romano, llegó a ser la primera gran metrópolis de la humanidad,centro de una de las civilizaciones antiguas más importantes. Influyó en la sociedad, la cultura, la lengua, la literatura, la música, el arte, la arquitectura, la filosofía, la gastronomía, la religión, el derecho y la moral de los siglos sucesivos.!";
});

/*Con los siguientes códigos lo que hago es que el botón cambie de color al ingresar con el cursor sobre el y al salir con el cursor sobre el cambie nuevamente*/

/*Obtengo una referencia al botón de la historia de Roma por su class*/
let botonHistoriaConEstilo = document.getElementsByClassName("botonHistoria")[0];

/*Agrego un manejador de eventos para el evento "mouseenter" (cuando el cursor entra al botón)*/
botonHistoriaConEstilo.addEventListener("mouseenter", function() {
  botonHistoriaConEstilo.style.backgroundColor = "blueviolet";
  botonHistoriaConEstilo.style.color = "white";
});

// Aca agrego un manejador de eventos para el evento "mouseleave" (cuando el cursor sale del botón)
botonHistoriaConEstilo.addEventListener("mouseleave", function() {
  botonHistoriaConEstilo.style.backgroundColor = "greenyellow";
  botonHistoriaConEstilo.style.color = "white";
  botonHistoriaConEstilo.style.border = "none";
});

/*Agrego otros estilos al botón sobre la historia de Roma*/
botonHistoriaConEstilo.style.padding = "10px 20px";
botonHistoriaConEstilo.style.border = "none";
botonHistoriaConEstilo.style.cursor = "pointer";
botonHistoriaConEstilo.style.transition = "background-color 0.3s";





/*Acá lo que hago es darle funcionalidad a los botones del PopUp de contacto que cree. Es decir si la persona toca sobre el botón "si" se abre un cartel que te pregunta si queres que te redirija automáticamente a la sección del formulario. En cambio si el usuario apreta "no" no te redirige y te agradece igualmente con un cartel.*/

/* Acá obtengo la referencia al PopUp mediante su ID y declaro la constante "popUpContacto". */
document.addEventListener("DOMContentLoaded", function() {
  const popUpContacto = document.getElementById('popUpContacto');

  /* Acá obtengo la referencia al botón "si" y "no" a través de su ID. */
  const botonSi = document.getElementById('si');
  const botonNo = document.getElementById('no');

  /* Acá establezco que al apretar "si" un cartel de alerta se abra y me consulte si acepto que me redirija al formulario de mi hmtl. */
  botonSi.addEventListener('click', function() {
    alert("¡Serás redirigido a nuestro formulario de contacto!");
    window.location.href = "index.html#formulario"; /*Acá establezco la ruta del formulario de contacto*/
  });

  /* Acá establezco que al apretar "no" aparezca un cartel de agradecimiento*/
  botonNo.addEventListener('click', function() {
    alert("¡Gracias! Estamos aquí para ayudarte si cambias de opinión.");
    popUpContacto.removeChild(cuadroDialogo);
  });
});





/*Aca defino la clase base genérica "Destino" para aplicar programación en base a objetos de la clase 13 del curso. Con esto lo que hago es agregar tres descripciones de cada una de las fotos del carrusel debajo del mismo. Una por la fontana di trevi, otra por el foro romano y otra por el monumento. */

/*Creo la clase destino. La clase genérica.*/
class Destino {
  descripcion() {
    return 'Descripción del destino';
  }
}

/*Acá creo la subclase "Fontana" que hereda de "Destino".*/
class Fontana extends Destino {
  descripcion() {
    return 'Una de las mayores fuentes monumentales del Barroco en Roma. Según la actual división administrativa del centro de Roma, está situada en el rione de Trevi.';
  }
}

/*Acá creo la subclase "Foro" que hereda de "Destino".*/
class Foro extends Destino {
  descripcion() {
    return 'la zona central —semejante a las plazas centrales en las ciudades actuales— donde se encuentran las instituciones de gobierno, de mercado y religiosas.';
  }
}

/*Acá creo la subclase "Monumento" que hereda de "Destino".*/
class Monumento extends Destino {
  descripcion() {
    return 'Es un enorme monumento conmemorativo de la ciudad de Roma, Italia, realizado en honor del primer rey de la Italia unificada, Víctor Manuel II.';
  }
}

/* Esta función la uso para mostrar información/descripción de un destino en específico.*/
function mostrarDescripcion(destino) {
  const infoDestinos = document.getElementById('infoDestinos');
  const parrafoInfoDestino = document.createElement('p');
  parrafoInfoDestino.textContent = destino.descripcion();
  infoDestinos.appendChild(parrafoInfoDestino);
}

/* Declaro las constantes de los tres destinos.*/
const destinoFontana = new Fontana();
const destinoForo = new Foro();
const destinoMonumento = new Monumento();

/*Muestro la descripción de cada destino en mi página web (html)*/
mostrarDescripcion(destinoFontana);
mostrarDescripcion(destinoForo);
mostrarDescripcion(destinoMonumento);





/* Con las siguientes lineas de codigo busco que sea obligatorio el ingreso del nombre, apellido, consulta y email por parte del usuario. A su vez que se verifique si el email ingresado esta ok, en caso de ser asi que se envie el form y me largue un mensaje que se envío limpiandose todos los campos al enviar, caso contrario que me avise que es invalido el email.*/

/*Función para verificar si el email es válido para enviar el formulario.*/
function validarEmail(email) {
  const regla = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regla.test(email);
}
/*Obtengo la referencia al formulario, al resultado, nombre, apellido, consulta y al correo electrónico con sus ID y declaro las constantes.*/
const form = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const consultaInput = document.getElementById('texto');
const resultMessage = document.getElementById('result');

/*Agrego un event listener al formulario.*/
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = emailInput.value;
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const consulta = consultaInput.value;

  /*Realizo un condicional para verificar si se ingreso el nombre, apellido, email y consulta ya que son obligatorios.*/
  if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || consulta.trim() === '') {
    resultMessage.textContent = 'Por favor complete todos los campos requeridos con *.';
    return;
  }

  /*Realizo un condicional para verificar si es válido o no el email ingresado por el usuario.*/
  if (!validarEmail(email)) {
    resultMessage.textContent = 'Email inválido. Por favor, ingrese un email válido.';
    return;
  }
  resultMessage.textContent = '¡Gracias por su consulta. La responderemos en breve!';

  /*Limpio los campos después del envío del formulario correctamente.*/
  nombreInput.value = '';
  apellidoInput.value = '';
  emailInput.value = '';
  consultaInput.value = '';

});





/*Función para contar automáticamente los caracteres del campo consulta al escribir en el formulario.*/
function contarCaracteres(input) {
  let longitud = input.value.length;
  document.getElementById('contador-caracteres').innerText = " Caracteres ingresados: " + longitud;
}





/* Creo un array llamado "comentarios", que contiene distintos objetos con información de usuario, avatar y texto para cada comentario que se agregará al tocar el botón "agregar comentario". */
document.addEventListener('DOMContentLoaded', function() {
  let comentarios = [
      { 
          usuario: 'Sebastián López',
          avatar: './imagenes/otrousuario.PNG',
          texto: '¡El Foro Romano es una locura! Mil años de historia! 🚀✨'
      },
      {
          usuario: 'Luciana Rodriguez',
          avatar: './imagenes/otrausuaria.PNG',
          texto: '¡El Panteón es mágico! Prometo volver en algún otro momento. 🌟🌈'
      },
  ];

let indiceComentario = 0;

/*Acá lo que hago con este código es que al hacer "clic" en el botón "Agregar Comentario" se agregue un nuevo comentario a la sección de comentarios de mi html. Debajo de un comentario fijo se agregaran otros.*/

/* Acá agrego un escuchador de eventos al botón con el ID "addCommentBtn". Cuando se hace clic en este botón, se ejecuta la función especificada entre las llaves*/
document.getElementById('botonComentario').addEventListener('click', function() {
  
  /*Creo un nuevo elemento HTML div que representará un comentario*/
  let newComment = document.createElement('div');
  newComment.className = 'comentario'; /*Asigno la clase CSS "comment" al nuevo elemento div, lo que le dará los estilos predefinidos para los comentarios*/

  /*Creo un nuevo elemento div para la sección de información del usuario.*/
  let userInfo = document.createElement('div');
  userInfo.className = 'informacionUsuario';
  userInfo.innerHTML = `<img src="${comentarios[indiceComentario].avatar}" alt="User Avatar"><h4>${comentarios[indiceComentario].usuario}</h4>`;

  /*Creo un nuevo elemento div para la sección de contenido del comentario.*/
  let commentContent = document.createElement('div');
  /*Defino un párrafo con el texto del comentario y emoticones.*/
  commentContent.className = 'contenidoComentario';
  commentContent.innerHTML = `<p>${comentarios[indiceComentario].texto}</p>`;

  /*Agrego los elementos de información del usuario y el contenido del comentario al elemento principal del nuevo comentario*/
  newComment.appendChild(userInfo);
  newComment.appendChild(commentContent);

// Agrega el nuevo comentario 1 a la sección de comentarios
document.querySelector('.seccionComentarios').appendChild(newComment);

// Incrementa el índice del comentario para el próximo clic
indiceComentario = (indiceComentario + 1) % comentarios.length;
});
});





/*Acá con los siguientes códigos busco que se muestren mensajes al enviar por parte del usuario reacciones sobre mi página.*/

/*Obtengo la referencia al contenedor de reacciones usando su ID "reactions".*/
const reactionsContainer = document.getElementById('reactions');

/*Obtengo una lista de elementos con la clase CSS "reaction" dentro del contenedor de reacciones.*/
const reactions = reactionsContainer.querySelectorAll('.reaction');

/*Defino una función para manejar la selección de reacciones que llamo "react".*/
function react(event) {
  /*Previene el comportamiento predeterminado del evento (por ejemplo, la navegación en caso de un enlace).*/
  event.preventDefault();
  
  /*Obtiene el valor del atributo "data-reaction" del elemento que activó el evento.*/
  const reaction= this.getAttribute('data-reaction');
  
  /*Muestro un alerta con la reacción seleccionada.*/
  alert(`Seleccionaste la reacción: ${reaction}`);
}

/*Agrego un evento de "click" a cada elemento de reacción en la lista "reactions".*/
reactions.forEach(reaction => {
  reaction.addEventListener('click', react);
});





/* Con los siguientes códigos busco que al pasar el cursor por el botón de "seguime en twitter" cambie de color 3 veces. Un color original del botón, uno al ingresar y otro al salir.*/

/*Obtengo la referencia al botón de "seguime en twitter" por su clase para que cambie del color original (blueviolet) y declaro la variable.*/
let boton2 = document.getElementsByClassName("button2")[0];

/*Agrego un manejador de eventos para el evento "mouseenter" (cuando el cursor entra en el botón cambia a greenyellow).*/
boton2.addEventListener("mouseenter", function() {
  boton2.style.backgroundColor = "greenyellow";
});

/*Agrego un manejador de eventos para el evento "mouseleave" (cuando el cursor sale del botón cambia a blue).*/
boton2.addEventListener("mouseleave", function() {
  boton2.style.backgroundColor = "blue";
});





/*Con este código asigno a una variable el elemento "correo" de contacto para que al posicionar el cursor sobre este se agrande y luego vuelva a su tamaño original. */
let contactocorreo = document.getElementById('correo');

contactocorreo.addEventListener('mouseover', function() {
    contactocorreo.style.transform = 'scale(1.2)';
});

contactocorreo.addEventListener('mouseout', function() {
    contactocorreo.style.transform = 'scale(1)';
});

/* Con este código asigno a una variable el elemento "telefono" de contacto para que al posicionar el cursor sobre este se agrande y luego vuelva a su tamaño original*/
let contactotelefono = document.getElementById('telefono');

contactotelefono.addEventListener('mouseover', function() {
    contactotelefono.style.transform = 'scale(1.2)';
});

contactotelefono.addEventListener('mouseout', function() {
    contactotelefono.style.transform = 'scale(1)';
});







