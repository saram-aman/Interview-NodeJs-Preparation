class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def reverseBinaryTree(root):
    """
    Inverts a binary tree (mirror image).
    """
    if not root:
        return None

    # Swap the left and right children
    root.left, root.right = root.right, root.left

    # Recursively call for left and right subtrees
    reverseBinaryTree(root.left)
    reverseBinaryTree(root.right)

    return root

def print_tree(root):
    """
    Helper function to print the tree in-order for verification.
    """
    if not root:
        return
    print_tree(root.left)
    print(root.val, end=" ")
    print_tree(root.right)

if __name__ == "__main__":
    # Example:
    #      4
    #    /   \
    #   2     7
    #  / \   / \
    # 1   3 6   9
    
    root = TreeNode(4)
    root.left = TreeNode(2, TreeNode(1), TreeNode(3))
    root.right = TreeNode(7, TreeNode(6), TreeNode(9))

    print("Original Tree (In-order):")
    print_tree(root)
    print("\n")

    reversed_root = reverseBinaryTree(root)

    print("Reversed Tree (In-order):")
    print_tree(reversed_root)
    print("\n")
