import dados from 'readline-sync'

let listaSalario = [
    {ano: 2010, salario: 510},
    {ano: 2011, salario: 545},
    {ano: 2012, salario: 622},
    {ano: 2013, salario: 678},
    {ano: 2014, salario: 724},
    {ano: 2015, salario: 788},
    {ano: 2016, salario: 880},
    {ano: 2017, salario: 937},
    {ano: 2018, salario: 954},
    {ano: 2019, salario: 998},
    {ano: 2020, salario: 1045}
]

let listaInflacao = [
    {ano: 2010, inflacao: 5.91},
    {ano: 2011, inflacao: 6.50},
    {ano: 2012, inflacao: 5.84},
    {ano: 2013, inflacao: 5.91},
    {ano: 2014, inflacao: 6.41},
    {ano: 2015, inflacao: 10.67},
    {ano: 2016, inflacao: 6.29},
    {ano: 2017, inflacao: 2.95},
    {ano: 2018, inflacao: 3.75},
    {ano: 2019, inflacao: 4.31},
    {ano: 2020, inflacao: 4.52}
]

let label_ano = "Ano: "
let label_salario = "Salario mínimo: "
let label_inflacao = "Inflação IPCA: "

let opcao = dados.question(
    `Escolha uma das alternativas:

    1 - Listar os salários minímos de 2010 à 2020
    2 - Listar o índice IPCA de 2010 à 2020
    3 - Comparação entre o percentual de aumento salarial e o IPCA

    Digite o número de sua escolha: `)

switch (opcao) {
    case '1':
        mostraSalario()
        break;
    
    case '2':
        mostraInflacao()
        break;

    case '3':
        comparaSalarioInflacao()
        break;

    default:
        break;
}

function mostraSalario () {
    for (let salario of listaSalario) {
        console.log(`\n${label_ano.padEnd(30, ".")} ${salario.ano}`)
        console.log(`${label_salario.padEnd(30, ".")} R$ ${salario.salario.toFixed(2).replace(".",",")}\n`)
    }
}

function mostraInflacao () {
    for (let inflacao of listaInflacao) {
        console.log(`\n${label_ano.padEnd(30, ".")} ${inflacao.ano}`)
        console.log(`${label_inflacao.padEnd(30, ".")} ${inflacao.inflacao.toFixed(2).replace(".",",")}%\n`)
    }
}

function comparaSalarioInflacao () {

}