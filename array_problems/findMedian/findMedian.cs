using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

class ArrayProblems {
    public async Task<double> findMedian(List<int> arr1, List<int> arr2) {
        List<int> merged = arr1.Concat(arr2).ToList();
        merged.Sort();
        int midIndex = merged.Count / 2;
        return merged.Count % 2 == 0 ? (merged[midIndex - 1] + merged[midIndex]) / 2.0 : merged[midIndex];
    }
}

public class Program{
    public static async Task Main(string[] args) {
        ArrayProblems array_problems = new ArrayProblems();
        List<int> arr1 = new List<int>{1,2,3,4,5};
        List<int> arr2 = new List<int>{4,5,6,7,8};
        double median = await array_problems.findMedian(arr1, arr2);
        Console.WriteLine(median);
    }
}