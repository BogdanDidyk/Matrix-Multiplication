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

function productTwoMatrices(matrix1, matrix2) {
    const rowsM1 = matrix1.length;
    const colsM1 = matrix1[0].length;
    const rowsM2 = matrix2.length;
    const colsM2 = matrix2[0].length;

    if (colsM1 != rowsM2) {
        throw new Error("Number of columns in the first matrix isn't equal to the number of rows in the second matrix!");
    }

    const resultMatrix = [];
    for (let i = 0; i < rowsM1; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < colsM2; j++) {
            resultMatrix[i][j] = 0;
            for (let h = 0; h < rowsM2; h++) {
                resultMatrix[i][j] += matrix1[i][h] * matrix2[h][j];
            }
        }
    }

    return resultMatrix;
}

function raiseMatrixToPower(matrix, n) {
    let m = matrix;

    for (let i = 1; i < n; i++) {
        m = productTwoMatrices(matrix, m);
    }

    return m;
}

const padCenter = function(str, maxLength, fillString) {
    const len = str.length;
    const spaces = maxLength - len;
    const padLeft = spaces / 2 + len;
    return str.padStart(padLeft, fillString).padEnd(maxLength, fillString);
}