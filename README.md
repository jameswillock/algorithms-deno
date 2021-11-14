<!-- deno-fmt-ignore-file -->
```
       _                  _ _   _
      | |                (_) | | |
  __ _| | __ _  ___  _ __ _| |_| |__  _ __ ___  ___
 / _` | |/ _` |/ _ \| '__| | __| '_ \| '_ ` _ \/ __|
| (_| | | (_| | (_) | |  | | |_| | | | | | | | \__ \
 \__,_|_|\__, |\___/|_|  |_|\__|_| |_|_| |_| |_|___/
          __/ |
         |___/
```

![Tests](https://github.com/jameswillock/algorithms-deno/workflows/Tests/badge.svg) [![MIT](https://img.shields.io/github/license/jameswillock/algorithms-deno.svg)](https://github.com/jameswillock/algorithms-deno/blob/master/LICENSE)  [![Coverage Status](https://coveralls.io/repos/github/jameswillock/algorithms-deno/badge.svg?branch=master)](https://coveralls.io/github/jameswillock/algorithms-deno?branch=master)

## Context

This is just a simple repository to implement the 
algorithm examples from [Grokking Algorithms](https://www.manning.com/books/grokking-algorithms).

## Running the project
1. Ensure [Deno](https://deno.land) is installed.
2. Run `deno test` to check test suite.
3. Run `deno run index.ts` to check algorithms.

## Example output
```
Check algorithms-deno/index.ts
shuffle(): 1ms
findSmallest(): 0ms
findSmallest returned 521
selectionSort(): 1ms
quickSort(): 2ms
stupidSearch(): 1ms
stupidSearch returned 99999
binarySearch(): 0ms
binarySearch returned 99999
recursiveSumArray(): 0ms
recursiveSumArray returned 4950
nonRecursiveSumArray(): 0ms
nonRecursiveSumArray returned 4950
recursiveLength(): 0ms
recursiveLength returned 100
nonRecursiveLength(): 0ms
nonRecursiveLength returned 100
```