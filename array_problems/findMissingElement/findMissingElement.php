<?php
class ArrayProblems {
    public function findMissingElement($arr) {
        $missings = array();
        for ($i = min($arr); $i <= max($arr); $i++) {
            array_push($missings, $i);
        }
        $filtered_missings = array_filter($missings, function($i) use ($arr) {
            return !in_array($i, $arr);
        });
        $filtered_str = implode(',', $filtered_missings);
        $filtered_result = array_map('intval', explode(',', $filtered_str));
        return $filtered_str;
    }
}
$array_problems = new ArrayProblems();
$missingElement = $array_problems->findMissingElement([1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50]);
echo($missingElement);