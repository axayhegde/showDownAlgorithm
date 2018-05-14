/*
3) Print the following Pyramid:
Input letiable : Number of rows
 */


function pyramid(numberOfRows) {

    for(let i = 0; i < numberOfRows; i++) {
        let space = '';
        for (let j = 1; j < numberOfRows - i; j++) {
            space = space + ' ';
        }
        for (let l = 1; l <= (2 * i + 1); l++) {
            space = space + '#';
        }
        console.log(space);
    }
}

pyramid(6);