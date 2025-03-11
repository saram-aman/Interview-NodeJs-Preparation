<?php
class ArrayProblems {
    private $arr;
    public function __construct($arr) {
        $this->arr = $arr;
    }

    public function ReverseArrA($items = null) {
        $items = $items ?? $this->arr;
        $length = count($items);
        $reversed = [];
        for ($i = $length - 1; $i >= 0; $i--) {
            $reversed[] = $items[$i];
        }
        return $reversed;
    }

    public function ReverseArrB($items = null) {
        $items = $items ?? $this->arr;
        $length = count($items);
        for ($i = 0; $i < $length / 2; $i++) {
            $temporary = $items[$i];
            $items[$i] = $items[$length - 1 - $i];
            $items[$length - 1 - $i] = $temporary;
        }
        return $items;
    }
}
$arrayProblems = new ArrayProblems([1, 2, 3, 4, 5]);
echo implode(', ', $arrayProblems->ReverseArrA()) . PHP_EOL;
echo implode(', ', $arrayProblems->ReverseArrB()) . PHP_EOL;
