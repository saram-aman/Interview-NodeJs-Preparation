class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    static fromArray(arr: (number | null)[]): TreeNode | null {
        if (arr.length === 0 || arr[0] === null) return null;
        
        const root = new TreeNode(arr[0]!);
        const queue: (TreeNode | null)[] = [root];
        
        for (let i = 1; i < arr.length; i += 2) {
            const current = queue.shift();
            if (!current) continue;
            if (i < arr.length && arr[i] !== null) {
                current.left = new TreeNode(arr[i]!);
                queue.push(current.left);
            }
            if (i + 1 < arr.length && arr[i + 1] !== null) {
                current.right = new TreeNode(arr[i + 1]!);
                queue.push(current.right);
            }
        }
        
        return root;
    }
}

class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }
    static fromArray(arr: (number | null)[]): TreeNode | null {
        if (arr.length === 0 || arr[0] === null) return null;
        const root = new TreeNode(arr[0]!);
        const queue: TreeNode[] = [root];
        let i = 1;

        while (i < arr.length) {
            const current = queue.shift();
            if (!current) break;
            if (i < arr.length && arr[i] !== null) {
                current.left = new TreeNode(arr[i]!);
                queue.push(current.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null) {
                current.right = new TreeNode(arr[i]!);
                queue.push(current.right);
            }
            i++;
        }

        return root;
    }
    reverseTree(node: TreeNode | null): TreeNode | null {
        if (node === null) {
            return null;
        }
        [node.left, node.right] = [this.reverseTree(node.right), this.reverseTree(node.left)];
        return node;
    }
    reverseTreeDFS(root: TreeNode | null): TreeNode | null {
        if (!root) return null;
        const stack: (TreeNode | null)[] = [root];
        while (stack.length > 0) {
            const node = stack.pop();
            if (!node) continue;
            [node.left, node.right] = [node.right, node.left];
            stack.push(node.left);
            stack.push(node.right);
        }
        
        return root;
    }
    reverseTreeBFS(root: TreeNode | null): TreeNode | null {
        if (!root) return null;
        const queue: (TreeNode | null)[] = [root];
        while (queue.length > 0) {
            const node = queue.shift();
            if (!node) continue;
            [node.left, node.right] = [node.right, node.left];
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return root;
    }
    static toArray(root: TreeNode | null): (number | null)[] {
        if (!root) return [];
        const result: (number | null)[] = [];
        const queue: (TreeNode | null)[] = [root];
        while (queue.length > 0) {
            const node = queue.shift();
            if (node) {
                result.push(node.val);
                if (node.left || node.right) {
                    queue.push(node.left || null);
                    queue.push(node.right || null);
                }
            } else {
                result.push(null);
            }
        }
        while (result.length > 0 && result[result.length - 1] === null) {
            result.pop();
        }
        return result;
    }
}

function measureTime<T>(fn: () => T, name: string): T {
    console.time(name);
    const result = fn();
    console.timeEnd(name);
    return result;
}

const tree = new BinaryTree();
const testTree = TreeNode.fromArray(Array.from({length: 10000}, (_, i) => i + 1));

console.log('=== Small Tree Example ===');
const smallTree = TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7]);
console.log('Original tree (level-order):', BinaryTree.toArray(smallTree));

const recursiveReversed = measureTime(
    () => tree.reverseTree(JSON.parse(JSON.stringify(smallTree))), 
    'Recursive Time'
);
console.log('Recursive reversed:', BinaryTree.toArray(recursiveReversed));

const dfsReversed = measureTime(
    () => tree.reverseTreeDFS(JSON.parse(JSON.stringify(smallTree))), 
    'DFS Iterative Time'
);
console.log('DFS Iterative reversed:', BinaryTree.toArray(dfsReversed));

const bfsReversed = measureTime(
    () => tree.reverseTreeBFS(JSON.parse(JSON.stringify(smallTree))), 
    'BFS Iterative Time'
);
console.log('BFS Iterative reversed:', BinaryTree.toArray(bfsReversed));

console.log('\n=== Large Tree Performance Test (10,000 nodes) ===');
measureTime(
    () => tree.reverseTree(JSON.parse(JSON.stringify(testTree))), 
    'Recursive (10k nodes)'
);
measureTime(
    () => tree.reverseTreeDFS(JSON.parse(JSON.stringify(testTree))), 
    'DFS Iterative (10k nodes)'
);
measureTime(
    () => tree.reverseTreeBFS(JSON.parse(JSON.stringify(testTree))), 
    'BFS Iterative (10k nodes)'
);