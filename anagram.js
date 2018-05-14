//Check if two strings are anagram of each other


function anagram(myStr, myStr2) {
    let flag = true;

    let myStrArr = myStr.replace(/[^\w]/g,'').split('');
    let myStr2Arr = myStr2.replace(/[^\w]/g,'').split('');
    myStrArr.sort();
    myStr2Arr.sort();

    for (let i = 0; i < myStr2Arr.length; i++) {
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

let myStr = "akshay is the best";
let myStr2 = "Askhay si eht sebt";

anagram(myStr, myStr2);