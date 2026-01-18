<?php
class ArrayProblems {
    private $nums;

    public function __construct($nums) {
        $this->nums = $nums;
    }

    public function threeSum(): array {
        $result = [];
        sort($this->nums);
        $n = count($this->nums);

        for ($i = 0; $i < $n - 2; $i++) {
            if ($i > 0 && $this->nums[$i] == $this->nums[$i - 1]) {
                continue;
            }
            $left = $i + 1;
            $right = $n - 1;

            while ($left < $right) {
                $sum = $this->nums[$i] + $this->nums[$left] + $this->nums[$right];
                if ($sum == 0) {
                    $result[] = [$this->nums[$i], $this->nums[$left], $this->nums[$right]];
                    while ($left < $right && $this->nums[$left] == $this->nums[$left + 1]) {
                        $left++;
                    }
                    while ($left < $right && $this->nums[$right] == $this->nums[$right - 1]) {
                        $right--;
                    }
                    $left++;
                    $right--;
                } elseif ($sum < 0) {
                    $left++;
                } else {
                    $right--;
                }
            }
        }

        return $result;
    }
}
$array_problems = new ArrayProblems([-1, 0, 1, 2, -1, -4]);
$result = $array_problems->threeSum();
print_r($result);