//Check if two strings are anagram of each other


function anagram(myStr, myStr2) {
    var flag = true;
    var myStrArr = myStr.split('');
    var myStr2Arr = myStr2.split('');
    myStrArr.sort();
    myStr2Arr.sort();

    for (var i = 0; i < myStr2Arr.length; i++) {
        if (myStrArr[i] != myStr2Arr[i]) {
            flag = false;
        }
    }
    if (flag) {
        console.log('The Strings ' + myStr + ' and ' + myStr2 + ' are Anagrams');
    } else {
        console.log('The Strings ' + myStr + ' and ' + myStr2 + ' are not Anagrams');
    }
}

var myStr = "akshay";
var myStr2 = "askhsy";

anagram(myStr, myStr2);