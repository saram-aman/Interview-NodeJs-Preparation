using System;
using System.Collections.Generic;
using System.Linq;

public class ArrayProblems
{
    private int[] arr;

    public ArrayProblems(int[] arr)
    {
        this.arr = (int[])arr.Clone(); 
    }

    public int[] Quick(int[] items = null)
    {
        int[] list = items == null ? (int[])arr.Clone() : (int[])items.Clone();
        if (list.Length < 2) return list;
        int pivot = list[0];
        List<int> smaller = list.Skip(1).Where(item => item < pivot).ToList();
        List<int> bigger = list.Skip(1).Where(item => item > pivot).ToList();
        List<int> equal = list.Where(item => item == pivot).ToList();
        return Quick(smaller.ToArray()).Concat(equal.ToArray()).Concat(Quick(bigger.ToArray())).ToArray();
    }

    public int[] Bubble(int[] items = null)
    {
        int[] list = items == null ? (int[])arr.Clone() : (int[])items.Clone();
        int length = list.Length;
        for (int passover = 0; passover < length; passover++)
        {
            for (int index = 0; index < length - 1; index++)
            {
                if (list[index] > list[index + 1])
                {
                    int temporary = list[index];
                    list[index] = list[index + 1];
                    list[index + 1] = temporary;
                }
            }
        }
        return list;
    }

    public int[] Select(int[] items = null)
    {
        int[] list = items == null ? (int[])arr.Clone() : (int[])items.Clone();
        int length = list.Length;
        for (int passes = 0; passes < length; passes++)
        {
            int min = passes;
            for (int i = passes; i < length; i++)
            {
                if (list[i] < list[min]) min = i;
            }
            if (min != passes)
            {
                int temporary = list[passes];
                list[passes] = list[min];
                list[min] = temporary;
            }
        }
        return list;
    }

    public int[] Insert(int[] items = null)
    {
        int[] list = items == null ? (int[])arr.Clone() : (int[])items.Clone();
        int length = list.Length;
        for (int i = 1; i < length; i++)
        {
            int index = i - 1;
            int temporary = list[i];
            while (index >= 0 && list[index] > temporary)
            {
                list[index + 1] = list[index];
                index--;
            }
            list[index + 1] = temporary;
        }
        return list;
    }

    public int[] Simple(int[] items = null)
    {
        int[] list = items == null ? (int[])arr.Clone() : (int[])items.Clone();
        int length = list.Length;
        for (int i = 0; i < length; i++)
        {
            for (int j = 0; j < length; j++)
            {
                if (list[i] < list[j])
                {
                    int temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
        }
        return list;
    }

    public int[] MergeSort(int[] items = null)
    {
        int[] list = items == null ? (int[])arr.Clone() : (int[])items.Clone();
        if (list.Length <= 1) return list;
        int middle = list.Length / 2;
        int[] left = MergeSort(list.Take(middle).ToArray());
        int[] right = MergeSort(list.Skip(middle).ToArray());
        return Merge(left, right);
    }

    private int[] Merge(int[] left, int[] right)
    {
        List<int> merged = new List<int>();
        int leftIndex = 0;
        int rightIndex = 0;
        while (leftIndex < left.Length && rightIndex < right.Length)
        {
            if (left[leftIndex] <= right[rightIndex])
            {
                merged.Add(left[leftIndex++]);
            }
            else
            {
                merged.Add(right[rightIndex++]);
            }
        }
        while (leftIndex < left.Length) merged.Add(left[leftIndex++]);
        while (rightIndex < right.Length) merged.Add(right[rightIndex++]);
        return merged.ToArray();
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        int[] arr = { 0, 43, 3, 2, 3, 4, 6 };
        ArrayProblems sort = new ArrayProblems(arr);

        int[] quickSort = sort.Quick();
        int[] selectSort = sort.Select();
        int[] insertSort = sort.Insert();
        int[] bubbleSort = sort.Bubble();
        int[] simpleSort = sort.Simple();
        int[] mergeSort = sort.MergeSort();

        Console.WriteLine("quick sort: " + string.Join(", ", quickSort));
        Console.WriteLine("select sort: " + string.Join(", ", selectSort));
        Console.WriteLine("insert sort: " + string.Join(", ", insertSort));
        Console.WriteLine("bubble sort: " + string.Join(", ", bubbleSort));
        Console.WriteLine("simple sort: " + string.Join(", ", simpleSort));
        Console.WriteLine("merge sort: " + string.Join(", ", mergeSort));
    }
}
