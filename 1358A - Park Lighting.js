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
    const t = parseInt(readline())
    const results = []
    const calc = (arr) => {
        if((parseInt(arr[0]) %2 ==0) || (parseInt(arr[1]) %2 ==0)) {
            return ((parseInt(arr[0])*parseInt(arr[1])) /2)
        }else {
            return (((parseInt(arr[0])*parseInt(arr[1])) +1)/2)
        }
    }
    for (let i=0; i<t; i++) {
        const input = readline().split(" ")
        results.push(calc(input))
    }

    results.forEach(result => console.log(result))
}


