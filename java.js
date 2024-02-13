/*var bairrosValores = {
    "centro": 10.0,
    "gloria": 10.0,
    "Centro": 10.0,
    "Cidade Baixa": 10.0,
    "cidade baixa": 10.0,
    "Bom Fim": 10.0,
    "bom fim": 10.0,
    "Bom fim": 10.0,
    "Moinhos de Vento": 10.0,
    "moinhos de vento": 10.0,
    "Mont'Serrat": 10.0,
    "Auxiliadora": 10.0,
    "Floresta": 10.0,
    "Independência": 10.0,
    "Menino Deus": 10.0,
    "menino deus": 10.0,
    "Tristeza": 15.0,
    "Bela Vista": 10.0,
    "Petrópolis": 10.0,
    "Jardim Botânico": 13.0,
    "Belém Novo": 18.0,
    "Belem Novo": 18.0,
    "belém Novo": 18.0,
    "Belem novo": 18.0,
    "Cristal": 13.0,
    "centro": 10.0,
    "cidade baixa": 10.0,
    "bom fim": 10.0,
    "moinhos de vento": 10.0,
    "mont'serrat": 10.0,
    "auxiliadora": 10.0,
    "floresta": 10.0,
    "independência": 10.0,
    "menino deus": 10.0,
    "tristeza": 15.0,
    "bela vista": 10.0,
    "Bela Vista": 10.0,
    "petrópolis": 10.0,
    "jardim botânico": 13.0,
    "belém novo": 18.0,
    "cristal": 13.0,
    "Ipanema": 30.0,
    "canoas niteroi": 20.0,
    "centro canoas": 30.0,
    "centro canoas": 20.0,
    "centro canoas": 20.0,
    "centro canoas": 20.0,
    "centro canoas": 20.0,
    "centro canoas": 20.0,
    "centro canoas": 20.0,
    "centro canoas": 20.0,
    "centro canoas": 20.0,
    "centro canoas": 20.0,
    "Restinga": 50.0,
    // Adicione mais bairros e valores conforme necessário
};

var valorPartida = 0.0; // Valor do ponto de partida

function calculateDelivery() {
    var pickup = document.getElementById("pickup").value;
    var destination = document.getElementById("destination").value;

    // Verificando se os bairros estão mapeados e calculando o valor da entrega
    if (bairrosValores.hasOwnProperty(pickup) && bairrosValores.hasOwnProperty(destination)) {
        var valorEntrega = calcularValorEntrega(bairrosValores[pickup], bairrosValores[destination], valorPartida);
        document.getElementById("result").innerText = "O valor da entrega de '" + pickup + "' para '" + destination + "' é: R$" + valorEntrega;
    } else {
        document.getElementById("result").innerText = "Bairro de origem ou destino não encontrado.";
    }
}

function calcularValorEntrega(valorPickup, valorDestination, valorPartida) {
    // Calcular o valor da entrega com base nos valores dos bairros e do ponto de partida
    return valorPickup + valorDestination + valorPartida;
}

*/

var bairrosValores = {
    "centro": 10.0,
    "gloria": 10.0,
    "Cidade Baixa": 10.0,
    "cidade baixa": 10.0,
    "Bom Fim": 10.0,
    "bom fim": 10.0,
    "Moinhos de Vento": 10.0,
    "moinhos de vento": 10.0,
    "Mont'Serrat": 10.0,
    "Auxiliadora": 10.0,
    "Floresta": 10.0,
    "Independência": 10.0,
    "Menino Deus": 10.0,
    "menino deus": 10.0,
    "Tristeza": 15.0,
    "Bela Vista": 10.0,
    "Petrópolis": 10.0,
    "Jardim Botânico": 13.0,
    "Belém Novo": 18.0,
    "Belem Novo": 18.0,
    "belém Novo": 18.0,
    "Belem novo": 18.0,
    "Cristal": 13.0,
    "Niteroi canoas": 15.0,
    "Centro Canoas": 20.0, // Exemplo adicionado conforme sua lista
};

var valorPartida = 0.0; // Valor do ponto de partida

function calculateDelivery() {
    var pickup = document.getElementById("pickup").value.toLowerCase(); // Convertendo para minúsculas
    var destination = document.getElementById("destination").value.toLowerCase(); // Convertendo para minúsculas

    var pickupNormalized = normalizeString(pickup);
    var destinationNormalized = normalizeString(destination);
    
    // Verificando se os bairros estão mapeados e calculando o valor da entrega
    var foundPickup = findBairro(pickupNormalized);
    var foundDestination = findBairro(destinationNormalized);
    
    if (foundPickup !== null && foundDestination !== null) {
        var valorEntrega = calcularValorEntrega(bairrosValores[foundPickup], bairrosValores[foundDestination], valorPartida);
        document.getElementById("result").innerText = "Valor aproximado de '" + foundPickup + "' para '" + foundDestination + "' é: R$" + valorEntrega;
    } else {
        document.getElementById("result").innerText = "Bairro de origem ou destino não encontrado.";
    }
}

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function findBairro(bairro) {
    for (var key in bairrosValores) {
        if (normalizeString(key) === bairro) {
            return key;
        }
    }
    return null;
}

function calcularValorEntrega(valorPickup, valorDestination, valorPartida) {
    // Calcular o valor da entrega com base nos valores dos bairros e do ponto de partida
    return valorPickup + valorDestination + valorPartida;
};

