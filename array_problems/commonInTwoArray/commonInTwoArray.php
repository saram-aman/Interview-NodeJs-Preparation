<?php
class ArrayProblems {
    public function commonInTwoArray($arr1, $arr2) {
        $commons = [];
        for($i = 0; $i < count($arr1); $i++) {
            if(in_array($arr1[$i], $arr2)) {
                array_push($commons, $arr1[$i]);
            }
        }
        return $commons;
    }
}
$arrayProblems = new ArrayProblems();
$arr1 = [1, 12, 3, 14, 5, 6, 7, 8, 9, 10];
$arr2 = [1, 2, 5, 8, 10, 11, 13, 15];
$found_commons = $arrayProblems->commonInTwoArray($arr1, $arr2);
print_r($found_commons);