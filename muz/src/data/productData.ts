import guitarImage from '../assets/img/guitarImage.jpg';
import electricguitarImage from '../assets/img/electricguitarImage.jpg';
import barabaniImage from '../assets/img/barabaniImage.jpg';
import sintImage from '../assets/img/sintImage.jpg';
import skripkaImage from '../assets/img/skripkaImage.jpg';
import fleitaImage from '../assets/img/fleitaImage.png';
import trubaImage from '../assets/img/trubaImage.jpg';
import pianonkoImage from '../assets/img/pianonkoImage.jpg';
import ukuleleImage from '../assets/img/ukuleleImage.jpg';
import basguitarImage from '../assets/img/basguitarImage.jpeg';
import klarnetImage from '../assets/img/klarnetImage.jpg';
import electricbarabaniImage from '../assets/img/electricbarabaniImage.jpeg';
import akkardeonjImage from '../assets/img/akkardeonjImage.jpg';
import saksafonImage from '../assets/img/saksafonImage.jpg';
import metallofonImage from '../assets/img/metallofonImage.jpg';
export interface Product {
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  specifications: string[];
}

const products: Product[] = [
  {
    name: 'Акустическая гитара',
    price: 5000,
    image: guitarImage,
    category: 'Гитары',
    description: 'Отличная акустическая гитара для начинающих и профессионалов.',
    specifications: ['Материал: Дерево', 'Вес: 2 кг', 'Размер: 40 дюймов'],
  },
  {
    name: 'Электрогитара',
    price: 15000,
    image: electricguitarImage,
    category: 'Гитары',
    description: 'Высококачественная электрогитара для рок-музыки.',
    specifications: ['Материал: Металл', 'Вес: 3.5 кг', 'Размер: 38 дюймов'],
  },
  {
    name: 'Барабанная установка',
    price: 30000,
    image: barabaniImage,
    category: 'Ударные',
    description: 'Полная барабанная установка для профессионалов.',
    specifications: ['Материал: Металл и пластик', 'Вес: 20 кг', 'Количество барабанов: 5'],
  },
  {
    name: 'Синтезатор',
    price: 12000,
    image: sintImage,
    category: 'Клавишные',
    description: 'Многофункциональный синтезатор для создания музыки.',
    specifications: ['Клавиш: 61', 'Вес: 8 кг', 'Мощность: 60 Вт'],
  },
  {
    name: 'Скрипка',
    price: 8000,
    image: skripkaImage,
    category: 'Струнные',
    description: 'Классическая скрипка для оркестровой музыки.',
    specifications: ['Материал: Дерево', 'Вес: 0.5 кг', 'Размер: 4/4'],
  },
  {
    name: 'Флейта',
    price: 4000,
    image: fleitaImage,
    category: 'Духовые',
    description: 'Простая в использовании флейта для начинающих.',
    specifications: ['Материал: Металл', 'Вес: 0.3 кг', 'Длина: 67 см'],
  },
  {
    name: 'Труба',
    price: 6000,
    image: trubaImage,
    category: 'Духовые',
    description: 'Золотая труба для джазовой музыки.',
    specifications: ['Материал: Латунь', 'Вес: 1.1 кг', 'Длина: 50 см'],
  },
  {
    name: 'Цифровое пианино',
    price: 25000,
    image: pianonkoImage,
    category: 'Клавишные',
    description: 'Электронное пианино с качественным звуком.',
    specifications: ['Клавиш: 88', 'Вес: 12 кг', 'Мощность: 100 Вт'],
  },
  {
    name: 'Укулеле',
    price: 3000,
    image: ukuleleImage,
    category: 'Струнные',
    description: 'Компактное и удобное укулеле для всех возрастов.',
    specifications: ['Материал: Дерево', 'Вес: 0.5 кг', 'Размер: 21 дюйм'],
  },
  {
    name: 'Бас-гитара',
    price: 17000,
    image: basguitarImage,
    category: 'Гитары',
    description: 'Бас-гитара для профессиональной игры.',
    specifications: ['Материал: Дерево', 'Вес: 4 кг', 'Размер: 42 дюйма'],
  },
  {
    name: 'Кларнет',
    price: 7000,
    image: klarnetImage,
    category: 'Духовые',
    description: 'Кларнет для оркестровой и джазовой музыки.',
    specifications: ['Материал: Дерево', 'Вес: 0.8 кг', 'Длина: 60 см'],
  },
  {
    name: 'Электронные барабаны',
    price: 20000,
    image: electricbarabaniImage,
    category: 'Ударные',
    description: 'Электронные барабаны для тихих репетиций.',
    specifications: ['Материал: Металл и пластик', 'Вес: 15 кг', 'Количество барабанов: 5'],
  },
  {
    name: 'Аккордеон',
    price: 15000,
    image: akkardeonjImage,
    category: 'Клавишные',
    description: 'Классический аккордеон для народной музыки.',
    specifications: ['Клавиш: 41', 'Вес: 5 кг', 'Цвет: Красный'],
  },
  {
    name: 'Саксофон',
    price: 22000,
    image: saksafonImage,
    category: 'Духовые',
    description: 'Золотой саксофон для джазовой музыки.',
    specifications: ['Материал: Латунь', 'Вес: 2.5 кг', 'Длина: 75 см'],
  },
  {
    name: 'Металлофон',
    price: 2500,
    image: metallofonImage,
    category: 'Ударные',
    description: 'Металлофон для начинающих музыкантов.',
    specifications: ['Материал: Металл', 'Вес: 1 кг', 'Количество пластин: 25'],
  },
];

export default products;
