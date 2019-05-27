# node-bfs-bitmap
> Solution for the bitmap challenge using Breadth-first search (BFS)

[![CircleCI](https://circleci.com/gh/oleg-koval/node-bfs-bitmap/tree/master.svg?style=svg)](https://circleci.com/gh/oleg-koval/node-bfs-bitmap/tree/master)

### Intro
There is given a rectangular bitmap of size n*m. Each pixel of the bitmap is either white or
black, but at least one is white. The pixel in i-th line and j-th column is called the pixel (i,j). The
distance between two pixels *p1=(i1,j1)* and *p2=(i2,j2)* is defined as
```
d(p1,p2)=|i1-i2|+|j1-j2|
```

*Goal:* compute the distance to the nearest white for each pixel;

*Algorithm used:* Breadth-first search involves search through a tree one level at a time.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

We traverse through one entire level of children nodes first, before moving on to traverse through the grandchildren nodes. And we traverse through an entire level of grandchildren nodes before going on to traverse through great-grandchildren nodes.

from [Breaking Down Breadth-First Search](https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9)
### Setup

- Install [Node.js](https://gist.github.com/d2s/372b5943bce17b964a79)
- Setup [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Install

Clone the repo:

```bash
git clone git@github.com:oleg-koval/node-bfs-bitmap.git
```

Install dependencies:
```bash
cd node-bfs-bitmap
npm install
```

# Examples:
To run examples:

```bash
npm run examples
```

Write results to the file:

```bash
npm run examples > output.txt
```

# TODO:
- add CLI for user input
- fix semantic-release problem with CLI tool: `ERR! semantic-release Error following repo on CircleCI!`

# References:
- [Breadth-First Search (BFS)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search) by @trekhleb
- [Breaking Down Breadth-First Search](https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9)
