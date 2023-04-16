function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join(" ")));
}

function getRandomInteger(rndMin = 0, rndMax = 9) {
    return Math.floor(Math.random() * (rndMax - rndMin + 1)) + rndMin;
}

function getRandomMatrix(rows, cols, rndMin, rndMax) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = getRandomInteger(rndMin, rndMax);
        }
    }

    return matrix;
}