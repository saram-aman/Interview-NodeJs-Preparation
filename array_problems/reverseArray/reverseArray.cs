using System;

public class ArrayProblem
{
    private int[] arr;

    public ArrayProblem(int[] arr)
    {
        this.arr = arr;
    }

    public void SetArr(int[] arr)
    {
        this.arr = arr;
    }

    public int[] ReverseArrA()
    {
        int[] responseArr = new int[arr.Length];
        for (int i = arr.Length - 1, j = 0; i >= 0; i--, j++)
        {
            responseArr[j] = arr[i];
        }
        return responseArr;
    }

    public int[] ReverseArrB()
    {
        int start = 0;
        int end = arr.Length - 1;
        while (start < end)
        {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        return arr;
    }

    public static void Main(string[] args)
    {
        ArrayProblem arrProblems = new ArrayProblem(new int[0]);
        arrProblems.SetArr(new int[] { 0, 43, 3, 2, 3, 4 });
        Console.WriteLine("Solution A: " + string.Join(", ", arrProblems.ReverseArrA()));
        Console.WriteLine("Solution B: " + string.Join(", ", arrProblems.ReverseArrB()));
    }
}