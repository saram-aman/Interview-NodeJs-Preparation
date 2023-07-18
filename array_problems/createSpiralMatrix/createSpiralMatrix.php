<?php
class ArrayProblems {
    public function createSpiralMatrix($n) {
        $numRows = $n;
        $arr = [];
        $arrSize = $numRows * $numRows;
        for ($i = 0; $i < $arrSize; $i++) {
            array_push($arr, $i);
        }
        $numCols = ceil(count($arr) / $numRows);
        $matrix = array($numRows);
        for ($i = 0; $i < $numRows; $i++) {
            $matrix[$i] = array_fill(0, $numCols, 0);
        }
        $topRow = 0;
        $leftCol = 0;
        $bottomRow = $numRows - 1;
        $rightCol = $numCols - 1;
        $index = 0;
        while ($topRow <= $bottomRow && $leftCol <= $rightCol) {
            for ($col = $leftCol; $col <= $rightCol; $col++) {
                $matrix[$topRow][$col] = $arr[$index++];
            }
            $topRow++;
            for ($row = $topRow; $row <= $bottomRow; $row++) {
                $matrix[$row][$rightCol] = $arr[$index++];
            }
            $rightCol--;
            if ($topRow <= $bottomRow) {
                for ($col = $rightCol; $col >= $leftCol; $col--) {
                    $matrix[$bottomRow][$col] = $arr[$index++];
                }
                $bottomRow--;
            }
            if ($leftCol <= $rightCol) {
                for ($row = $bottomRow; $row >= $topRow; $row--) {
                    $matrix[$row][$leftCol] = $arr[$index++];
                }
                $leftCol++;
            }
        }
        return $matrix;
    }
}
$array_problems = new ArrayProblems();
$spiralMatrix = $array_problems->createSpiralMatrix(5);
print_r($spiralMatrix);