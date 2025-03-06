// Textos para cada idioma
const textosPorIdioma = {
    //Formato adecuado para la traducción -> programador| desarrollador web| técnico en ciberseguridad
    //Web para la traducción -> https://smodin.io/es/traducir-uno-texto-dentro-multiple-idiomas
    en: ["programmer.","web developer.","cybersecurity technician."],
    ko: ["프로그래머.","웹 개발자.","사이버보안 기술자."],
    de: ["Programmierer.","Webentwickler.","Cybersicherheitstechniker."],
    ar: ["مبرمج.","مطور ويب.","فني الأمن السيبراني."],
    ru: ["программист.","веб-разработчик.","техник по кибербезопасности."],
    es: ["programador.","desarrollador web.","técnico en ciberseguridad."],
    fr: ["programmeur.","développeur web.","technicien en cybersécurité."],
    pt: ["programador.","desenvolvedor web.","técnico de segurança cibernética."],
    zhcn: ["程序员.","网页开发人员.","网络安全技术员."],
  };
  // Obtener el idioma de la página
  const idioma = document.documentElement.lang || "es";
  // Obtener los textos según el idioma
  const texto = textosPorIdioma[idioma] || textosPorIdioma.es;

var typed = new Typed("#typed-abautme", {
    strings: texto,  // Texto alternante
    typeSpeed: 100,  // Velocidad para escribir cada letra
    backSpeed: 50,   // Velocidad para borrar cada letra
    backDelay: 1000, // Tiempo de espera antes de empezar a borrar
    startDelay: 500, // Tiempo de espera antes de empezar a escribir
    loop: true,      // Repite el efecto de escritura y borrado en bucle
    showCursor: true, // Muestra el cursor intermitente
    cursorChar: "|",  // Caracter del cursor
    contentType: 'html' // 'html' o 'null' para 'text'
});
