function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join(" ")));
}

function getRandomInteger(rndMin = 0, rndMax = 9) {
    return Math.floor(Math.random() * (rndMax - rndMin + 1)) + rndMin;
}