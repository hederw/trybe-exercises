const acordar = () => 'Acordado!';
const cafe = () => 'Bora tomar café!';
const partiu = () => 'Partiu dormir!';


const fazendoCoisas = (elemento) => console.log(elemento());

fazendoCoisas(acordar);
fazendoCoisas(cafe);
fazendoCoisas(partiu);