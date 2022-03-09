"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********

function main() {
    const dim = parseInt(readline())
    const myArr =[]
    for (var i=0; i<=dim-1; i++) {
        myArr[i] = []
        for (var j=0; j<=dim-1; j++) {
            if(i==0) {
                myArr[i][j] = 1
            }else {
                if(j==0) {
                    myArr[i][j] = 1
                }else {
                    myArr[i][j] = myArr[i-1][j] + myArr[i][j-1]
                }
            }
        }
    }
        console.log(myArr[dim-1][dim-1])
}


   








