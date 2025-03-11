<?php
class ArrayProblems {
    public function arrFunc($arr) {
        for($i = 0; $i < count($arr); $i++) {
            for($j = 0; $j < count($arr); $j++) {
                if($arr[$i] < $arr[$j]) {
                    $temp = $arr[$i];
                    $arr[$i] = $arr[$j];
                    $arr[$j] = $temp;
                }
            }
        }
        $min = $arr[1];
        $max = $arr[count($arr) - 2];
        $result = array(
            "secondMin" => $min,
            "secondMax" => $max
        );
        return $result;
    }
}
$arr_problems = new ArrayProblems();
print_r($arr_problems->arrFunc([5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4]));