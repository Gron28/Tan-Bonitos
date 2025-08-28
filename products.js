
const PRODUCTS = [
    {
        id: "ajuar-batita-rosa",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-batita",
        name: "Ajuar Batita y Pantalón - Rosa",
        images: ["images/products/ajuar-batita-rosa-1.jpg", "images/products/ajuar-batita-rosa-2.jpg", "images/products/ajuar-batita-rosa-3.jpg"],
        description: "¡El primer ajuar para tu bebé, suave como un abrazo! Set de nacimiento de 2 piezas (talle 0-3 meses) confeccionado en 100% algodón Pima peruano. Presentado en caja envuelto en tul suavemente perfumado. <br><strong>Consultanos por opciones para agregar Portachupete o Sonajero.</strong>",
        details: ["Incluye: Batita cruzada y pantaloncito.", "Material: 100% Algodón Pima hipoalergénico.", "Detalles: Finos bordados en rosa.", "Presentación: Caja de regalo con tul perfumado."]
    },
    {
        id: "ajuar-batita-celeste",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-batita",
        name: "Ajuar Batita y Pantalón - Celeste",
        images: ["images/products/ajuar-batita-celeste-1.jpg", "images/products/ajuar-batita-celeste-2.jpg", "images/products/ajuar-batita-celeste-3.jpg"],
        description: "¡El primer ajuar para tu bebé, suave como un abrazo! Set de nacimiento de 2 piezas (talle 0-3 meses) confeccionado en 100% algodón Pima peruano. Presentado en caja envuelto en tul suavemente perfumado. <br><strong>Consultanos por opciones para agregar Portachupete o Sonajero.</strong>",
        details: ["Incluye: Batita cruzada y pantaloncito.", "Material: 100% Algodón Pima hipoalergénico.", "Detalles: Finos bordados en celeste.", "Presentación: Caja de regalo con tul perfumado."]
    },
    {
        id: "ajuar-batita-beige",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-batita",
        name: "Ajuar Batita y Pantalón - Beige",
        images: ["images/products/ajuar-batita-beige-1.jpg", "images/products/ajuar-batita-beige-2.jpg", "images/products/ajuar-batita-beige-3.jpg"],
        description: "¡El primer ajuar para tu bebé, suave como un abrazo! Set de nacimiento de 2 piezas (talle 0-3 meses) confeccionado en 100% algodón Pima peruano. Presentado en caja envuelto en tul suavemente perfumado. <br><strong>Consultanos por opciones para agregar Portachupete o Sonajero.</strong>",
        details: ["Incluye: Batita cruzada y pantaloncito.", "Material: 100% Algodón Pima hipoalergénico.", "Detalles: Finos bordados en color natural.", "Presentación: Caja de regalo con tul perfumado."]
    },
    {
        id: "ajuar-gorrito-rosa",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-gorrito",
        name: "Set Gorrito y Zapatitos - Rosa",
        images: ["images/products/ajuar-gorrito-rosa-1.jpg", "images/products/ajuar-gorrito-rosa-2.jpg", "images/products/ajuar-gorrito-rosa-3.jpg"],
        description: "Para mantener a tu bebé calentito. Set de gorrito, zapatitos y portachupete para recién nacido. La combinación perfecta para cualquier ajuar, presentado en caja envuelto en tul suavemente perfumado.",
        details: ["Incluye: Gorrito, zapatitos y portachupete.", "Material: 100% Algodón Pima Peruano.", "Detalles: Costuras delicadas en color rosa.", "Ajuste suave y cómodo."]
    },
    {
        id: "ajuar-gorrito-celeste",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-gorrito",
        name: "Set Gorrito y Zapatitos - Celeste",
        images: ["images/products/ajuar-gorrito-celeste-1.jpg", "images/products/ajuar-gorrito-celeste-2.jpg", "images/products/ajuar-gorrito-celeste-3.jpg"],
        description: "Para mantener a tu bebé calentito. Set de gorrito, zapatitos y portachupete para recién nacido. La combinación perfecta para cualquier ajuar, presentado en caja envuelto en tul suavemente perfumado.",
        details: ["Incluye: Gorrito, zapatitos y portachupete.", "Material: 100% Algodón Pima Peruano.", "Detalles: Costuras delicadas en color celeste.", "Ajuste suave y cómodo."]
    },
    {
        id: "ajuar-gorrito-beige",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-gorrito",
        name: "Set Gorrito y Zapatitos - Beige",
        images: ["images/products/ajuar-gorrito-beige-1.jpg", "images/products/ajuar-gorrito-beige-2.jpg", "images/products/ajuar-gorrito-beige-3.jpg"],
        description: "Para mantener a tu bebé calentito. Set de gorrito, zapatitos y portachupete para recién nacido. La combinación perfecta para cualquier ajuar, presentado en caja envuelto en tul suavemente perfumado.",
        details: ["Incluye: Gorrito, zapatitos y portachupete.", "Material: 100% Algodón Pima Peruano.", "Detalles: Costuras delicadas en color natural.", "Ajuste suave y cómodo."]
    },








    {
        id: "accesorio-sonajero-elefante-celeste",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Elefante Celeste",
        images: ["images/products/sonajero-elefante-celeste.jpg"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-elefante-beige",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Elefante Beige",
        images: ["images/products/sonajero-elefante-beige.jpg"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-sol-amarillo",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Sol Amarillo",
        images: ["images/products/sonajero-sol-amarillo.jpg"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-flor-fucsia",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Flor Fucsia",
        images: ["images/products/sonajero-flor-fucsia.jpg"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-flor-lila",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Flor Lila",
        images: ["images/products/sonajero-flor-lila.jpg"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-flor-verde",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Flor Verde",
        images: ["images/products/sonajero-flor-verde.jpg"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-elefante-celeste2",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Elefante Celeste",
        images: ["images/products/sonajero-elefante-celeste2.jpg"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-flor-lila2",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Flor Lila",
        images: ["images/products/sonajero-flor-lila2.jpg"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },







    {
        id: "accesorio-portachupete-osito-rosa",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Osito Rosa",
        images: ["images/products/portachupete-osito-rosa.jpg"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-monito-celeste",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Monito Celeste",
        images: ["images/products/portachupete-monito-celeste.jpg"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
     {
        id: "accesorio-portachupete-vaca-beige",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Vaca Beige",
        images: ["images/products/portachupete-vaca-beige.jpg"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-leon-verde",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "León Verde",
        images: ["images/products/portachupete-leon-verde.jpg"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-mariquita-rosa",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Mariquita Rosa",
        images: ["images/products/portachupete-mariquita-rosa.jpg"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-hipopotamo-celeste",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Hipopótamo Celeste",
        images: ["images/products/portachupete-hipopotamo-celeste.jpg"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
     {
        id: "accesorio-portachupete-hipopotamo-beige",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Hipopótamo Beige",
        images: ["images/products/portachupete-hipopotamo-beige.jpg"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-hipopotamo-verde",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Hipopótamo Verde",
        images: ["images/products/portachupete-hipopotamo-verde.jpg"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },

 
    




    {
        id: "colita-fucsia",
        category: "colitas",
        categoryName: "Colitas",
        subCategory: "colita",
        name: "Set x2 Colitas - Flores Fucsia",
        images: ["images/products/colita-fucsia-1.jpg", "images/products/colita-fucsia-2.jpg"],
        description: "¡Dale un toque de color y alegría al peinado de tu nena! Set de 2 colitas para el pelo con apliques de flores súper lindas y delicadas.",
        details: ["Hecha a mano en Argentina.", "Diseño: Flores de tela divertidas y coloridas.", "Elástico duradero y gentil con el pelo.", "Se vende por par."]
    },
    {
        id: "colita-lila",
        category: "colitas",
        categoryName: "Colitas",
        subCategory: "colita",
        name: "Set x2 Colitas - Flores Lila",
        images: ["images/products/colita-lila-1.jpg", "images/products/colita-lila-2.jpg"],
        description: "¡Dale un toque de color y alegría al peinado de tu nena! Set de 2 colitas para el pelo con apliques de flores súper lindas y delicadas.",
        details: ["Hecha a mano en Argentina.", "Diseño: Flores de tela divertidas y coloridas.", "Elástico duradero y gentil con el pelo.", "Se vende por par."]
    },
    {
        id: "colita-rosa",
        category: "colitas",
        categoryName: "Colitas",
        subCategory: "colita",
        name: "Set x2 Colitas - Flores Rosa",
        images: ["images/products/colita-rosa-1.jpg", "images/products/colita-rosa-2.jpg"],
        description: "¡Dale un toque de color y alegría al peinado de tu nena! Set de 2 colitas para el pelo con apliques de flores súper lindas y delicadas.",
        details: ["Hecha a mano en Argentina.", "Diseño: Flores de tela divertidas y coloridas.", "Elástico duradero y gentil con el pelo.", "Se vende por par."]
    },
    {
        id: "colita-verde",
        category: "colitas",
        categoryName: "Colitas",
        subCategory: "colita",
        name: "Set x2 Colitas - Flores Verde",
        images: ["images/products/colita-verde-1.jpg", "images/products/colita-verde-2.jpg"],
        description: "¡Dale un toque de color y alegría al peinado de tu nena! Set de 2 colitas para el pelo con apliques de flores súper lindas y delicadas.",
        details: ["Hecha a mano en Argentina.", "Diseño: Flores de tela divertidas y coloridas.", "Elástico duradero y gentil con el pelo.", "Se vende por par."]
    },
    {
        id: "colita-turquesa",
        category: "colitas",
        categoryName: "Colitas",
        subCategory: "colita",
        name: "Set x2 Colitas - Flores Turquesa",
        images: ["images/products/colita-turquesa-1.jpg", "images/products/colita-turquesa-2.jpg"],
        description: "¡Dale un toque de color y alegría al peinado de tu nena! Set de 2 colitas para el pelo con apliques de flores súper lindas y delicadas.",
        details: ["Hecha a mano en Argentina.", "Diseño: Flores de tela divertidas y coloridas.", "Elástico duradero y gentil con el pelo.", "Se vende por par."]
    }
];




const ALL_IMAGES = {

    logoImage: 'images/logo-big.png',
    logoImageSmall: 'images/logo-small.png',
    footerLogo: 'images/logo-footer.png',
    

    ctaGiraffe: 'images/cta-giraffe.png',
    aboutUsPhoto: 'images/about-us-photo.jpg',

    heroImage1: 'images/hero-1.jpg',
    heroImage2: 'images/hero-2.jpg',
    heroImage3: 'images/hero-3.jpg',


    ajuarBatita: 'images/ajuar-batita.jpg',
    ajuarGorrito: 'images/ajuar-gorrito.jpg',
    accesorioSonajeros: 'images/accesorio-sonajeros.jpg',
    accesorioPortachupetes: 'images/accesorio-portachupetes.jpg',
    colitaFucsia: 'images/colita-fucsia.jpg',
    colitaLila: 'images/colita-lila.jpg',
    colitaRosa: 'images/colita-rosa.jpg',
    colitaVerde: 'images/colita-verde.jpg',
    colitaTurquesa: 'images/colita-turquesa.jpg',

    ajuar: 'images/ajuar.jpg',
    accesorio: 'images/accesorio.jpg',
    colita: 'images/colita.jpg'
};