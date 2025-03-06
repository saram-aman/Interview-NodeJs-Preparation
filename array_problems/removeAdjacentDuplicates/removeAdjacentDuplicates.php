<?php
class ArrayPromblems {
    public function removeAdjacentDuplicates($arr) {
        $n = count($arr);
        $j = 0;
        for ($i = 0; $i < $n; $i++) {
            if ($i < $n - 1 && $arr[$i] == $arr[$i + 1]) {
                continue;
            }
            $arr[$j++] = $arr[$i];
        }
        while ($j < $n) {
            $arr[$j++] = 0;
        }
        return $arr;
    }
}
$arr_problems = new ArrayPromblems();
print_r($arr_problems->removeAdjacentDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 7, 8, 8]));