/* Common Template Starts */
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
}/* Common Template Ends */
  function main() {

    const input = readline()
    let arr = [input[0]]
    let count = 1
    for (let i =1; i<input.length; i++) {
        if(!arr.includes(input[i])) {
            arr.push(input[i])
            count++
        }
    }

    if(count % 2 ==0) {
        console.log("CHAT WITH HER!")
    }else {
        
        console.log("IGNORE HIM!")
    }
  }


    




