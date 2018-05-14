//Check if two strings are anagram of each other


function anagram(myStr, myStr2) {
    var flag = true;

    var myStrArr = myStr.replace(/[^\w]/g,'').split('');
    var myStr2Arr = myStr2.replace(/[^\w]/g,'').split('');
    myStrArr.sort();
    myStr2Arr.sort();

    for (var i = 0; i < myStr2Arr.length; i++) {
        if (myStrArr[i].toLowerCase() != myStr2Arr[i].toLowerCase()) {
            flag = false;
        }
    }
    if (flag) {
        console.log('The Strings "' + myStr + '" and "' + myStr2 + '" are Anagrams');
    } else {
        console.log('The Strings "' + myStr + '" and "' + myStr2 + '" are not Anagrams');
    }
}

var myStr = "akshay is the best";
var myStr2 = "Askhay si eht sebt";

anagram(myStr, myStr2);