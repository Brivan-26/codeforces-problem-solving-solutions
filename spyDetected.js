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
    const arrayInputs = []
    for(let i =0; i<t; i++) {
        const length = readline()
        arrayInputs[i] = readline().split(" ")
    }

    const check = (arr) => {
        if(arr[0] != arr[1]) {
            if(arr[1] == arr[2]) {
                results.push(1)
            }else {
                results.push(2)
            }
        }else {
            let cont = true
            i=2;
            while(cont && i<arr.length) {
                if(arr[i] == arr[i-1]) {
                    i++
                }else {
                    cont = false
                    results.push(i+1)
                }
            }

        }
    }

    arrayInputs.forEach((arrayInput) => {
        check(arrayInput)
    })

    results.forEach(result => console.log(result))
}