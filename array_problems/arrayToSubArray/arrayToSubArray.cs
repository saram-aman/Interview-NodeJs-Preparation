using System;
using System.Threading.Tasks;
using System.Collections.Generic;

class ArrayProblems
{
    public async Task<List<int[]>> arrayToSubArray(List<int> arr, int size)
    {
        int arrLength = arr.Count;
        size = (int)Math.Ceiling((double)arrLength / size);
        List<int[]> result = new List<int[]>();
        for(int i = 0; i < arrLength; i += size)
        {
            int[] slice = arr.GetRange(i, Math.Min(size, arrLength - i)).ToArray();
            result.Add(slice);
        }
        return result;
    }
}
public class Program
{
    public static async Task Main(string[] args)
    {
        List<int> arr = new List<int>{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 };
        ArrayProblems array_problems = new ArrayProblems();
        List<int[]> subArrays = await array_problems.arrayToSubArray(arr, 5);
        foreach(int[] subArray in subArrays) {
            Console.WriteLine(string.Join(", ", subArray));
        }
    }
}
