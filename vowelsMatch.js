/*
4) Find the count of Vowels in the given string using match method
and regular expression in JS
 */

function vowelMatch(testString){
    let count = 0;
    let found;
    let testStringArr = testString.split('');

    for(let i = 0 ; i < testStringArr.length; i++){
        let str = testStringArr[i];

        found = str.match(/[aeiou]/gmi);
        if(found){
            count++;
        }
    }
    console.log('The number of vowels in the given string are ' + count);

}
let testString = 'Hello this is going';
vowelMatch(testString);