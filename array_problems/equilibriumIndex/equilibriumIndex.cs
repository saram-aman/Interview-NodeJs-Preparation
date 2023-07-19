using System;
using System.Collections.Generic;

class ArrayProblems {
    public int equilibriumIndex(List<int> arr) {
        int n = arr.Count;
        if(n == 0) return -1;
        int totalSum = 0;
        for (int i = 0; i < arr.Count; i++) totalSum += arr[i];
        int leftSum = 0;
        for (int i = 0; i < n; i++) {
            totalSum -= arr[i];
            if (leftSum == totalSum) return i;
            leftSum += arr[i];
        }
        return -1;
    }
}

public class Program {
    public static void Main(string[] args) {
        ArrayProblems array_problems = new ArrayProblems();
        int equilibriumIndex = array_problems.equilibriumIndex(new List<int> { -7, 1, 5, 2, -4, 3, 0 });
        Console.WriteLine(equilibriumIndex);
    }
}