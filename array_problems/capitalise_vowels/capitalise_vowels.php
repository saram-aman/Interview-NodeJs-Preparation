<?php
class ArrayProblems {
    public function capitalise_vowels($str) {
        $vowels = [ 'a', 'e', 'i', 'o', 'u' ];
        $res = "";
        for($i = 0; $i < strlen($str); $i++) {
            $currentChar = $str[$i];
            if(in_array($currentChar, $vowels)) {
                $uppercase = mb_strtoupper($currentChar);
                $res .= $uppercase;
            } else {
                $res .= $currentChar;
            }
        }
        return $res;
    }
}
$arrayProblems = new ArrayProblems();
$str = "We can also traverse the array elements using foreach loop. It returns array element one by one";
$capitalised_vowels = $arrayProblems->capitalise_vowels($str);
echo($capitalised_vowels);