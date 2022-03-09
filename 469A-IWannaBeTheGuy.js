process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
 
process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });
 
    main();
});
 
function readline() {
    return inputString[currentLine++];
}
 
// ********** Code Start **********

function main() {
    const n = parseInt(readline())
    let X = readline().split(" ")
    let Y = readline().split(" ")
    X.shift()
    Y.shift()
    let allPossiblePassedLevels = X.concat(Y)
    allPossiblePassedLevels = [... new Set(allPossiblePassedLevels)]
    totalLevelsSum = ((n+1)*n)/2
    totalPossiblePassedLevelsSum = 0
    allPossiblePassedLevels.forEach((lvl) => {
        totalPossiblePassedLevelsSum += parseInt(lvl)
    })

    if(totalPossiblePassedLevelsSum == totalLevelsSum) {
        console.log("I become the guy.")
    }else {
        console.log("Oh, my keyboard!")
    }
}
