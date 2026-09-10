//crie uma array de um obijeto
//escontre usando um for um unico registro de acordo com uma 
//depois encontre o mesmo registro usando find
const carros = [
  { id: 1, marca: 'Ford', modelo: 'fusion', cv: 248 },
  { id: 2, marca: 'Chevrolet', modelo: 'camaro', cv: 461 },
  { id: 3, marca: 'Fiat', modelo: 'uno', cv: 75 },
  { id: 4, marca: 'Volkswagen', modelo: 'gol', cv: 84 }
];
const carrosMaisDe400cv = carros.find(carro => carro.cv > 400);

console.log(carrosMaisDe400cv);







const carross = [
  { id: 1, marca: 'Ford', modelo: 'fusion', cv: 248 },
  { id: 2, marca: 'Chevrolet', modelo: 'camaro', cv: 461 },
  { id: 3, marca: 'Fiat', modelo: 'uno', cv: 75 },
  { id: 4, marca: 'Volkswagen', modelo: 'gol', cv: 84 }
];

let carrossMaisDe400cv;

for (let i = 0; i < carros.length; i++) {
  if (carros[i].cv > 400) {
    carrosMaisDe400cv = carros[i];
    break;
  }
}

console.log(carrosMaisDe400cv);
