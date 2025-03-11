<?php
class ArrayProblems {
    private $arr;
    public function __construct($arr) {
        $this->arr = $arr;
    }

    public function quick($items = null) {
        $list = $items ?? $this->arr;
        if (count($list) < 2) return $list;
        $pivot = $list[0];
        $smaller = array_filter(array_slice($list, 1), function($item) use ($pivot) {
            return $item < $pivot;
        });
        $bigger = array_filter(array_slice($list, 1), function($item) use ($pivot) {
            return $item > $pivot;
        });
        $equal = array_filter($list, function($item) use ($pivot) {
            return $item == $pivot;
        });
        return array_merge($this->quick(array_values($smaller)), array_values($equal), $this->quick(array_values($bigger))); //Corrected: array_values to reindex.
    }

    public function bubble($items = null) {
        $items = $items ?? $this->arr;
        $length = count($items);
        for ($passover = 0; $passover < $length; $passover++) {
            for ($index = 0; $index < $length - 1; $index++) {
                if ($items[$index] > $items[$index + 1]) {
                    $temporary = $items[$index];
                    $items[$index] = $items[$index + 1];
                    $items[$index + 1] = $temporary;
                }
            }
        }
        return $items;
    }

    public function select($items = null) {
        $items = $items ?? $this->arr;
        $length = count($items);
        for ($passes = 0; $passes < $length; $passes++) {
            $min = $passes;
            for ($i = $passes; $i < $length; $i++) {
                if ($items[$i] < $items[$min]) $min = $i;
            }
            if ($min !== $passes) {
                $temporary = $items[$passes];
                $items[$passes] = $items[$min];
                $items[$min] = $temporary;
            }
        }
        return $items;
    }

    public function insert($items = null) {
        $items = $items ?? $this->arr;
        $length = count($items);
        for ($i = 1; $i < $length; $i++) {
            $index = $i - 1;
            $temporary = $items[$i];
            while ($index >= 0 && $items[$index] > $temporary) {
                $items[$index + 1] = $items[$index];
                $index--;
            }
            $items[$index + 1] = $temporary;
        }
        return $items;
    }

    public function simple($items = null) {
        $items = $items ?? $this->arr;
        $length = count($items);
        for ($i = 0; $i < $length; $i++) {
            for ($j = 0; $j < $length; $j++) {
                if ($items[$i] < $items[$j]) {
                    $temp = $items[$i];
                    $items[$i] = $items[$j];
                    $items[$j] = $temp;
                }
            }
        }
        return $items;
    }

    public function mergeSort($items = null) {
        $items = $items ?? $this->arr;
        if (count($items) <= 1) return $items;
        $middle = floor(count($items) / 2);
        $left = $this->mergeSort(array_slice($items, 0, $middle));
        $right = $this->mergeSort(array_slice($items, $middle));
        return $this->merge($left, $right);
    }

    private function merge($left, $right) {
        $merged = [];
        while (count($left) > 0 && count($right) > 0) {
          ($left[0] <= $right[0]) ? $merged[] = array_shift($left) : $merged[] = array_shift($right);
        }
        return array_merge($merged, $left, $right);
    }
}

$arr = [0, 43, 3, 2, 3, 4, 6];
$sort = new ArrayProblems($arr);

$quickSort = $sort->quick(); 
$selectSort = $sort->select(); 
$insertSort = $sort->insert(); 
$bubbleSort = $sort->bubble(); 
$simpleSort = $sort->simple(); 
$mergeSort = $sort->mergeSort(); 

echo "quick sort: " . implode(", ", $quickSort) . "\n";
echo "select sort: " . implode(", ", $selectSort) . "\n";
echo "insert sort: " . implode(", ", $insertSort) . "\n";
echo "bubble sort: " . implode(", ", $bubbleSort) . "\n";
echo "simple sort: " . implode(", ", $simpleSort) . "\n";
echo "merge sort: " . implode(", ", $mergeSort) . "\n";
?>