using System;
using System.Threading.Tasks;
using System.Collections.Generic;

class ArrayProblems {
    public async Task<int> CountTargetChar(string str, char targetChar ) {
        List<char> result = new List<char>();
        str = str.ToLower();
        if(str.Length == 0) {
            return 0;
        }
        for(int i = 0; i < str.Length; i++) {
            if(str[i] == char.ToLower(targetChar)) {
                result.Add(str[i]);
            }
        }
        return result.Count;
    }
}

public class Program {
    public static async Task Main(string[] args) {
        ArrayProblems arrayProblems = new ArrayProblems();
        int numberChar = await arrayProblems.CountTargetChar("Hello world, this is very basic for developers", 'S');
        Console.WriteLine(numberChar);
    }
}