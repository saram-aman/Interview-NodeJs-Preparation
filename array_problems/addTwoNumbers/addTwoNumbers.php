<?php
class ArrayProblems {
    
    public function addTwoNumbers($arr1, $arr2) {
        $array = explode(",", (strrev(intval(implode($arr1)) + intval(implode($arr2)))));
        return $array;
    }
}
$arrayProblems = new ArrayProblems();
$arr1 = [ 9,9,9,9,9,9,9 ];
$arr2 = [ 9,9,9,9 ];
$addedNumbers = $arrayProblems->addTwoNumbers($arr1, $arr2);
print_r($addedNumbers);