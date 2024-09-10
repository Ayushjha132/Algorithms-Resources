### Note about recursion

    Identify the base case
    Identify the recursive case
    Get closer and closer and return when needed. Usually you have 2 returns

Running time is exponential i.e. 2^n
but this can be overcome with dynamic programming and memoization.

#### PORS

    -- DRY
    -- Readability

#### CONS

    -- Large Stack

> [!NOTE]
> In Javascript there is Tail Call Optimization approach that will be used to overcome the issue of stack overflow. (this comes with es6)

Article: <https://2ality.com/2015/06/tail-call-optimization.html>  (tail-call-optimization)

### Common use cases

    -- With use of tree or converting anything into tree
    -- divide into instance of subproblem that are smaller instance of the same problem.
    -- Each instance of the subproblem is identical in nature.
    -- divide and conquer using Recursion.
