
const PRODUCTS = [
    {
        id: "ajuar-batita-rosa",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-batita",
        name: "Batita y Pantalón Rosa",
        images: ["images/products/batita/ajuar-batita-rosa.webp", "images/products/batita/ajuar-batita-rosa1.webp", "images/products/batita/ajuar-batita-rosa2.webp", "images/products/batita/ajuar-batita-rosa3.webp", "images/products/batita/ajuar-batita-rosa4.webp"],
        description: "¡El primer ajuar para tu bebé, suave como un abrazo! Set de nacimiento de 2 piezas (talle 0-3 meses) confeccionado en 100% algodón Pima peruano. Presentado en caja envuelto en tul suavemente perfumado. <br><strong>Consultanos por opciones para agregar Portachupete o Sonajero.</strong>",
        details: ["Incluye: Batita cruzada y pantaloncito.", "Material: 100% Algodón Pima hipoalergénico.", "Detalles: Finos bordados en rosa.", "Presentación: Caja de regalo con tul perfumado."]
    },
    {
        id: "ajuar-batita-celeste",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-batita",
        name: "Batita y Pantalón Celeste",
        images: ["images/products/batita/ajuar-batita-celeste.webp", "images/products/batita/ajuar-batita-celeste1.webp", "images/products/batita/ajuar-batita-celeste2.webp", "images/products/batita/ajuar-batita-celeste3.webp", "images/products/batita/ajuar-batita-celeste4.webp"],
        description: "¡El primer ajuar para tu bebé, suave como un abrazo! Set de nacimiento de 2 piezas (talle 0-3 meses) confeccionado en 100% algodón Pima peruano. Presentado en caja envuelto en tul suavemente perfumado. <br><strong>Consultanos por opciones para agregar Portachupete o Sonajero.</strong>",
        details: ["Incluye: Batita cruzada y pantaloncito.", "Material: 100% Algodón Pima hipoalergénico.", "Detalles: Finos bordados en celeste.", "Presentación: Caja de regalo con tul perfumado."]
    },
    {
        id: "ajuar-batita-beige",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-batita",
        name: "Batita y Pantalón Beige",
        images: ["images/products/batita/ajuar-batita-beige.webp", "images/products/batita/ajuar-batita-beige1.webp", "images/products/batita/ajuar-batita-beige2.webp", "images/products/batita/ajuar-batita-beige3.webp", "images/products/batita/ajuar-batita-beige4.webp"],
        description: "¡El primer ajuar para tu bebé, suave como un abrazo! Set de nacimiento de 2 piezas (talle 0-3 meses) confeccionado en 100% algodón Pima peruano. Presentado en caja envuelto en tul suavemente perfumado. <br><strong>Consultanos por opciones para agregar Portachupete o Sonajero.</strong>",
        details: ["Incluye: Batita cruzada y pantaloncito.", "Material: 100% Algodón Pima hipoalergénico.", "Detalles: Finos bordados en color natural.", "Presentación: Caja de regalo con tul perfumado."]
    },
    {
        id: "ajuar-gorrito-rosa",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-gorrito",
        name: "Gorrito y Zapatitos Rosa",
        images: ["images/products/gorrito/ajuar-gorrito-rosa.webp", "images/products/gorrito/ajuar-gorrito-rosa1.webp", "images/products/gorrito/ajuar-gorrito-rosa2.webp", "images/products/gorrito/ajuar-gorrito-rosa3.webp"],
        description: "Para mantener a tu bebé calentito. Set de gorrito, zapatitos y portachupete para recién nacido. La combinación perfecta para cualquier ajuar, presentado en caja envuelto en tul suavemente perfumado.",
        details: ["Incluye: Gorrito, zapatitos y portachupete.", "Material: 100% Algodón Pima Peruano.", "Detalles: Costuras delicadas en color rosa.", "Ajuste suave y cómodo."]
    },
    {
        id: "ajuar-gorrito-celeste",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-gorrito",
        name: "Gorrito y Zapatitos Celeste",
        images: ["images/products/gorrito/ajuar-gorrito-celeste.webp", "images/products/gorrito/ajuar-gorrito-celeste1.webp", "images/products/gorrito/ajuar-gorrito-celeste2.webp", "images/products/gorrito/ajuar-gorrito-celeste3.webp"],
        description: "Para mantener a tu bebé calentito. Set de gorrito, zapatitos y portachupete para recién nacido. La combinación perfecta para cualquier ajuar, presentado en caja envuelto en tul suavemente perfumado.",
        details: ["Incluye: Gorrito, zapatitos y portachupete.", "Material: 100% Algodón Pima Peruano.", "Detalles: Costuras delicadas en color celeste.", "Ajuste suave y cómodo."]
    },
    {
        id: "ajuar-gorrito-beige",
        category: "ajuares",
        categoryName: "Ajuares",
        subCategory: "ajuar-gorrito",
        name: "Gorrito y Zapatitos Beige",
        images: ["images/products/gorrito/ajuar-gorrito-beige.webp", "images/products/gorrito/ajuar-gorrito-beige1.webp", "images/products/gorrito/ajuar-gorrito-beige2.webp", "images/products/gorrito/ajuar-gorrito-beige3.webp"],
        description: "Para mantener a tu bebé calentito. Set de gorrito, zapatitos y portachupete para recién nacido. La combinación perfecta para cualquier ajuar, presentado en caja envuelto en tul suavemente perfumado.",
        details: ["Incluye: Gorrito, zapatitos y portachupete.", "Material: 100% Algodón Pima Peruano.", "Detalles: Costuras delicadas en color natural.", "Ajuste suave y cómodo."]
    },








    {
        id: "accesorio-sonajero-elefante-celeste",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Elefante Celeste",
        images: ["images/products/sonajero/sonajero-elefante-celeste-blanco.webp", "images/products/sonajero/sonajero-elefante-celeste-blanco1.webp"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-elefante-beige",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Elefante Beige",
        images: ["images/products/sonajero/sonajero-elefante-beige.webp", "images/products/sonajero/sonajero-elefante-beige1.webp"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-sol-amarillo",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Sol Amarillo",
        images: ["images/products/sonajero/sonajero-sol-amarillo.webp", "images/products/sonajero/sonajero-sol-amarillo1.webp"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-flor-fucsia",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Flor Fucsia",
        images: ["images/products/sonajero/sonajero-flor-fucsia-blanco.webp", "images/products/sonajero/sonajero-flor-fucsia-blanco1.webp"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-flor-lila",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Flor Lila",
        images: ["images/products/sonajero/sonajero-flor-lila-azul.webp", "images/products/sonajero/sonajero-flor-lila-azul1.webp"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-flor-verde",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Flor Verde",
        images: ["images/products/sonajero/sonajero-flor-verde-lila.webp", "images/products/sonajero/sonajero-flor-verde-lila1.webp"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-elefante-celeste2",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Elefante Celeste",
        images: ["images/products/sonajero/sonajero-elefante-celeste-verde.webp", "images/products/sonajero/sonajero-elefante-celeste-verde1.webp"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-flor-lila2",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Flor Lila",
        images: ["images/products/sonajero/sonajero-flor-lila-fucsia.webp", "images/products/sonajero/sonajero-flor-lila-fucsia1.webp"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-elefante-rosa",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Elefante Rosa",
        images: ["images/products/sonajero/sonajero-elefante-rosa-verde.webp", "images/products/sonajero/sonajero-elefante-rosa-verde1.webp"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },
    {
        id: "accesorio-sonajero-elefante-rosa1",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-sonajero",
        name: "Elefante Rosa",
        images: ["images/products/sonajero/sonajero-elefante-rosa-lila.webp", "images/products/sonajero/sonajero-elefante-rosa-lila1.webp"],
        description: "¡El primer juguete de tu bebé! Divertido y colorido sonajero de tela, diseñado para estimular los sentidos de tu bebé de forma segura.",
        details: ["Totalmente de tela: Blandito y suave al tacto.", "¡100% Lavable! Fácil de mantener limpio e higienizado.", "Ideal como juguete de apego.", "Fomenta el desarrollo de la motricidad."]
    },








    {
        id: "accesorio-portachupete-osito-rosa",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Osito Rosa",
        images: ["images/products/portachupete/portachupete-osito-rosa.webp", "images/products/portachupete/portachupete-osito-rosa1.webp"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-monito-celeste",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Monito Celeste",
        images: ["images/products/portachupete/portachupete-monito-celeste.webp", "images/products/portachupete/portachupete-monito-celeste1.webp"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-leon-verde",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "León Verde",
        images: ["images/products/portachupete/portachupete-leon-verde.webp", "images/products/portachupete/portachupete-leon-verde1.webp"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-hipopotamo-celeste",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Hipopótamo Celeste",
        images: ["images/products/portachupete/portachupete-hipopotamo-celeste.webp", "images/products/portachupete/portachupete-hipopotamo-celeste1.webp"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
     {
        id: "accesorio-portachupete-hipopotamo-beige",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Hipopótamo Beige",
        images: ["images/products/portachupete/portachupete-hipopotamo-beige.webp", "images/products/portachupete/portachupete-hipopotamo-beige1.webp"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-hipopotamo-verde",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Hipopótamo Verde",
        images: ["images/products/portachupete/portachupete-hipopotamo-verde.webp", "images/products/portachupete/portachupete-hipopotamo-verde1.webp"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-elefante-celeste",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "Elefante Celeste",
        images: ["images/products/portachupete/portachupete-elefante-celeste.webp", "images/products/portachupete/portachupete-elefante-celeste1.webp"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },
    {
        id: "accesorio-portachupete-leon-beige",
        category: "accesorios",
        categoryName: "Accesorios",
        subCategory: "accesorio-portachupete",
        name: "León Beige",
        images: ["images/products/portachupete/portachupete-leon-beige.webp", "images/products/portachupete/portachupete-leon-beige1.webp"],
        description: "Práctico y lindo portachupetes para mantener el chupete de tu bebé siempre a mano y limpio. ¡Un accesorio súper práctico que no te puede faltar!",
        details: ["Seguridad: Broche de plástico resistente y seguro.", "Diseño: Aplique de tela lavable con diseño tierno.", "Fácil de sujetar a la ropa del bebé."]
    },

 
    




    {
        id: "colita-fucsia",
        category: "colitas",
        categoryName: "Colitas",
        subCategory: "colita",
        name: "Flores Fucsia",
        images: ["images/products/colitas/colita-fucsia-1.webp", "images/products/colitas/colita-fucsia-2.webp"],
        description: "¡Dale un toque de color y alegría al peinado de tu nena! Set de 2 colitas para el pelo con apliques de flores súper lindas y delicadas.",
        details: ["Hecha a mano en Argentina.", "Diseño: Flores de tela divertidas y coloridas.", "Elástico duradero y gentil con el pelo.", "Se vende por par."]
    },
    {
        id: "colita-lila",
        category: "colitas",
        categoryName: "Colitas",
        subCategory: "colita",
        name: "Flores Lila",
        images: ["images/products/colitas/colita-lila-1.webp", "images/products/colitas/colita-lila-2.webp"],
        description: "¡Dale un toque de color y alegría al peinado de tu nena! Set de 2 colitas para el pelo con apliques de flores súper lindas y delicadas.",
        details: ["Hecha a mano en Argentina.", "Diseño: Flores de tela divertidas y coloridas.", "Elástico duradero y gentil con el pelo.", "Se vende por par."]
    },
    {
        id: "colita-rosa",
        category: "colitas",
        categoryName: "Colitas",
        subCategory: "colita",
        name: "Flores Rosa",
        images: ["images/products/colitas/colita-rosa-1.webp", "images/products/colitas/colita-rosa-2.webp"],
        description: "¡Dale un toque de color y alegría al peinado de tu nena! Set de 2 colitas para el pelo con apliques de flores súper lindas y delicadas.",
        details: ["Hecha a mano en Argentina.", "Diseño: Flores de tela divertidas y coloridas.", "Elástico duradero y gentil con el pelo.", "Se vende por par."]
    },
    {
        id: "colita-verde",
        category: "colitas",
        categoryName: "Colitas",
        subCategory: "colita",
        name: "Flores Verde",
        images: ["images/products/colitas/colita-verde-1.webp", "images/products/colitas/colita-verde-2.webp"],
        description: "¡Dale un toque de color y alegría al peinado de tu nena! Set de 2 colitas para el pelo con apliques de flores súper lindas y delicadas.",
        details: ["Hecha a mano en Argentina.", "Diseño: Flores de tela divertidas y coloridas.", "Elástico duradero y gentil con el pelo.", "Se vende por par."]
    },
    {
        id: "colita-turquesa",
        category: "colitas",
        categoryName: "Colitas",
        subCategory: "colita",
        name: "Flores Turquesa",
        images: ["images/products/colitas/colita-turquesa-1.webp", "images/products/colitas/colita-turquesa-2.webp"],
        description: "¡Dale un toque de color y alegría al peinado de tu nena! Set de 2 colitas para el pelo con apliques de flores súper lindas y delicadas.",
        details: ["Hecha a mano en Argentina.", "Diseño: Flores de tela divertidas y coloridas.", "Elástico duradero y gentil con el pelo.", "Se vende por par."]
    }
];




const ALL_IMAGES = {

    logoImage: 'images/logo-big.webp',
    logoImageSmall: 'images/logo-small.webp',
    footerLogo: 'images/logo-footer.webp',
    

    ctaGiraffe: 'images/cta-giraffe.webp',
    aboutUsPhoto: 'images/about-us-photo.webp',

    heroImage1: 'images/hero-1.webp',
    heroImage2: 'images/hero-2.webp',
    heroImage3: 'images/hero-3.webp',
    heroImage4: 'images/hero-4.webp',
    heroImage5: 'images/hero-5.webp',
    heroImage6: 'images/hero-6.webp',


    ajuarBatita: 'images/ajuar-batita.webp',
    ajuarGorrito: 'images/ajuar-gorrito.webp',
    accesorioSonajeros: 'images/accesorio-sonajeros.webp',
    accesorioPortachupetes: 'images/accesorio-portachupetes.webp',
    colitaFucsia: 'images/products/colitas/colita-fucsia-1.webp',
    colitaLila: 'images/products/colitas/colita-lila-1.webp',
    colitaRosa: 'images/products/colitas/colita-rosa-1.webp',
    colitaVerde: 'images/products/colitas/colita-verde-1.webp',
    colitaTurquesa: 'images/products/colitas/colita-turquesa-1.webp',

    ajuar: 'images/ajuar.webp',
    accesorio: 'images/accesorio.webp',
    colita: 'images/colita.webp'
};