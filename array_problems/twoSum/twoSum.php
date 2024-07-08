<?php
class TwoSum {
    public function twoSum($nums, $target) {
        $result = [];
        for ($i = 0; count($nums); $i++) {
            for ($j = 0; count($nums); $j++) {
                if ($i != $j) {
                    if(($nums[$i] + $nums[$j]) === $target) {
                        $result = [$i, $j];
                        return $result;
                    }
                }
            }
        }
        return $result;
    }
}

$twoSum = new TwoSum();
print_r($twoSum->twoSum([2,7,11,15], 9));