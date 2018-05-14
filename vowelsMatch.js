/*
4) Find the count of Vowels in the given string using match method
and regular expression in JS
 */

function vowelMatch(testString){
    var vowels = ['a','e','i','o','u'];
    var count = 0;
    var found;
    var testStringArr = testString.split('');

    for(var i = 0 ; i < testStringArr.length; i++){
        var str = testStringArr[i];

        found = str.match(/[aeiou]/gmi);
        if(found){
            count++;
        }else{

        }
    }
    console.log('The number of vowels in the given string are ' + count);

}
var testString = 'Hello this is going';
vowelMatch(testString);