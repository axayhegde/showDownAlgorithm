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

    for(var i=1; i<=numberOfStairs; i++){
        console.log(symbol.repeat(i));
    }
}

stairCase(7);