const products = [
  {
      id: "1",
      imagen: "https://resizer.iproimg.com/unsafe/1280x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg",
      nombre: "Auto Deportivo",
      category: "Deportivos",
      description: "El Auto Deportivo es la encarnación de la velocidad, la precisión y el lujo. Diseñado para los entusiastas de la conducción que buscan una experiencia de manejo inigualable, este vehículo combina un rendimiento impresionante con una estética deslumbrante. Equipado con un motor de alta potencia, el Auto Deportivo puede acelerar de 0 a 100 km/h en menos de 3.5 segundos, ofreciendo una conducción dinámica y emocionante en cualquier carretera.",
      precio: 345600,
      stock: 3,
  },
  {
      id: "2",
      imagen: "https://media.gq.com.mx/photos/5ffb6e84cbc9d2690de1643e/16:9/w_1920,c_limit/autos-200-mph.jpg",
      nombre: "Auto de Lujo",
      category: "AltaG",
      description: "El Auto de Lujo es la perfecta fusión de sofisticación, innovación y confort, diseñado para aquellos que buscan una experiencia de conducción excepcional en cada trayecto. Este vehículo no solo es un símbolo de estatus, sino también una manifestación de la artesanía y la ingeniería de alta precisión.",
      precio: 210500,
      stock: 2,
  },
  {
      id: "3",
      imagen: "https://media.gq.com.mx/photos/604458fef0cc2a1d8969755c/16:9/w_1920,c_limit/10%20autos%20que%20quieren%20ser%20el%20mejor%20de%202021%20-%20BMW%204-Series%202021%20(1).jpg",
      nombre: "Auto de Ciudad",
      category: "Ciudad",
      description: "El Auto de Ciudad es la opción ideal para la movilidad urbana, combinando practicidad, eficiencia y estilo en un paquete compacto y versátil. Diseñado para navegar sin esfuerzo por calles estrechas y estacionamientos reducidos, este vehículo es la elección perfecta para quienes buscan comodidad y economía en la vida urbana moderna.",
      precio: 140000,
      stock: 12,
  },
  {
      id: "4",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUP4bHwt6MtYhT5CGPwpxZBNkpV3cn4V_7dA&s",
      nombre: "SUV Familiar",
      category: "Ciudad",
      description: "El SUV Familiar combina espacio, seguridad y comodidad, ideal para viajes largos y aventuras familiares. Equipado con tecnología avanzada y características de seguridad de primer nivel, este vehículo ofrece una experiencia de conducción segura y placentera.",
      precio: 295000,
      stock: 5,
  },
  {
      id: "5",
      imagen: "https://mobilityportal.lat/wp-content/uploads/2024/04/Xiaomi-auto-electrico.jpg",
      nombre: "Auto Eléctrico",
      category: "Deportivos",
      description: "El Auto Eléctrico representa el futuro de la movilidad, combinando eficiencia energética con un rendimiento sin emisiones. Equipado con la última tecnología en baterías, este vehículo ofrece una autonomía impresionante y una carga rápida.",
      precio: 420000,
      stock: 8,
  },
  {
      id: "6",
      imagen: "https://www.revistagente.com/wp-content/uploads/2023/11/ABT-XGT-1-620x464.jpg.webp",
      nombre: "Auto de Carreras",
      category: "Deportivos",
      description: "El Auto de Carreras es un vehículo diseñado para la pista, ofreciendo una velocidad y agilidad extraordinarias. Con un diseño aerodinámico y un motor de alta potencia, este auto está listo para competir y ganar.",
      precio: 550000,
      stock: 1,
  },
  {
      id: "7",
      imagen: "https://www.elcarrocolombiano.com/wp-content/uploads/2019/06/20190606-MERCEDES-BENZ-EQE-PRIMEROS-DATOS-AA.jpg",
      nombre: "Sedán Ejecutivo",
      category: "AltaG",
      description: "El Sedán Ejecutivo combina elegancia y tecnología de punta para ofrecer una experiencia de conducción refinada. Equipado con características de confort y seguridad de alta gama, este vehículo es ideal para profesionales que buscan lo mejor en cada viaje.",
      precio: 180000,
      stock: 4,
  },
  {
      id: "8",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbuE3a-RywlVP2K_mVKlBAz70_5KgFbPe3Dg&s",
      nombre: "Compacto Eficiente",
      category: "Ciudad",
      description: "El Compacto Eficiente es perfecto para la vida urbana, ofreciendo una gran economía de combustible y facilidad de estacionamiento. Con un diseño moderno y un interior cómodo, este auto es ideal para la conducción diaria en la ciudad.",
      precio: 95000,
      stock: 15,
  },
  {
      id: "9",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaMZmQFyhcX7r3sYyWVbn4rnkpDieCsvGKQ&s",
      nombre: "SUV Deportivo",
      category: "Deportivos",
      description: "El SUV Deportivo combina la robustez de un SUV con el rendimiento de un auto deportivo. Equipado con un potente motor y tracción en las cuatro ruedas, este vehículo es ideal tanto para la ciudad como para terrenos difíciles.",
      precio: 320000,
      stock: 7,
  },
  {
      id: "10",
      imagen: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/89f7b75ffd012fdd42152c9567e52f7e.jpg",
      nombre: "Híbrido Ecológico",
      category: "AltaG",
      description: "El Híbrido Ecológico ofrece una combinación perfecta de eficiencia de combustible y reducción de emisiones. Con tecnología híbrida avanzada, este vehículo proporciona un rendimiento excepcional mientras cuida del medio ambiente.",
      precio: 275000,
      stock: 6,
  },
  {
      id: "11",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBx4L5wcV9fnRVPxQljHV1MkWvoRR5qjhjVA&s",
      nombre: "Todoterreno",
      category: "AltaG",
      description: "El Todoterreno está diseñado para aventuras extremas, capaz de enfrentar cualquier tipo de terreno con facilidad. Equipado con tracción en las cuatro ruedas y una suspensión robusta, este vehículo es ideal para exploradores y aventureros.",
      precio: 350000,
      stock: 3,
  },
  {
      id: "12",
      imagen: "https://somoselectricos.com/wp-content/uploads/2023/06/Aehra-The-Sedan.jpg",
      nombre: "Sedán Eléctrico",
      category: "Ciudad",
      description: "El Sedán Eléctrico ofrece una experiencia de conducción silenciosa y eficiente con un diseño elegante y moderno. Equipado con las últimas innovaciones en tecnología de baterías y asistencia al conductor, este vehículo es perfecto para quienes buscan lo último en movilidad eléctrica.",
      precio: 400000,
      stock: 4,
  }
];

export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod)=> prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 1000);
    });
  };