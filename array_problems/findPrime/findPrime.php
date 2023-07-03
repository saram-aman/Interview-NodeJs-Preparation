<?php
class arrayProblems {
    public function isPrime($number) {
        if ($number < 0) return false;
        for ($i = 2; $i <= sqrt($number); $i++) if ($number % $i === 0) return false;
        return true;
    }

    public function findPrime($array) {
        $result = [];
        for ($i = 0; $i < count($array); $i++) if ($this->isPrime($array[$i])) array_push($result, $array[$i]);
        return $result;
    }
}

$array_problems = new arrayProblems();
print_r($array_problems->findPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));
