const nomeDoInvestidor = document.getElementById("nomeDoInvestidor")
const capitalInicial = document.getElementById("capitalInicial")
const taxaDeJuros = document.getElementById("taxaDeJuros")
const numeroDePeriodos = document.getElementById("numeroDePeriodos")


function calcularMontante() {

    let valorCapitalInicial = parseFloat(capitalInicial.value);

    let valorTaxaDeJurosMensal = parseFloat(taxaDeJurosMensal.value) /100;

    let valorNumeroDeMeses = parseFloat(numeroDeMeses.value);

    if (!nomeDoInvestidor.value || isNaN(valorCapitalInicial) || isNaN(valorTaxaDeJurosMensal) || isNaN(valorNumeroDeMeses)) {
        alert("por favor, preencha os campos corretamentes")
    }


    let valorMontante = valorCapitalInicial * Math.pow(1 + valorTaxaDeJurosMensal, valorNumeroDeMeses);
    alert(
        "Olá "+nomeDoInvestidor.value+"\n"+
       
        "O seu investimento gerará o Montante de "+valorMontante.toFixed(2)

    );
}