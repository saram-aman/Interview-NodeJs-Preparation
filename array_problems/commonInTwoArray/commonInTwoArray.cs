using System;
using System.Threading.Tasks;
using System.Collections.Generic;

class ArrayProblems {
    public async Task<List<int>> commonInTwoArray(List<int> arr1, List<int> arr2) {
        List<int> commons = new List<int>();
        for(int i = 0; i < arr1.Count; i++) {
            if(arr2.Contains(arr1[i])) {
                commons.Add(arr1[i]);
            }
        }
        return commons;
    }
}
public class Program {
    public static async Task Main(string[] args) {
        ArrayProblems array_problems = new ArrayProblems();
        List<int> arr1 = new List<int> {1, 12, 3, 14, 5, 6, 7, 8, 9, 10};
        List<int> arr2 = new List<int> {1, 2, 5, 8, 10, 11, 13, 15};
        List<int> commons = await array_problems.commonInTwoArray(arr1, arr2);
        Console.WriteLine(string.Join(" ", commons));
    }
}