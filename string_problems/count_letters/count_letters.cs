using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a string:");
        string input = Console.ReadLine();
        Dictionary<char, int> letterCounts = CountLetters(input);
        foreach (var item in letterCounts)
        {
            Console.WriteLine($"{item.Key}: {item.Value}");
        }
    }
    static Dictionary<char, int> CountLetters(string input)
    {
        Dictionary<char, int> letterCounts = new Dictionary<char, int>();
        foreach (char c in input)
        {
            if (char.IsLetter(c))
            {
                char lowerCaseChar = char.ToLower(c);
                if (letterCounts.ContainsKey(lowerCaseChar))
                {
                    letterCounts[lowerCaseChar]++;
                }
                else
                {
                    letterCounts[lowerCaseChar] = 1;
                }
            }
        }
        return letterCounts;
    }
}
