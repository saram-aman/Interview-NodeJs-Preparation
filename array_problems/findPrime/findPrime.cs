using System;
using System.Collections.Generic;
using System.Threading.Tasks;

class ArrayProblems
{
    public bool IsPrime(int number)
    {
        if (number < 0) return false;
        for (int i = 2; i <= Math.Sqrt(number); i++)
        {
            if (number % i == 0) return false;
        }
        return true;
    }

    public async Task<List<int>> FindPrime(List<int> array)
    {
        List<int> result = new List<int>();
        foreach (int num in array)
        {
            if (IsPrime(num))
            {
                result.Add(num);
            }
        }
        return result;
    }
}

public class Program
{
    public static async Task Main(string[] args)
    {
        List<int> arr = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 };
        ArrayProblems arr_problems = new ArrayProblems();
        List<int> findPrime = await arr_problems.FindPrime(arr);
        Console.WriteLine(string.Join(", ", findPrime));
    }
}
