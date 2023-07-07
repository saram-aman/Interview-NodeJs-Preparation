using System;
using System.Threading.Tasks;
using System.Collections.Generic;
class ArrayProblems {
    public async Task<string> capitalise_vowels(string str) {
        List<char> vowels = new List<char> { 'a', 'e', 'i', 'o', 'u' };
        string res = "";
        for (int i = 0; i < str.Length; i++) {
            char currentChar = str[i];
            if(vowels.Contains(char.ToLower(currentChar))) {
                char uppercase = char.ToUpper(currentChar);
                res += uppercase;
            } else {
                char lowercase = char.ToLower(currentChar);
                res += lowercase;
            }
        }
        return res;
    }
}

public class Program {
    public static async Task Main(string[] args) {
        Console.WriteLine("Enter a string:");
        string str = Console.ReadLine();
        ArrayProblems arrayProblems = new ArrayProblems();
        string capitalised_vowels = await arrayProblems.capitalise_vowels(str);
        Console.WriteLine(capitalised_vowels);
    }
}