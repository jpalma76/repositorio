
let cursos = [

    {
        "id": 1,
        "name": "Curso Programación Basica",
        "image": "./img-certificados/curso_programacion_basica.png",
        "url": "./img-certificados/curso_programacion_basica.png"
    },
    {
        "id": 2,
        "name": "Curso Básico de C#, Fundamentos Variables y Operadores",
        "image": "./img-certificados/curso_basico_de_c_charp_fundamentos_variables_y_operadores.png",
        "url": "./img-certificados/curso_basico_de_c_charp_fundamentos_variables_y_operadores.png"
    },
    {
        "id": 3,
        "name": "Curso Básico de JavaScript",
        "image": "./img-certificados/curso_basico_de_javascript.png",
        "url": "./img-certificados/curso_basico_de_javascript.png"
    },

    {
        "id": 4,
        "name": "curso de frontend developer",
        "image": "./img-certificados/curso_frontend_developer.png",
        "url": "./img-certificados/curso_frontend_developer.png"
    },
    {
        "id": 5,
        "name": "curso practico de frontend developer",
        "image": "./img-certificados/curso_frontend_developer_practico.png",
        "url": "./img-certificados/curso_frontend_developer_practico.png"
    },
    {
        "id": 6,
        "name": "curso html y css practico",
        "image": "./img-certificados/curso_html_css_practico.png",
        "url": "./img-certificados/curso_html_css_practico.png"

    },
    {
        "id": 7,
        "name": "curso de fundamentos de punto net",
        "image": "./img-certificados/Curso_fundamentos_de_punto_net.png",
        "url": "./img-certificados/Curso_fundamentos_de_punto_net.png"
    },
    {
        "id": 8,
        "name": "curso definitivo html y css",
        "image": "./img-certificados/curso_html_css_definitivo.png",
        "url": "./img-certificados/curso_html_css_definitivo.png"
    },
    {
        "id": 9,
        "name": "curso de introduccion a platzi",
        "image": "./img-certificados/curso_introduccion_a_platzi.png",
        "url": "./img-certificados/curso_introduccion_a_platzi.png"
    },

    {
        "id": 10,
        "name": "curso introduccion al desarrollo backend",
        "image": "./img-certificados/curso_introduccion_al_desarrollo_backend.png",
        "url": "./img-certificados/curso_introduccion_al_desarrollo_backend.png"
    },
    {
        "id": 11,
        "name": "curso javascript nivel 1",
        "image": "./img-certificados/curso_javascript_nivel1.png",
        "url": "./img-certificados/curso_javascript_nivel1.png"
    },
    {
        "id": 12,
        "name": "curso javascript nivel 2",
        "image": "./img-certificados/curso_javascript_nivel2.png",
        "url": "./img-certificados/curso_javascript_nivel2.png"
    },
    {
        "id": 13,
        "name": "Curso PHP nivel 1 - Jóvenes Programadores",
        "image": "./img-certificados/curso_php_jovenes_programadores.png",
        "url": "./img-certificados/curso_php_jovenes_programadores.png"
    },
    /*  */
    {
        "id": 14,
        "name": "curso npm gestion de paquetes y dependencias en javascript",
        "image": "./img-certificados/curso_npm_gestion_de_paquetes_y_dependencias_en_javascript.png",
        "url": "./img-certificados/curso_npm_gestion_de_paquetes_y_dependencias_en_javascript.png"
    },
    {
        "id": 15,
        "name": "curso pensamiento logico de lenguajes de programación",
        "image": "./img-certificados/curso_pensamiento_logico_lenguajes_de_programacion.png",
        "url": "./img-certificados/curso_pensamiento_logico_lenguajes_de_programacion.png"
    },
    {
        "id": 16,
        "name": "curso de php instalacion fundamentos y operaciones basico",
        "image": "./img-certificados/curso_php_instalacion_fundamentos_y_operaciones_basico.png",
        "url": "./img-certificados/curso_php_instalacion_fundamentos_y_operaciones_basico.png"
    },
    {
        "id": 17,
        "name": "curso practico de php",
        "image": "./img-certificados/curso_practico_php.png",
        "url": "./img-certificados/curso_practico_php.png"
    },
    {
        "id": 18,
        "name": "curso  integracion de php y html",
        "image": "./img-certificados/curso_de_integracion_de_php_con_html.png",
        "url": "./img-certificados/curso_de_integracion_de_php_con_html.png"
    },

    {
        "id": 19,
        "name": "curso prework linux: Configuracion de entorno de desarrollo en linux",
        "image": "./img-certificados/curso_prework_linux.png",
        "url": "./img-certificados/curso_prework_linux.png"
    },
    {
        "id": 20,
        "name": "curso prework: configuracion de entorno de desarrollo en windows",
        "image": "./img-certificados/curso_prework_windows.png",
        "url": "./img-certificados/curso_prework_windows.png"
    }
];

let card = document.getElementById('container');

cursos.forEach(curso => {
    let item = `
    <div class="grid-item">
        <div className="card-item">
        <a href="${curso.url}">
        <img class="img-cert" src="${curso.image}" alt="${curso.name}">
            <div class="nombre-curso">
                <p class="img-name">${curso.name}</p>
            </div>
        </a>
        </div>

    </div>
    `;

    let parrafo = document.createElement('p');
    parrafo.innerHTML = item;
    card.appendChild(parrafo);
});