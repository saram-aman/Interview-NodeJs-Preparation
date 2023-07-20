<?php
class ArrayProblems {
    public function findMedian($arr1, $arr2) {
        $merged = array_merge($arr1, $arr2);
        sort($merged);
        $mid = count($merged) / 2;
        return count($merged) % 2 === 0 ? ($merged[$mid - 1] + $merged[$mid]) / 2 : $merged[$mid];
    }
}
$array_problems = new ArrayProblems();
$median = $array_problems->findMedian([1,2,3,4,5], [4,5,6,7,8]);
print_r($median);