class CreateSpiralMatrix {
    private matrix: number[][];
    constructor() {
        this.matrix = [];
    }
    public async createSpiralMatrix(n: number): Promise<number[][]> {
        this.matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
        let rowStart = 0, rowEnd = n - 1;
        let colStart = 0, colEnd = n - 1;
        let num = 1;
        while (rowStart <= rowEnd && colStart <= colEnd) {
            for (let i = colStart; i <= colEnd; i++) {
                this.matrix[rowStart][i] = num++;
            }
            rowStart++;
            for (let i = rowStart; i <= rowEnd; i++) {
                this.matrix[i][colEnd] = num++;
            }
            colEnd--;
            for (let i = colEnd; i >= colStart; i--) {
                this.matrix[rowEnd][i] = num++;
            }
            rowEnd--;
            for (let i = rowEnd; i >= rowStart; i--) {
                this.matrix[i][colStart] = num++;
            }
            colStart++;
        }
        return this.matrix;
    }
}
(async () => {
    const spiralMatrixCreator = new CreateSpiralMatrix();
    const n = 4;
    console.log(await spiralMatrixCreator.createSpiralMatrix(n));
})()