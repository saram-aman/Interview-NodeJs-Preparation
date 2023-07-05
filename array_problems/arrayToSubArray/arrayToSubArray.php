<?php
class ArrayProblems {
    public function arrayToSubArray($arr, $size)
    {
        $size = Ceil(count($arr) / $size);
        $result = [];
        for($i = 0; $i < count($arr); $i += $size) {
            array_push($result, array_slice($arr, $i, $i + $size));
        }
        return $result;
    }
}
$array_problems = new ArrayProblems();
$subArrays = $array_problems->arrayToSubArray([ 5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4 ], 5);
print_r($subArrays);