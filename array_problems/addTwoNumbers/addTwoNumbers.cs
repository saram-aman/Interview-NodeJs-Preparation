using System;
using System.Threading.Tasks;
using System.Collections.Generic;

class ArrayProblems
{
    public async Task<List<int>> addTwoNumbers(List<int> arr1, List<int> arr2)
    {
        int sum = int.Parse(string.Join("", arr1)) + int.Parse(string.Join("", arr2));
        List<int> result = new List<int>();
        while (sum > 0) {
            int digit = sum % 10;
            result.Insert(0, digit);
            sum /= 10;
        }
        return result;
    }
}

public class Program {
    public static async Task Main(string[] args) {
        List<int> arr1 = new List<int>{ 9,9,9,9,9,9,9 };
        List<int> arr2 = new List<int>{ 9,9,9,9 };
        ArrayProblems array_problems = new ArrayProblems();
        List<int> addedNumbers = await array_problems.addTwoNumbers(arr1, arr2);
        Console.WriteLine(string.Join(", ", addedNumbers));
    }
}