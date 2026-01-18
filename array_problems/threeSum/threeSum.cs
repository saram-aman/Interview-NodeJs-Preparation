using System;
using System.Collections.Generic;
using System.Linq;

class ArrayProblems
{
    private int[] arr;

    public ArrayProblems(int[] arr)
    {
        this.arr = arr;
    }

    public List<List<int>> ThreeSum()
    {
        var result = new List<List<int>>();
        var sortedArr = arr.OrderBy(x => x).ToArray();
        var n = sortedArr.Length;

        for (int i = 0; i < n - 2; i++)
        {
            if (i > 0 && sortedArr[i] == sortedArr[i - 1])
                continue;

            int left = i + 1;
            int right = n - 1;

            while (left < right)
            {
                int sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
                if (sum == 0)
                {
                    result.Add(new List<int> { sortedArr[i], sortedArr[left], sortedArr[right] });
                    while (left < right && sortedArr[left] == sortedArr[left + 1])
                        left++;
                    while (left < right && sortedArr[right] == sortedArr[right - 1])
                        right--;
                    left++;
                    right--;
                }
                else if (sum < 0)
                {
                    left++;
                }
                else
                {
                    right--;
                }
            }
        }

        return result;
    }
}

public class Program
{
    public static void Main()
    {
        var arrayProblems = new ArrayProblems(new int[] { -1, 0, 1, 2, -1, -4 });
        var result = arrayProblems.ThreeSum();
        foreach (var triplet in result)
        {
            Console.WriteLine($"[{string.Join(", ", triplet)}]");
        }
    }
}