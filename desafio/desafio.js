/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

const paises = [];
const medalhas = [];
const rankeando = []; 

while (true) {
    let pais = prompt('Digite o nome de um país ou sair para terminar:');

    if (pais.toLocaleLowerCase() == 'sair') {
        break;
    }

    let medalhas_ouro = Number(prompt(`Quantas medalhas de Ouro o ${pais} tem:`));
    let medalhas_prata = Number(prompt(`Quantas medalhas de Prata o ${pais} tem:`));
    let medalhas_bronze = Number(prompt(`Quantas medalhas de Bronze o ${pais} tem:`));
    
    if (!isNaN(medalhas_ouro) && !isNaN(medalhas_prata) && !isNaN(medalhas_bronze)) {
        let calculo = medalhas_ouro + medalhas_prata + medalhas_bronze;
        medalhas.push(calculo);
        paises.push(pais);
    } else {
        alert("Insira apenas números válidos para as medalhas.");
    }

}


for (let i = 0; i < paises.length; i++) {
    rankeando.push({ pais: paises[i], totalMedalhas: medalhas[i] });
}
rankeando.sort((a, b) => b.totalMedalhas - a.totalMedalhas);

let resultado = "Ranking de medalhas:\n";
for (let i = 0; i < rankeando.length; i++) {
    resultado += `${rankeando[i].pais}: ${rankeando[i].totalMedalhas} medalhas\n`;
}

alert(resultado);
