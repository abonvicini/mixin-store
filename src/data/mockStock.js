import { nanoid } from 'nanoid';

export const mockStock = [
  {
    id: nanoid(),
    name: 'Producto 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque fringilla vulputate. Vestibulum massa diam.',
    price: 3500,
    img: 'https://image.freepik.com/foto-gratis/muebles-modernos-estudios-estilo-vida-verde_1122-1837.jpg?1',
    category: 'silla',
    stock: 15,
  },
  {
    id: nanoid(),
    name: 'Producto 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque fringilla vulputate. Vestibulum massa diam.',
    price: 500,
    img: 'https://image.freepik.com/foto-gratis/primer-plano-taburete-bar-estilo-loft_181624-30022.jpg',
    category: 'banqueta',
    stock: 6,
  },
  {
    id: nanoid(),
    name: 'Producto 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque fringilla vulputate. Vestibulum massa diam.',
    price: 1200,
    img: 'https://image.freepik.com/foto-gratis/taburetes-bar-altos-modernos-madera_53876-95411.jpg',
    category: 'banqueta',
    stock: 10,
  },
  {
    id: nanoid(),
    name: 'Producto 4',
    description:
      'Curabitur sit amet ligula justo. Sed nec malesuada diam. Cras eu gravida nibh, ac fringilla lectus. Phasellus id tellus nec turpis euismod dictum non at lorem. Nulla sit.',
    price: 4500,
    img: 'https://img.freepik.com/foto-gratis/silla-oficina_1203-2719.jpg?size=338&ext=jpg',
    category: 'silla',
    stock: 2,
  },
];
