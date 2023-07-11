using System;
using System.Threading.Tasks;
using System.Collections.Generic;

class ArrayProblems {
    public async Task<List<int>> createSpiralMatrix(int n) {

    }
}

public class Program {
    public static async Task Main(string[] args) {
        ArrayProblems arrayProblems = new ArrayProblems();
        List<int> spiralMatrix = await arrayProblems.createSpiralMatrix(5);
        Console.WriteLine(spiralMatrix);
    }
}