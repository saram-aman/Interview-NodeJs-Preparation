using System;
using System.Threading.Tasks;
using System.Collections.Generic;

class ArrayProblems {
    public async Task<List<int>> findDuplicates(List<int> arr) {
        Dictionary<int, int> count = new Dictionary<int, int>();
        List<int> result = new List<int>();
        for (int i = 0; i < arr.Count; i++) {
            int num = arr[i];
            if (!count.ContainsKey(num)) {
                count[num] = 1;
            } else {
                count[num]++;
                if (count[num] == 2) {
                    result.Add(num);
                }
            }
        }
        result.Sort();
        return result;
    }
}
public class Program {
    public static async Task Main(string[] args) {
        ArrayProblems array_problems = new ArrayProblems();
        List<int> duplicates = await array_problems.findDuplicates(new List<int> { 12,34,67,89,54,43,12,34,56,78,98,13,64 });
        Console.WriteLine(string.Join(", ", duplicates));
    }
}