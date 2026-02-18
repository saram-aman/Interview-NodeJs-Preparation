<?php

class TreeNode
{
    public $val;
    public $left;
    public $right;

    public function __construct($val = 0, $left = null, $right = null)
    {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

/**
 * Function to reverse (invert) a binary tree.
 * 
 * @param TreeNode|null $root
 * @return TreeNode|null
 */
function invertTree($root)
{
    if ($root === null) {
        return null;
    }

    // Swap the left and right children
    $temp = $root->left;
    $root->left = $root->right;
    $root->right = $temp;

    // Recursively invert the subtrees
    invertTree($root->left);
    invertTree($root->right);

    return $root;
}

// Example usage:
$root = new TreeNode(4);
$root->left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
$root->right = new TreeNode(7, new TreeNode(6), new TreeNode(9));
$invertedRoot = invertTree($root);
