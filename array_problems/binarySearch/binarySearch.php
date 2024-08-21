<?php

class ArrayProblems
{
    public function binarySearch($arr, $target) 
    {
        $left = 0;
        $right = count($arr) - 1;
        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);
            if($arr[$mid] == $target) {
                return $mid;
            } else if($arr[$mid] <= $target) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
        return -1;
    }
}
$array_problems = new ArrayProblems();
$response = $array_problems->binarySearch([1, 3, 5, 7, 9], 5);
echo $response;
