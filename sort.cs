using System;
using System.Collections.Generic;
using System.Threading.Tasks;

class Sort
{
    public async Task<List<int>> Quick(List<int> items)
    {
        List<int> list = new List<int>(items);
        if (list.Count < 2) return list;
        int pivot = list[0];
        List<int> smaller = list.FindAll(item => item < pivot);
        List<int> bigger = list.FindAll(item => item > pivot);
        return new List<int>(await Quick(smaller)).Concat(new List<int> { pivot }).Concat(await Quick(bigger)).ToList();
    }

    public async Task<List<int>> Bubble(List<int> items)
    {
        for (int passover = 0; passover < items.Count; passover++)
        {
            for (int index = 0; index < items.Count - 1; index++)
            {
                if (items[index] > items[index + 1])
                {
                    int temporary = items[index];
                    items[index] = items[index + 1];
                    items[index + 1] = temporary;
                }
            }
        }
        return items;
    }

    public async Task<List<int>> Select(List<int> items)
    {
        for (int passes = 0; passes < items.Count; passes++)
        {
            int min = passes;
            for (int i = passes; i < items.Count; i++)
            {
                if (items[i] < items[min]) min = i;
            }
            if (min != passes)
            {
                int temporary = items[passes];
                items[passes] = items[min];
                items[min] = temporary;
            }
        }
        return items;
    }

    public async Task<List<int>> Insert(List<int> items)
    {
        for (int i = 1; i < items.Count; i++)
        {
            int index = i - 1;
            int temporary = items[i];
            while (index >= 0 && items[index] > temporary)
            {
                items[index + 1] = items[index];
                index--;
            }
            items[index + 1] = temporary;
        }
        return items;
    }

    public async Task<List<int>> Simple(List<int> items)
    {
        for (int i = 0; i < items.Count; i++)
        {
            for (int j = 0; j < items.Count; j++)
            {
                if (items[i] < items[j])
                {
                    int temp = items[i];
                    items[i] = items[j];
                    items[j] = temp;
                }
            }
        }
        return items;
    }

    public async Task<List<int>> MergeSort(List<int> items)
    {
        if (items.Count <= 1) return items;
        int middle = items.Count / 2;
        List<int> left = await MergeSort(items.GetRange(0, middle));
        List<int> right = await MergeSort(items.GetRange(middle, items.Count - middle));
        return Merge(left, right);
    }

    private List<int> Merge(List<int> left, List<int> right)
    {
        List<int> merged = new List<int>();
        int leftIndex = 0;
        int rightIndex = 0;
        while (leftIndex < left.Count && rightIndex < right.Count)
        {
            if (left[leftIndex] < right[rightIndex])
            {
                merged.Add(left[leftIndex]);
                leftIndex++;
            }
            else
            {
                merged.Add(right[rightIndex]);
                rightIndex++;
            }
        }
        while (leftIndex < left.Count)
        {
            merged.Add(left[leftIndex]);
            leftIndex++;
        }
        while (rightIndex < right.Count)
        {
            merged.Add(right[rightIndex]);
            rightIndex++;
        }
        return merged;
    }
}

class Program
{
    static async Task Main(string[] args)
    {
        List<int> arr = new List<int> { 0, 43, 3, 2, 3, 4 };
        Sort sort = new Sort();

        Task<List<int>> quickSortPromise = sort.Quick(arr);
        Task<List<int>> selectSortPromise = sort.Select(arr);
        Task<List<int>> insertSortPromise = sort.Insert(arr);
        Task<List<int>> bubbleSortPromise = sort.Bubble(arr);
        Task<List<int>> simpleSortPromise = sort.Simple(arr);
        Task<List<int>> mergeSortPromise = sort.MergeSort(arr);

        await Task.WhenAll(quickSortPromise, selectSortPromise, insertSortPromise, bubbleSortPromise, simpleSortPromise, mergeSortPromise);

        List<int> quickSort = await quickSortPromise;
        List<int> selectSort = await selectSortPromise;
        List<int> insertSort = await insertSortPromise;
        List<int> bubbleSort = await bubbleSortPromise;
        List<int> simpleSort = await simpleSortPromise;
        List<int> mergeSort = await mergeSortPromise;

        Console.WriteLine("quick sort: " + string.Join(", ", quickSort));
        Console.WriteLine("select sort: " + string.Join(", ", selectSort));
        Console.WriteLine("insert sort: " + string.Join(", ", insertSort));
        Console.WriteLine("bubble sort: " + string.Join(", ", bubbleSort));
        Console.WriteLine("simple sort: " + string.Join(", ", simpleSort));
        Console.WriteLine("merge sort: " + string.Join(", ", mergeSort));
    }
}
