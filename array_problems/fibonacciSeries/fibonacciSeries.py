class ArrayProblems:
    def fibonacciSeries(self, n):
        if n == 0:
            return 0
        elif n == 1:
            return 1
        else:
            return self.fibonacciSeries(n - 1) + self.fibonacciSeries(n - 2)
``` 
