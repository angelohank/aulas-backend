//crie um array de objetos

const carro1 = { id: 1, marca: "vw", modelo: "gol", hp: "106" };
const carro2 = { id: 2, marca: "gm", modelo: "vectra", hp: "140" };
const carro3 = { id: 3, marca: "nissan", modelo: "gtr r-35", hp: "530" };
const carro4 = { id: 4, marca: "gm", modelo: "astra", hp: "160" };

const carros = [carro1, carro2, carro3, carro4];

const carro_aspirado_forte = carros.find(
  (carro_atual) => carro_atual.hp === String(160),
);

console.log(carro_aspirado_forte);

// for (i = 0; i < carros.length; i++) {
//   console.log(`[INDEX ATUAL] ${i}`);
//   let carro_atual = carros[i];
//   if (carro_atual.hp == 160) {
//     console.log("achei o aspirado forte");
//     console.log(carro_atual);
//     break;
//   }
// }

//encontre, usando um FOR um unico registro, de acordo com uma condicao

//depois, encontre o mesmo registro usando um find
