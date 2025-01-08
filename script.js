function calculate() {
    var width = parseFloat(document.getElementById("width").value);
    var length = parseFloat(document.getElementById("length").value);
    var cost = parseFloat(document.getElementById("cost").value);
    var areaWidth = 130;
    var areaHeight = 74;
    var spacing = 0.5; // 5 mm in cm

    var piecesHorizontal = Math.floor(areaWidth / (width + spacing));
    var piecesVertical = Math.floor(areaHeight / (length + spacing));
    var totalPieces = piecesHorizontal * piecesVertical;
    var totalCost = totalPieces * cost;

    var result = document.getElementById("result");
    result.innerHTML = "Número de piezas horizontales: " + piecesHorizontal + "<br>" +
                       "Número de piezas verticales: " + piecesVertical + "<br>" +
                       "Total de piezas: " + totalPieces + "<br>" +
                       "Costo total: $" + totalCost.toFixed(2);
}