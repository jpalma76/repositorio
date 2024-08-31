
let cursos = [

    {
        "id": 1,
        "name": "Aplicación de Herramientas para la Certificación de Calidad de Servicios de Telecomunicaciones HFC",
        "image": "./img-certificados/certificaciones-vtr/aplicación_de_herramientas_para_la_certificación_de_calidad_de_servicios_de_telecomunicaciones-min.png",
        "url": "./img-certificados/certificaciones-vtr/aplicación_de_herramientas_para_la_certificación_de_calidad_de_servicios_de_telecomunicaciones-min.png"
    },
    {
        "id": 2,
       "name": "Aplicación Práctica de Procotolos de Atención y Servicios para la Atención de Clientes",
        "image": "./img-certificados/certificaciones-vtr/aplicacion_practica_de_procotolos_de_atencion_y_servicios_para_la_atencion_de_clientes-min.png",
        "url": "./img-certificados/certificaciones-vtr/aplicacion_practica_de_procotolos_de_atencion_y_servicios_para_la_atencion_de_clientes-min.png"
    },
    {
        "id": 3,
       "name": "instalación de los Servicios en Redes HFC (Hibrido de Fibra Coaxial)",
        "image": "./img-certificados/certificaciones-vtr/instalacion_de_los_servicios_en_redes_hfc_(hibrido_de_fibra_coaxial)-min.png",
        "url": "./img-certificados/certificaciones-vtr/instalacion_de_los_servicios_en_redes_hfc_(hibrido_de_fibra_coaxial)-min.png"
    },
    {
        "id": 4,
       "name": "Instalación de productos domiciliarios",
        "image": "./img-certificados/certificaciones-vtr/instalacion_de_productos_domiciliarios-min.png",
        "url": "./img-certificados/certificaciones-vtr/instalacion_de_productos_domiciliarios-min.png"
    },
    {
        "id": 5,
       "name": "Instalación de Servicios en redes FTTH",
        "image": "./img-certificados/certificaciones-vtr/instalacion_de_servicios_en_redes_ftth-min.png",
        "url": "./img-certificados/certificaciones-vtr/instalacion_de_servicios_en_redes_ftth-min.png"
    },
    {
        "id": 6,
       "name": "Manejo de Procedimiento de Instalaciones de Calidad",
        "image": "./img-certificados/certificaciones-vtr/manejo_de_procedimiento_de_instalaciones_de_calidad-min.png",
        "url": "./img-certificados/certificaciones-vtr/manejo_de_procedimiento_de_instalaciones_de_calidad-min.png"
    },
    {
        "id": 7,
       "name": "Trabajo en Altura para la Industria de Telecomunicaciones",
        "image": "./img-certificados/cursos-achs/Seguridad_electrica_general_N1.png",
        "url": "./img-certificados/cursos-achs/Seguridad_electrica_general_N1.png"
    }
    ,
    {
        "id": 8,
       "name": "Seguridad Eléctrica General Nº 1",
        "image": "./img-certificados/cursos-achs/Seguridad_electrica_general_N1.png",
        "url": "./img-certificados/cursos-achs/Seguridad_electrica_general_N1.png"
    }
    ,
    {
        "id": 9,
        "name": "Seguridad Eléctrica Operacional Nº 2",
         "image": "./img-certificados/cursos-achs/seguridad_electrica_operacional_N2.png",
         "url": "./img-certificados/cursos-achs/seguridad_electrica_operacional_N2.png"
    }
    ,
    {
        "id": 10,
       "name": "Identificación de Peligros y Evaluación de Riesgos en el Trabajo",
        "image": "./img-certificados/cursos-achs/identificacion_de_peligros_y_evaluacion_de_riesgos_en_el_trabajo.png",
        "url": "./img-certificados/cursos-achs/identificacion_de_peligros_y_evaluacion_de_riesgos_en_el_trabajo.png"
    }
    ,
    {
        "id": 11,
       "name": "Conducción Defensiva en Vehículos Livianos",
        "image": "./img-certificados/cursos-achs/conduccion_defensiva_en_vehiculos_livianos.png",
        "url": "./img-certificados/cursos-achs/conduccion_defensiva_en_vehiculos_livianos.png"
    }
    ,
    {
        "id": 12,
       "name": "12.- Medidas Preventivas Frente a Radiación UV",
        "image": "./img-certificados/cursos-achs/medidas_preventivas_frente_a_radiacion_uv.png",
        "url": "./img-certificados/cursos-achs/medidas_preventivas_frente_a_radiacion_uv.png"
    },
    {
        "id": 13,
       "name": "13.- Uso de Extintores",
        "image": "./img-certificados/cursos-achs/uso de extintores.png",
        "url": "./img-certificados/cursos-achs/uso de extintores.png"
    }
    ,
    {
        "id": 14,
       "name": "14.- Primera Respuesta Frente a Emergencias de Salud",
        "image": "./img-certificados/cursos-achs/primera_respuesta_frente_a_emergencias_de_salud.png",
        "url": "./img-certificados/cursos-achs/primera_respuesta_frente_a_emergencias_de_salud.png"
    },
    {
        "id": 15,
       "name": "15.- Manejo Manual de Cargas",
        "image": "./img-certificados/cursos-achs/manejo_manual_de_cargas.png",
        "url": "./img-certificados/cursos-achs/manejo_manual_de_cargas.png"
    }
    ,
    {
        "id": 16,
       "name": "16.- Evitando Dolencias Músculo esqueléticas de Extremidades Superiores (TMERT) en su Trabajo",
        "image": "./img-certificados/cursos-achs/evitando_dolencias_musculoesqueleticas_de_extremidades_superiores-TMERT_en_su_trabajo.png",
        "url": "./img-certificados/cursos-achs/evitando_dolencias_musculoesqueleticas_de_extremidades_superiores-TMERT_en_su_trabajo.png"
    }
];
let card = document.getElementById('skill-container');

cursos.forEach(curso => {
    let item = `
    <div class="grid-item">
        <div className="card-item">
            <a href="${curso.url}"  target="_blank" rel="noopener noreferrer">
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