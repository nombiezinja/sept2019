
Problem

Imagine you are on a driving trip in a rectangular grid map - an N x M grid of cells. The top left corner cell of the maze is (0, 0) and the bottom right corner is (N-1, M-1). Each cell making up the maze can be either obstacle which you can’t enter, or an open space cell with a gas station that contains a certain amount of gas. The gas in an open space cell is automatically gathered once you enter that cell, and can only be gathered once. Starting from a cell, you can drive up/down/left/right to adjacent cells with a single step.
Your trip starts from a starting cell and ends in a destiny cell. You know where the starting and destiny cells are, that they are different, and that they are both open space cells. In order to save time, you must drive from the starting cell to the destiny cell taking as few steps as possible. If there are multiple choices for the path you could take, you must choose the one on which you collect as much gas as possible.

Input (attached input-large.in)

The first line of the input file gives the number of test cases, T. 
T test cases follow.
Each test case starts with a line containing two integers N and M, which give the size of the grid map as described above. The second line of each test case contains four integers enx, eny, exx, exy, describing the position of starting cell (enx, eny) and destiny cell (exx, exy). Then N lines follow and each line has M numbers, separated by spaces, describing the N x M cells of grid map from top to bottom. Each number for a cell is either -1, which indicates a cell is an obstacle, or a positive integer, which indicates an open space cell containing a certain amount of gas.

Output

For each test case, output one line containing "Case #x: y", where x is the case number (starting from 1). If it's possible for you to walk from the entrance to the exit, y should be the maximum total amount of gas you can collect by taking the fewest steps possible. If you cannot drive from the starting cell to the destiny cell, y should be the string "Mission Impossible.". Please note that our verification program is case sensitive.

Limits

The amount of gas contained in each cell will not exceed 10,000.
1 ≤ T ≤ 30.
0 ≤ enx, exx < N.
0 ≤ eny, exy < M.

Large dataset

1 ≤ N, M ≤ 100.

Sample data

Sample Input

2

2 3

0 2 1 0

2 -1 5

3 -1 6

4 4

0 2 3 2

-1 1 1 2

1 1 1 1

2 -1 -1 1

1 1 1 1

Sample Output

Case #1: Mission Impossible.

Case #2: 7

Expected deliverables

1.    Please complete assignment using JavaScript and NodeJS.

2.    Full source code.

3.    Build script that will compile and build the artifacts. Note, this should be a .bat or .sh and not expect us to install anything extra to compile/build.

4.    Run script that will generate the output in file called output.dat. Please do also a .bat or .sh file too.

5.    You are free to provide a readme.txt, to specify the build and run steps.
Also you are free to provide comments on your algorithm/code design if you think it helps us judge your work better.

 

 