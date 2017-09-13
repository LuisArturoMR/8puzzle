# 8 Puzzle with Javascript

This implementation utilizes the A* search algorithm
# 8 Puzzle

Write a program to solve the 8-puzzle problem (and its natural generalizations) using the [A* search algorithm](http://en.wikipedia.org/wiki/A*_search_algorithm).

*The problem.* The 8-puzzle problem is a puzzle invented and popularized by Noyes Palmer Chapman in the 1870s. It is played on a 3-by-3 grid with 8 square blocks labeled 1 through 8 and a blank square. Your goal is to rearrange the blocks so that they are in order. You are permitted to slide blocks horizontally or vertically into the blank square. The following shows a sequence of legal moves from an initial board position (left) to the goal position (right).

```
    1  3        1     3        1  2  3        1  2  3        1  2  3
 4  2  5   =>   4  2  5   =>   4     5   =>   4  5      =>   4  5  6
 7  8  6        7  8  6        7  8  6        7  8  6        7  8

 initial                                                      goal
 ```
# How to run

Is very simple, just open index.html file, right click with the mouse and Inspect for more specific information, the go to he console and check the results, if it's necessary reload the web page with out close the console window.

# Important notes

When there are more than 3 numbers in the wrong place, the program loops infinitely, this program only solve 8 Puzzle with only 3 numbers in the incorrect place. Also is important to mention that if the Puzzle generates random, it's very possible that it doesn't have solution.

# 8Puzzle for this test

```
puzzle = [1,2,3,0,5,6,4,7,8];
```

### Other programs for reference (Thanks)

https://github.com/ardamavi/8-Puzzle-JavaScript
