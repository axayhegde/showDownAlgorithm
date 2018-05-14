/*
3) Print the following Pyramid:
Input Variable : Number of rows
 */


function pyramid(numberOfRows) {

    for(var i = 0; i < numberOfRows; i++) {
        var space = '';
        for (var j = 1; j < numberOfRows - i; j++) {
            space = space + ' ';
        }
        for (var l = 1; l <= (2 * i + 1); l++) {
            space = space + '#';
        }
        console.log(space);
    }
}

pyramid(6);