function coords(X, Y) {
  return {
    x: X,
    y: Y
  };
}

function inBounds(node) {
    return node.x >= 0 && node.x < 50 && node.y >= 0 && node.y < 50;
}

/**
 * fn(Coords start, Coords end) ->
 * Given the Coords of one object, determine its distance from another object.
 * Simple distance using pythagorean theorem (x^2+y^2=z^2).
 * Might not be needed, it looks like there's already a baked in method for
 * finding the shortest path.
 */
function distance(start, end) {
    var x = start.x - end.x;
    var y = start.y - end.y;
    return Math.floor(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

/**
 * fun(Coords start)
 * Gets the coordinates of all neighboring squares that are in a room.
 */
function getNeighborSquares(start) {
    var offset = [-1, 0, 1];
    var neighbors = [];
    offset.forEach(function(xoff) {
        offset.forEach(function(yoff) {
            if (xoff == 0 && yoff == 0) return; // Don't record self
            var neighbor = coords(start.x + xoff, start.y + yoff);
            if (inBounds(neighbor)) { // only record if it's inbounds
              neighbors.push(neighbor);
            }
        });
    });

    return neighbors;
}

/** Returns coordinates of all walkable space around a node */
function openSpaces(node) {
    var neighbors = getNeighborSquares(node);
    // get room name
    Game.map.getRoomTerrain();
}