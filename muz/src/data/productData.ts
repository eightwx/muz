export interface Product {
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  specifications: string[];
  isOnSale?: boolean;
}

const products: Product[] = [
  {
    name: 'Акустическая гитара',
    price: 5000,
    image: '/assets/img/guitar.jpg',
    category: 'Гитары',
    description: 'Отличная акустическая гитара для начинающих и профессионалов.',
    specifications: ['Материал: Дерево', 'Вес: 2 кг', 'Размер: 40 дюймов'],
    isOnSale: true,
  },
  // Добавьте остальные продукты
];

export default products;
