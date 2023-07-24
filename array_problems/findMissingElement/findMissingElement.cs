using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

class ArrayProgram {
    public async Task<List<int>> findMissingElement(List<int> arr) {
        List<int> missing = new List<int>();
        for (int i = arr.Min(); i <= arr.Max(); i++) {
            missing.Add(i);
        }
        return missing.Where(mis => !arr.Contains(mis)).ToList();
    }
}

public class Program {
    public static async Task Main(string[] args) {
        ArrayProgram array_problems = new ArrayProgram();
        List<int> arr = new List<int>{1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50};
        List<int> missingElements = await array_problems.findMissingElement(arr);
        Console.WriteLine(string.Join(", ", missingElements));
    }
}
