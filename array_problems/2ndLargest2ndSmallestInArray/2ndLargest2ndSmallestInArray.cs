using System;
using System.Threading.Tasks;
using System.Collections.Generic;

class ArrayProblems
{
    public async Task<Dictionary<string, int>> Func(List<int> array)
    {
        for(int i = 0; i < array.Count; i++)
        {
            for(int j = 0; j < array.Count; j++)
            {
                if(array[i] < array[j])
                {
                    int temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        int max = array[array.Count - 1];
        int min = array[1];

        Dictionary<string, int> result = new Dictionary<string, int>
        {
            { "2min", min },
            { "2max", max }
        };

        return result;
    }
}

public class Program
{
    public static async Task Main(string[] args)
    {
        List<int> arr = new List<int> { 5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4 };
        ArrayProblems array_problems = new ArrayProblems();
        Dictionary<string, int> result = await array_problems.Func(arr);

        Console.WriteLine("2min: " + result["2min"]);
        Console.WriteLine("2max: " + result["2max"]);
    }
}
