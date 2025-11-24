/* const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que recargue la página

    // Captura de valores
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    console.log("Formulario enviado");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);
});

const contenedorInfo = document.createElement("p");
contenedorInfo.id = "informacion";
contenedorInfo.style.marginTop = "15px";
contenedorInfo.style.fontWeight = "bold";

//esto es para que aparezca abajo del form el mensaje
formulario.appendChild(contenedorInfo);

formulario.addEventListener("submit", function (event) {

    if (nombre.value === "" || correo.value === "" || mensaje.value === "") {
        contenedorInfo.textContent = "Error: los campos son obligatorios";
        contenedorInfo.style.backgroundColor = "red";
        contenedorInfo.style.color = "white";
    } else {
        contenedorInfo.textContent = "Gracias por su mensaje pronto le responderé";
        contenedorInfo.style.backgroundColor = "green";
    }
}); */

/* Quise usar la misma logica de la entrega anterior usando appendChild(.appendTo) */
$(document).ready(function () {
            console.log('jQuery cargado correctamente');
            
            // Smooth scroll
            $("a[href^='#']").on('click', function (event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 70
                    }, 800);
                }
            });

            // Validación del formulario - usando click en el botón
            $('#btn-enviar').on('click', function() {
                console.log('Botón clickeado');

                var nombre = $('#nombre').val();
                var correo = $('#correo').val();
                var mensaje = $('#mensaje').val();

                console.log('Nombre:', nombre);
                console.log('Correo:', correo);
                console.log('Mensaje:', mensaje);

                var $contenedor = $('#mensaje-validacion');

                if (nombre === '' || correo === '' || mensaje === '') {
                    console.log('Mostrando error');
                    $contenedor.html('<div class="alert alert-danger mt-3"><strong>Error:</strong> Todos los campos son obligatorios</div>');
                } else {
                    console.log('Mostrando éxito');
                    $contenedor.html('<div class="alert alert-success mt-3"><strong>¡Éxito!</strong> Gracias por tu mensaje, pronto te responderé.</div>');
                    
                    // Limpiar formulario después de 3 segundos
                    setTimeout(function() {
                        $('#nombre').val('');
                        $('#correo').val('');
                        $('#mensaje').val('');
                        $contenedor.fadeOut(500, function() {
                            $(this).html('').show();
                        });
                    }, 3000);
                }
            });

            // Resaltar link activo en el navbar
            $(window).on('scroll', function() {
                var scrollPos = $(window).scrollTop() + 100;
                
                $('nav a[href^="#"]').each(function() {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    
                    if (refElement.length && refElement.position().top <= scrollPos && 
                        refElement.position().top + refElement.height() > scrollPos) {
                        $('nav a').removeClass("active");
                        currLink.addClass("active");
                    }
                });
            });
        });


