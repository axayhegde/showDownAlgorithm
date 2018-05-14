/*
2) Print the following pattern
Input Variable : Number of rows
#
# #
# # #
# # # #
# # # # #
# # # # # #
# # # # # # #

*/

function stairCase(numberOfStairs){

    var symbol = "#";
    console.log('Number of Stairs  ' + numberOfStairs);

    for(var row=1; row <= numberOfStairs; row++){
        console.log("row "+ row + " ----> " + symbol.repeat(row));
    }
}

stairCase(7);