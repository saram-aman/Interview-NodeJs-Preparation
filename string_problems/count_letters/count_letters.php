<?php

class StringProblems
{
    public function count_letters($str) 
    {
        $countAlphabets = [];
        foreach (str_split($str) as $char) 
        {
            if(preg_match('/[a-z]/', $char)) {
                if (isset($countAlphabets[$char])) {
                    $countAlphabets[$char]++;
                } else {
                    $countAlphabets[$char] = 1;
                }
            }
        }
        return $countAlphabets;
    }
}
$string_problems = new StringProblems();
$response = $string_problems->count_letters("command is used for compiling, building, and managing Go programs, not directly executing individual files.");
print_r($response);
