export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.categoria === categoryId));
    }, 500);
  });
};

const products = [
  {
    "id": 1,
    "nombre": "Manzana",
    "categoria": "Fruta",
    "precio": 1.99,
    "stock": 100,
    "imagen": "./manzanas.png",
    "description": "Manzana roja de la variedad Fuji, cultivada en Chile. Es una fruta de tamaño mediano, de forma redondeada y color rojo intenso. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 2,
    "nombre": "Plátano",
    "categoria": "Fruta",
    "precio": 0.99,
    "stock": 80,
    "imagen": "./platano.jpg",
    "description": "Plátano de la variedad Cavendish, cultivado en Ecuador. Es una fruta de tamaño mediano, de forma alargada y color amarillo. Su pulpa es blanca, cremosa y dulce. Es una fruta muy saludable, rica en fibra y potasio."
  },
  {
    "id": 3,
    "nombre": "Zanahoria",
    "categoria": "Verdura",
    "precio": 0.49,
    "stock": 50,
    "imagen": "./zanahoria.jpg",
    "description": "Zanahoria de la variedad Nantes, cultivada en Chile. Es una verdura de tamaño mediano, de forma alargada y color naranja. Su pulpa es blanca, crujiente y dulce. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 4,
    "nombre": "Tomate",
    "categoria": "Verdura",
    "precio": 0.79,
    "stock": 30,
    "imagen": "./tomate.jpg",
    "description": "Tomate de la variedad Cherry, cultivado en Chile. Es una verdura de tamaño pequeño, de forma redondeada y color rojo intenso. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 5,
    "nombre": "Papa",
    "categoria": "Verdura",
    "precio": 0.99,
    "stock": 20,
    "imagen": "./papa.jpg",
    "description": "Papa de la variedad Yungay, cultivada en Chile. Es una verdura de tamaño mediano, de forma redondeada y color marrón. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 6,
    "nombre": "Cebolla",
    "categoria": "Verdura",
    "precio": 0.79,
    "stock": 40,
    "imagen": "./cebolla.jpg",
    "description": "Cebolla de la variedad Valenciana, cultivada en Chile. Es una verdura de tamaño mediano, de forma redondeada y color marrón. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 7,
    "nombre": "Lechuga",
    "categoria": "Verdura",
    "precio": 0.55,
    "stock": 15,
    "imagen": "./lechuga.png",
    "description": "Lechuga de la variedad Batavia, cultivada en Chile. Es una verdura de tamaño mediano, de forma redondeada y color verde. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 8,
    "nombre": "Pepino",
    "categoria": "Verdura",
    "precio": 1.29,
    "stock": 10,
    "imagen": "./pepino.jpg",
    "description": "Pepino de la variedad Holandés, cultivado en Chile. Es una verdura de tamaño mediano, de forma alargada y color verde. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 9,
    "nombre": "Pimiento",
    "categoria": "Verdura",
    "precio": 1.99,
    "stock": 5,
    "imagen": "./pimiento.jpg",
    "description": "Pimiento de la variedad California, cultivado en Chile. Es una verdura de tamaño mediano, de forma redondeada y color rojo intenso. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 10,
    "nombre": "Zapallo Italiano",
    "categoria": "Verdura",
    "precio": 0.65,
    "stock": 25,
    "imagen": "./zapallo-italiano.jpg",
    "description": "Zapallo Italiano de la variedad Genovés, cultivado en Chile. Es una verdura de tamaño mediano, de forma alargada y color verde. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 11,
    "nombre": "Naranja",
    "categoria": "Fruta",
    "precio": 0.85,
    "stock": 60,
    "imagen": "./naranja.jpg",
    "description": "Naranja de la variedad Navel, cultivada en Chile. Es una fruta de tamaño mediano, de forma redondeada y color naranja. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 12,
    "nombre": "Limón",
    "categoria": "Fruta",
    "precio": 1.5,
    "stock": 70,
    "imagen": "./limon.jpg",
    "description": "Limón de la variedad Eureka, cultivado en Chile. Es una fruta de tamaño mediano, de forma redondeada y color amarillo. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 13,
    "nombre": "Mandarina",
    "categoria": "Fruta",
    "precio": 1.25,
    "stock": 90,
    "imagen": "./mandarina.jpg",
    "description": "Mandarina de la variedad Clementina, cultivada en Chile. Es una fruta de tamaño mediano, de forma redondeada y color naranja. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 14,
    "nombre": "Pomelo",
    "categoria": "Fruta",
    "precio": 2.0,
    "stock": 20,
    "imagen": "./pomelo.jpg",
    "description": "Pomelo de la variedad Star Ruby, cultivado en Chile. Es una fruta de tamaño mediano, de forma redondeada y color amarillo. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 15,
    "nombre": "Piña",
    "categoria": "Fruta",
    "precio": 1.75,
    "stock": 30,
    "imagen": "./piña.jpg",
    "description": "Piña de la variedad Cayena Lisa, cultivada en Chile. Es una fruta de tamaño mediano, de forma redondeada y color amarillo. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 16,
    "nombre": "Frutilla",
    "categoria": "Fruta",
    "precio": 1.35,
    "stock": 40,
    "imagen": "./frutilla.jpg",
    "description": "Frutilla de la variedad Albión, cultivada en Chile. Es una fruta de tamaño mediano, de forma redondeada y color rojo intenso. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 17,
    "nombre": "Kiwi",
    "categoria": "Fruta",
    "precio": 2.25,
    "stock": 50,
    "imagen": "./kiwi.jpeg",
    "description": "Kiwi de la variedad Hayward, cultivado en Chile. Es una fruta de tamaño mediano, de forma redondeada y color marrón. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 18,
    "nombre": "Membrillo",
    "categoria": "Fruta",
    "precio": 0.99,
    "stock": 60,
    "imagen": "./membrillo.jpg",
    "description": "Membrillo de la variedad Pineapple, cultivado en Chile. Es una fruta de tamaño mediano, de forma redondeada y color amarillo. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra."
  },
  {
    "id": 19,
    "nombre": "Manzana Verde",
    "categoria": "Fruta",
    "precio": 2.99,
    "stock": 70,
    "imagen": "./manzana-verde.jpg",
    "description": "Manzana verde de la variedad Granny Smith, cultivada en Chile. Es una fruta de tamaño mediano, de forma redondeada y color verde. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en antioxidantes."
  },
  {
    "id": 20,
    "nombre": "Palta",
    "categoria": "Fruta",
    "precio": 4.99,
    "stock": 80,
    "imagen": "./palta.png",
    "description": "Palta de la variedad Hass, cultivada en Chile. Es una fruta de tamaño mediano, de forma redondeada y color verde. Su pulpa es blanca, cremosa y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 21,
    "nombre": "Pepino Dulce",
    "categoria": "Fruta",
    "precio": 1.75,
    "stock": 90,
    "imagen": "./pepino-dulce.jpg",
    "description": "Pepino dulce de la variedad Melón, cultivado en Chile. Es una fruta de tamaño mediano, de forma redondeada y color verde. Su pulpa es blanca, cremosa y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra."
  },
  {
    "id": 22,
    "nombre": "Mango",
    "categoria": "Fruta",
    "precio": 3.99,
    "stock": 60,
    "imagen": "./mango.jpg",
    "description": "Mango de la variedad Kent, cultivado en Chile. Es una fruta de tamaño mediano, de forma redondeada y color amarillo. Su pulpa es blanca, cremosa y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra."
  },
  {
    "id": 23,
    "nombre": "Pera",
    "categoria": "Fruta",
    "precio": 1.25,
    "stock": 50,
    "imagen": "./pera.jpg",
    "description": "Pera de la variedad Packham's Triumph, cultivada en Chile. Es una fruta de tamaño mediano, de forma redondeada y color verde. Su pulpa es blanca, cremosa y jugosa, con un sabor dulce y ligeramente ácido. Es una fruta muy saludable, rica en fibra."
  },
  {
    "id": 24,
    "nombre": "Acelga",
    "categoria": "Verdura",
    "precio": 0.89,
    "stock": 40,
    "imagen": "./acelga.jpg",
    "description": "Acelga de la variedad Verde, cultivada en Chile. Es una verdura de tamaño mediano, de forma redondeada y color verde. Su pulpa es blanca, crujiente y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 25,
    "nombre": "Ajo",
    "categoria": "Verdura",
    "precio": 1.15,
    "stock": 30,
    "imagen": "./ajo.jpg",
    "description": "Ajo de la variedad Chilote, cultivado en Chile. Es una verdura de tamaño mediano, de forma redondeada y color marrón. Su pulpa es blanca, cremosa y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 26,
    "nombre": "Cebolla Morada",
    "categoria": "Verdura",
    "precio": 0.99,
    "stock": 20,
    "imagen": "./cebolla-morada.jpg",
    "description": "Cebolla morada de la variedad Valenciana, cultivada en Chile. Es una verdura de tamaño mediano, de forma redondeada y color morado. Su pulpa es blanca, cremosa y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra y antioxidantes."
  },
  {
    "id": 27,
    "nombre": "Cebollín",
    "categoria": "Verdura",
    "precio": 0.69,
    "stock": 10,
    "imagen": "./cebollin.jpg",
    "description": "Cebollín de la variedad Valenciana, cultivado en Chile. Es una verdura de tamaño mediano, de forma alargada y color verde. Su pulpa es blanca, cremosa y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra."
  },
  {
    "id": 28,
    "nombre": "Apio",
    "categoria": "Verdura",
    "precio": 2.5,
    "stock": 5,
    "imagen": "./apio.jpg",
    "description": "Apio de la variedad Pascal, cultivado en Chile. Es una verdura de tamaño mediano, de forma alargada y color verde. Su pulpa es blanca, cremosa y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra."
  },
  {
    "id": 29,
    "nombre": "Berenjena",
    "categoria": "Verdura",
    "precio": 1.99,
    "stock": 15,
    "imagen": "./berenjena.jpg",
    "description": "Berenjena de la variedad Negra, cultivada en Chile. Es una verdura de tamaño mediano, de forma redondeada y color morado. Su pulpa es blanca, cremosa y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra."
  },
  {
    "id": 30,
    "nombre": "Brócoli",
    "categoria": "Verdura",
    "precio": 0.99,
    "stock": 25,
    "imagen": "./brocoli.jpg",
    "description": "Brócoli de la variedad Calabrese, cultivado en Chile. Es una verdura de tamaño mediano, de forma redondeada y color verde. Su pulpa es blanca, cremosa y jugosa, con un sabor dulce y ligeramente ácido. Es una verdura muy saludable, rica en fibra."
  }
]
