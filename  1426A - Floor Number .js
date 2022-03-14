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
    const t = +(readline())
    const results = []

    const check = (n, x) => {
        if(n<=2) {
            results.push(1)
        }else {
            if((n-2) %x == 0) {
                results.push((n-2)/x +1)
            }else {
                results.push((Math.floor((n-2)/x)) + 2)
            }
        }
    }
    for (let i=0; i<t; i++) {
        const input = readline().split(' ')
        const n = parseInt(input[0])
        const x = parseInt(input[1])
        check(n, x)
    }

    results.forEach((result) => console.log(result))
}





