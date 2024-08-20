<?php
$json_data = file_get_contents('../array.json');
$array = json_decode($json_data, true);
class ArrayProblems
{
    public function flatten_array($arr)
    {
        $flatten_arr = [];
        for($i = 0; $i < count($arr); $i++) {
            if (is_array($arr[$i])) {
                $flatten_arr = array_merge($flatten_arr, $this->flatten_array($arr[$i]));
            } else {
                array_push($flatten_arr, $arr[$i]);
            }
        }
        return $flatten_arr;
    }
}
$array_problems = new ArrayProblems();
$res = $array_problems->flatten_array($array);
print_r($res);