<?php
class ArrayProblems {
    public function findDuplicates($arr) {
        $count = [];
        $result = [];
        for ($i = 0; $i < count($arr); $i++) {
            $val = $arr[$i];
            if(!array_key_exists($val, $count)){
                $count[$val] = 1;
            } else {
                $count[$val]++;
                if ($count[$val] == 2) array_push($result, $val);
            }
        }
        sort($result);
        return $result;
    }
}
$array_problems = new ArrayProblems();
$duplicates = $array_problems->findDuplicates([ 12,34,67,89,54,43,12,34,56,78,98,13,64 ]);
print_r($duplicates);