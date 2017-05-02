// Should be imported from standard library
function max(int a, int b) -> int:
    if a > b:
        return a
    else:
        return b

function min(int a, int b) -> int:
    if a < b:
        return a
    else:
        return b

// =================================================================
// Squares
// =================================================================

constant HIDDEN is 1
constant EXPOSED is 2

// Every square on the board is either an exposed square or a hidden
// square.
//
// An exposed square is one which has been exposed by the player, and 
// displays its "rank".  The rank is the count of bombs in the eight 
// directly adjacent squares.
//
// A hidden square is one which has yet to be revealed by the player.  A
// hidden square may contain a bomb and/or have been "flagged" by the
// player.
type Square is {
  int type,       // HIDDEN or EXPOSED
  int rank,       // Number of bombs in adjacent squares
  bool holdsBomb,  // true if the square holds a bomb
  bool flagged     // true if the square is flagged  
}

// ExposedSquare constructor
export function ExposedSquare(int rank, bool bomb) -> Square:
    return { type: EXPOSED, rank: rank, holdsBomb: bomb, flagged: false }

// HiddenSquare constructor
export function HiddenSquare(bool bomb, bool flag) -> Square:
    return { type: HIDDEN, rank: -1, holdsBomb: bomb, flagged: flag }

// =================================================================
// Board
// =================================================================

type Board is {
   Square[] squares,  // Array of squares making up the board
   int width,         // Width of the game board (in squares)
   int height         // Height of the game board (in squares)
}

// Create a board of given dimensions which contains no bombs, and
// where all squares are hidden.
export function Board(int width, int height) -> Board:
    Square[] squares = [HiddenSquare(false,false); width * height]
    //
    return {
        squares: squares,
        width: width,
        height: height
    }

// Return the square on a given board at a given position
export function getSquare(Board b, int col, int row) -> Square:
    int rowOffset = b.width * row // calculate start of row
    return b.squares[rowOffset + col]

// Set the square on a given board at a given position
export function setSquare(Board b, int col, int row, Square sq) -> Board:
    int rowOffset = b.width * row // calculate start of row
    b.squares[rowOffset + col] = sq
    return b

// =================================================================
// Game Play
// =================================================================

export
// Flag (or unflag) a given square on the board.  If this operation is not permitted, then do nothing
// and return the board; otherwise, update the board accordingly.
function flagSquare(Board b, int col, int row) -> Board:
   Square sq = getSquare(b,col,row)
   // check whether permitted to flag
   if sq.type == HIDDEN:
      // yes, is permitted so reverse flag status and update board
      sq.flagged = !sq.flagged
      b = setSquare(b,col,row,sq)
   //
   return b

// Determine the rank of a given square on the board.  That is the
// count of bombs in the adjacent 8 squares.  Observe that, in this
// implementation, we also count any bomb on the central square itself.
// This does not course any specific problem since an exposed square
// containing a bomb signals the end of the game anyway.
function determineRank(Board b, int col, int row) -> int:
    int rank = 0
    // Calculate the rank
    int r = max(0,row-1)
    while r != min(b.height,row+2):
        int c = max(0,col-1)
        while c != min(b.width,col+2):
            Square sq = getSquare(b,c,r)
            if sq.holdsBomb:
                rank = rank + 1
            c = c + 1
        r = r + 1
    //
    return rank

export
// Attempt to recursively expose blank hidden square, starting from a given position.
function exposeSquare(Board b, int col, int row) -> Board:
    // Check whether is blank hidden square
    Square sq = getSquare(b,col,row)
    int rank = determineRank(b,col,row)
    if sq.type == HIDDEN:
        // yes, so expose square
        sq = ExposedSquare(rank,sq.holdsBomb)
        b = setSquare(b,col,row,sq)
        if rank == 0:
            // now expose neighbours
            return exposeNeighbours(b,col,row)
    //
    return b

// Recursively expose all valid neighbouring squares on the board
function exposeNeighbours(Board b, int col, int row) -> Board:
    int r = max(0,row-1)
    while r != min(b.height,row+2):
        int c = max(0,col-1)
        while c != min(b.width,col+2):
           b = exposeSquare(b,c,r)
           c = c + 1
        r = r + 1
    //
    return b

// Determine whether the game is over or not and, if so, whether or
// not the player has one.  The game is over and the player has lost 
// if there is an exposed square on the board which contains a bomb.  
// Likewise, the game is over and the player has one if there are no 
// hidden squares which don't contain a bomb.
export
function isGameOver(Board b) -> (bool gameOver, bool playerWon):
    bool isOver = true
    bool hasWon = true
    int i = 0
    while i < |b.squares|:
        Square sq = b.squares[i]
        if sq.type == HIDDEN && !sq.holdsBomb:
            // Hidden square which doesn't hold a bomb so game may not be over
            isOver = false
        else if sq.type == EXPOSED && sq.holdsBomb:
            // Exposed square which holds a bomb so game definitely over
            isOver = true
            hasWon = false
            break
        i = i + 1
    //
    return isOver, hasWon
   