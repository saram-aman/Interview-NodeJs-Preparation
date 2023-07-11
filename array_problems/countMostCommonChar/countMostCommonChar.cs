using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

class ArrayProblems {
    public async Task<char> CountMostCommonChar(string str) {
        str = Regex.Replace(str, "[^a-zA-Z]", "").ToLower();
        Dictionary<char, int> Obj = new Dictionary<char, int>();
        foreach (char ch in str) {
            if (Obj.ContainsKey(ch)) {
                Obj[ch]++;
            } else {
                Obj[ch] = 1;
            }
        }
        char maxKey = Obj.FirstOrDefault(x => x.Value == Obj.Values.Max()).Key;
        return maxKey;
    }
}
public class Program {
    public static async Task Main(string[] args) {
        ArrayProblems arrayProblems = new ArrayProblems();
        char mostCommonChar = await arrayProblems.CountMostCommonChar("Hello world, this is very basic for developers");
        Console.WriteLine(mostCommonChar);
    }
}