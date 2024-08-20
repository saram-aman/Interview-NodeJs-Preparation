<?php

function findWrongNumber($arr) {
    for ($i = 0; $i < count($arr); $i++) {
        if($i > 0 && $arr[$i] !== $arr[$i - 1] + 1) return $arr[$i];
    }
}
$response = findWrongNumber([1, 2, 3, 4, 17, 5, 6, 7, 8]);
echo($response);