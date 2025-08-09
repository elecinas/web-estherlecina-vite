export type Gallery = {
  id: string;
  title: string;
  description: string;
  images: string[];
};



export const galleries: Gallery[] = [
  {
    id: 'comic',
    title: 'Cómic autobiográfico',
    description: 'Historias ilustradas breves sobre la vida freelance',
    images: [
      '/images/comic1.jpg',
      '/images/comic2.jpg',
    ],
  },
  {
    id: 'ilustracion',
    title: 'Ilustración',
    description: 'Ilustraciones sueltas y proyectos personales',
    images: [
      '/images/ilustracion1.jpg',
      '/images/ilustracion2.jpg',
    ],
  },
];