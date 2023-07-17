using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

class ArrayProblems
{
    public async Task<List<List<int>>> createSpiralMatrix(int n)
    {
        int numRows = n;
        List<int> arr = new List<int>();
        int arrSize = numRows * numRows;
        for(int i = 0; i < arrSize; i++)
        {
            arr.Add(i);
        }
        int numCols = (int)Math.Ceiling((double)arr.Count / numRows);
        List<List<int>> matrix = new List<List<int>>();
        for(int i = 0; i < numRows; i++)
        {
            matrix.Add(Enumerable.Repeat(0, numCols).ToList());
        }
        int topRow = 0;
        int leftCol = 0;
        int bottomRow = numRows - 1;
        int rightCol = numCols - 1;
        int index = 0;
        while (topRow <= bottomRow && leftCol <= rightCol)
        {
            for (int col = leftCol; col <= rightCol; col++)
            {
                matrix[topRow][col] = arr[index++];
            }
            topRow++;
            for (int row = topRow; row <= bottomRow; row++)
            {
                matrix[row][rightCol] = arr[index++];
            }
            rightCol--;
            if (topRow <= bottomRow)
            {
                for (int col = rightCol; col >= leftCol; col--)
                {
                    matrix[bottomRow][col] = arr[index++];
                }
                bottomRow--;
            }
            if (leftCol <= rightCol)
            {
                for (int row = bottomRow; row >= topRow; row--)
                {
                    matrix[row][leftCol] = arr[index++];
                }
                leftCol++;
            }
        }
        return matrix;
    }
}

public class Program {
    public static async Task Main(string[] args) {
        ArrayProblems arrayProblems = new ArrayProblems();
        List<List<int>> spiralMatrix = await arrayProblems.createSpiralMatrix(5);
        foreach(List<int> row in spiralMatrix)
        {
            foreach(int num in row)
            {
                Console.Write(num + " ");
            }
            Console.WriteLine();
        }
    }
}