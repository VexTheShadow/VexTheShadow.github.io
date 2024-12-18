var typed = new Typed("#typed-abautme", {
    strings: ["programador.", "desarrollador web.", "técnico en ciberseguridad."],
    typeSpeed: 100,  // Velocidad para escribir cada letra
    backSpeed: 50,   // Velocidad para borrar cada letra
    backDelay: 1000, // Tiempo de espera antes de empezar a borrar
    startDelay: 500, // Tiempo de espera antes de empezar a escribir
    loop: true,      // Repite el efecto de escritura y borrado en bucle
    showCursor: true, // Muestra el cursor intermitente
    cursorChar: "|",  // Caracter del cursor
    contentType: 'html' // 'html' o 'null' para 'text'
});
