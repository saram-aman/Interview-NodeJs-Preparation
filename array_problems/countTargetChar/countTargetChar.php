<?php
class ArrayProblems {
     public function CountTargetChar($str, $targetChar) {
         $result = [];
         $str = strtolower($str);
         if(!strlen($str)) return false;
         for($i = 0; $i < strlen($str); $i++) {
             $char = $str[$i];
             if($char == $targetChar || ord(strtolower($char)) == ord(strtolower($targetChar))) {
                 $result[] = ord($char);
             }
         }
         return count($result);
     }
}
$arrayProblems = new ArrayProblems();
$numberChar = $arrayProblems->CountTargetChar("Hello world, this is very basic for developers", 'S');
echo $numberChar;