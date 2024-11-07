function calculate() {
    // Prix unitaires
    let price1 = 10;
    let price2 = 15;
    let price3 = 20;

    // Quantités
    let quantity1 = parseFloat(document.getElementById("quantity1").value) || 0;
    let quantity2 = parseFloat(document.getElementById("quantity2").value) || 0;
    let quantity3 = parseFloat(document.getElementById("quantity3").value) || 0;

    // Calcul des résultats pour chaque ligne
    let result1 = price1 * quantity1;
    let result2 = price2 * quantity2;
    let result3 = price3 * quantity3;

    // Mise à jour des champs "Résultat"
    document.getElementById("result1").value = result1.toFixed(2);
    document.getElementById("result2").value = result2.toFixed(2);
    document.getElementById("result3").value = result3.toFixed(2);

    // Calcul du total TTC
    let total = result1 + result2 + result3;
    document.getElementById("total").value = total.toFixed(2);
}

function resetFields() {
    document.getElementById("quantity1").value = 1;
    document.getElementById("quantity2").value = 2;
    document.getElementById("quantity3").value = 3;
    document.getElementById("result1").value = 0;
    document.getElementById("result2").value = 0;
    document.getElementById("result3").value = 0;
    document.getElementById("total").value = 0;
}
