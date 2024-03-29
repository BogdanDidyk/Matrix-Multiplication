function printArray(arr, separator = ", ") {
    console.log(arr.join(separator));
}

function printMatrix(matrix, itemSeparator = " ") {
    matrix.forEach(row => printArray(row, itemSeparator));
}

function getArrayOfLength(length) {
    return Array.from({length});
}

function getRandomInteger(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntegerArray(length, min, max) {
    return getArrayOfLength(length).map(() => getRandomInteger(min, max));
}

function getRandomIntegerMatrix(rows, cols, min, max) {
    return getArrayOfLength(rows).map(() => getRandomIntegerArray(cols, min, max));
}

function productTwoMatrices(matrix1, matrix2) {
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;

    if (cols1 != rows2) {
        throw new Error("Number of columns in the first matrix isn't equal to the number of rows in the second matrix!");
    }

    const resultMatrix = [];
    for (let i = 0; i < rows1; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < cols2; j++) {
            resultMatrix[i][j] = 0;
            for (let h = 0; h < rows2; h++) {
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

const m1 = getRandomIntegerMatrix(2, 1, 1, 9);
const m2 = getRandomIntegerMatrix(1, 2, 1, 9);
const m3 = productTwoMatrices(m1, m2);
const m4 = getRandomIntegerMatrix(2, 2, 1, 9);
const m5 = raiseMatrixToPower(m4, 2);

console.log(padCenter("Multiply", 50, "-"));
printMatrix(m1);
console.log("");
printMatrix(m2);
console.log("");
printMatrix(m3);

console.log(padCenter("Raise To Power", 50, "-"));
printMatrix(m4);
console.log("");
printMatrix(m5);