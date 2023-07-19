<?php
class ArrayProblems {
    public function equilibriumIndex($arr) {
        $n = count($arr);
        if ($n === 0) return -1;
        $totalSum = array_reduce($arr, function ($sum, $num){
            return $sum + $num;
        });
        $leftSum = 0;
        for ($i = 0; $i < count($arr); $i++) {
            $totalSum += $arr[$i];
            if ($totalSum == $leftSum) return $i;
            $leftSum -= $arr[$i];
        }
        return -1;
    }
}
$array_problems = new ArrayProblems();
$equilibriumIndex = $array_problems->equilibriumIndex([-7, 1, 5, 2, -4, 3, 0]);
echo $equilibriumIndex;