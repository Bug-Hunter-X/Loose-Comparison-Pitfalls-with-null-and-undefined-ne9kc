# JavaScript Loose Comparison Bug

This repository demonstrates a common error in JavaScript related to loose comparison (==) when dealing with null and undefined values.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

JavaScript's loose equality operator (==) does not always behave as expected when comparing null and undefined.  This can lead to unexpected behavior and hard-to-find bugs.

## Solution

The best practice is to use the strict equality operator (===) when comparing values.  This prevents type coercion and ensures a more reliable comparison.