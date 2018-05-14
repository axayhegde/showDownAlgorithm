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

/*
function stairCase(numberOfStairs){

    var symbol = "#";
    console.log('Number of Stairs  ' + numberOfStairs);

    for(var row=1; row <= numberOfStairs; row++){
        console.log("row "+ row + " ----> " + symbol.repeat(row));
    }
}
*/


//Better approach
steps(7);

function steps(n){
    for(let rows = 0; rows < n; rows++){
        let stair = '';
        for(let col = 0; col < n; col++){
            if(col <= rows){
                stair += '#';
            }else{
                stair += '';
            }
        }
        console.log(stair);
    }
}


