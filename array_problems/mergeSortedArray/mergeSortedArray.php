<?php
class ArrayProblem {
    private $nums1;
    private $nums2;
    private $m;
    private $n;

    public function __construct($nums1, $m, $nums2, $n) {
        $this->nums1 = $nums1;
        $this->m = $m;
        $this->nums2 = $nums2;
        $this->n = $n;
    }

    public function mergeSortedArray() {
        $i = $this->m - 1;
        $j = $this->n - 1;
        $k = $this->m + $this->n - 1;

        while ($i >= 0 && $j >= 0) {
            if ($this->nums1[$i] > $this->nums2[$j]) {
                $this->nums1[$k--] = $this->nums1[$i--];
            } else {
                $this->nums1[$k--] = $this->nums2[$j--];
            }
        }

        while ($j >= 0) {
            $this->nums1[$k--] = $this->nums2[$j--];
        }
        return $this->nums1;
    }
}
$nums1 = [1, 2, 3, 0, 0, 0];
$m = 3;
$nums2 = [2, 5, 6];
$n = 3;

$arrayProblem = new ArrayProblem($nums1, $m, $nums2, $n);

print_r($arrayProblem->mergeSortedArray());