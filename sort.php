<?php
class Sort {
    public function quick($items) {
        $list = [...$items];
        if (count($list) < 2) return $list;
        $pivot = $list[0];
        $smaller = array_filter($list, function($item) use ($pivot) {
            return $item < $pivot;
        });
        $bigger = array_filter($list, function($item) use ($pivot) {
            return $item > $pivot;
        });
        return array_merge($this->quick($smaller), [$pivot], $this->quick($bigger));
    }

    public function bubble($items = []) {
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

    public function select($items = []) {
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

    public function insert($items = []) {
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

    public function simple($items = []) {
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

    public function mergeSort($items = []) {
        if (count($items) <= 1) return $items;
        $middle = floor(count($items) / 2);
        $left = $this->mergeSort(array_slice($items, 0, $middle));
        $right = $this->mergeSort(array_slice($items, $middle));
        return $this->merge($left, $right);
    }

    private function merge($left, $right) {
        $merged = [];
        $leftIndex = 0;
        $rightIndex = 0;
        while ($leftIndex < count($left) && $rightIndex < count($right)) {
            if ($left[$leftIndex] < $right[$rightIndex]) {
                $merged[] = $left[$leftIndex];
                $leftIndex++;
            } else {
                $merged[] = $right[$rightIndex];
                $rightIndex++;
            }
        }
        while ($leftIndex < count($left)) {
            $merged[] = $left[$leftIndex];
            $leftIndex++;
        }
        while ($rightIndex < count($right)) {
            $merged[] = $right[$rightIndex];
            $rightIndex++;
        }
        return $merged;
    }
}

$arr = [0, 43, 3, 2, 3, 4, 6];
$sort = new Sort();

$quickSort = $sort->quick($arr);
$selectSort = $sort->select($arr);
$insertSort = $sort->insert($arr);
$bubbleSort = $sort->bubble($arr);
$simpleSort = $sort->simple($arr);
$mergeSort = $sort->mergeSort($arr);

echo "quick sort: " . implode(", ", $quickSort) . "\n";
echo "select sort: " . implode(", ", $selectSort) . "\n";
echo "insert sort: " . implode(", ", $insertSort) . "\n";
echo "bubble sort: " . implode(", ", $bubbleSort) . "\n";
echo "simple sort: " . implode(", ", $simpleSort) . "\n";
echo "merge sort: " . implode(", ", $mergeSort) . "\n";
