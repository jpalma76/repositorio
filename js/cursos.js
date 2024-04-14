
let cursos = [

    {
        "id": 1,
        "name": "Curso Programación Basica",
        "image": "./img-certificados/curso_programacion_basica-min.png",
        "url": "./img-certificados/curso_programacion_basica-min.png"
    },
    {
        "id": 2,
        "name": "Curso Básico de C#, Fundamentos Variables y Operadores",
        "image": "./img-certificados/curso_basico_de_c_charp_fundamentos_variables_y_operadores-min.png",
        "url": "./img-certificados/curso_basico_de_c_charp_fundamentos_variables_y_operadores-min.png"
    },
    {
        "id": 3,
        "name": "Curso Básico de JavaScript",
        "image": "./img-certificados/curso_basico_de_javascript-min.png",
        "url": "./img-certificados/curso_basico_de_javascript-min.png"
    },

    {
        "id": 4,
        "name": "curso de frontend developer",
        "image": "./img-certificados/curso_frontend_developer-min.png",
        "url": "./img-certificados/curso_frontend_developer-min.png"
    },
    {
        "id": 5,
        "name": "curso practico de frontend developer",
        "image": "./img-certificados/curso_frontend_developer_practico-min.png",
        "url": "./img-certificados/curso_frontend_developer_practico-min.png"
    },
    {
        "id": 6,
        "name": "curso html y css practico",
        "image": "./img-certificados/curso_html_css_practico-min.png",
        "url": "./img-certificados/curso_html_css_practico-min.png"

    },
    {
        "id": 7,
        "name": "curso de fundamentos de punto net",
        "image": "./img-certificados/curso_fundamentos_de_punto_net-min.png",
        "url": "./img-certificados/curso_fundamentos_de_punto_net-min.png"
    },
    {
        "id": 8,
        "name": "curso definitivo html y css",
        "image": "./img-certificados/curso_html_css_definitivo-min.png",
        "url": "./img-certificados/curso_html_css_definitivo-min.png"
    },

    {
        "id": 9,
        "name": "curso introduccion al desarrollo backend",
        "image": "./img-certificados/curso_introduccion_al_desarrollo_backend-min.png",
        "url": "./img-certificados/curso_introduccion_al_desarrollo_backend-min.png"
    },
    {
        "id": 10,
        "name": "curso npm gestion de paquetes y dependencias en javascript",
        "image": "./img-certificados/curso_npm_gestion_de_paquetes_y_dependencias_en_javascript-min.png",
        "url": "./img-certificados/curso_npm_gestion_de_paquetes_y_dependencias_en_javascript-min.png"
    },
    {
        "id": 11,
        "name": "curso pensamiento logico de lenguajes de programación",
        "image": "./img-certificados/curso_pensamiento_logico_lenguajes_de_programacion-min.png",
        "url": "./img-certificados/curso_pensamiento_logico_lenguajes_de_programacion-min.png"
    },
    {
        "id": 12,
        "name": "curso de php instalacion fundamentos y operaciones basico",
        "image": "./img-certificados/curso_php_instalacion_fundamentos_y_operaciones_basico-min.png",
        "url": "./img-certificados/curso_php_instalacion_fundamentos_y_operaciones_basico-min.png"
    },
    {
        "id": 13,
        "name": "curso practico de php",
        "image": "./img-certificados/curso_practico_php-min.png",
        "url": "./img-certificados/curso_practico_php-min.png"
    },
    {
        "id": 14,
        "name": "curso  integracion de php y html",
        "image": "./img-certificados/curso_de_integracion_de_php_con_html-min.png",
        "url": "./img-certificados/curso_de_integracion_de_php_con_html-min.png"
    },

    {
        "id": 15,
        "name": "curso prework linux: Configuracion de entorno de desarrollo en linux",
        "image": "./img-certificados/curso_prework_linux-min.png",
        "url": "./img-certificados/curso_prework_linux-min.png"
    },
    {
        "id": 16,
        "name": "curso prework: configuracion de entorno de desarrollo en windows",
        "image": "./img-certificados/curso_prework_windows-min.png",
        "url": "./img-certificados/curso_prework_windows-min.png"
    },
    {
        "id": 17,
        "name": "curso javascript nivel 1",
        "image": "./img-certificados/curso_javascript_nivel1-min.png",
        "url": "./img-certificados/curso_javascript_nivel1-min.png"
    },
    {
        "id": 18,
        "name": "curso javascript nivel 2",
        "image": "./img-certificados/curso_javascript_nivel2-min.png",
        "url": "./img-certificados/curso_javascript_nivel2-min.png"
    },
    {
        "id": 29,
        "name": "Curso PHP nivel 1 - Jóvenes Programadores",
        "image": "./img-certificados/curso_php_jovenes_programadores-min.png",
        "url": "./img-certificados/curso_php_jovenes_programadores-min.png"
    },
    {
        "id": 20,
        "name": "Curso CSS - Jóvenes Programadores",
        "image": "./img-certificados/curso_css_jovenesprogramadores-min.png",
        "url": "./img-certificados/curso_css_jovenesprogramadores-min.png"
    },
    {
        "id": 21,
        "name": "Curso Introducción a Python - Jóvenes Programadores",
        "image": "./img-certificados/curso-introduccion-a-python-min.png",
        "url": "./img-certificados/curso-introduccion-a-python-min.png"
    },
    {
        "id": 22,
        "name": "Curso de React - Jóvenes Programadores",
        "image": "./img-certificados/curso-de-react-min.png",
        "url": "./img-certificados/curso-de-react-min.png"
    }
];

let card = document.getElementById('certificados-container');

cursos.forEach(curso => {
    let item = `
    <div class="grid-item">
        <div className="card-item">
            <a href="${curso.url}" target="_blank" rel="noopener noreferrer">
                <picture>
                    <img class="img-cert" src="${curso.image}" alt="${curso.name}">
                </picture>

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