const filmes = [
    {Nome: "Carros 1", Ano: 2006},
    {Nome: "Carros 2", Ano: 2011},
    {Nome: "Carros 3", Ano: 2017},
    {Nome: "Como treinar seu dragão", Ano: 2010},
    {Nome: "Como treinar seu dragão 2", Ano: 2014},
    {Nome: "Como treinar seu dragão 3", Ano: 2019},
    {Nome: "Enrolados", Ano: 2010},
    {Nome: "Meu Malvado Favorito", Ano: 2010},
    {Nome: "Meu Malvado Favorito 2", Ano: 2013},
    {Nome: "Meu Malvado Favorito 3", Ano: 2016},

];



 //for(i = 0; i < filmes.length; i++) {
//     let filme = filmes[i];
//     if (filme.Ano > 2000) {
//         console.log("Encontrei o filme com ano maior que 2000");
//         break;}
// }





const depoisDeDoisMil = filmes.find(filmes => filmes.Ano > 2000);
console.log(depoisDeDoisMil);