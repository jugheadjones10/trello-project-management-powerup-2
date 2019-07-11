var rowNo = 2
var newGridArea = ` "name cost quantity total-cost" `
for(var i = 1; i < rowNo + 1; i++){
    newGridArea = newGridArea + `"name${i} cost${i} quantity${i} total-cost${i}" `
}

console.log(newGridArea)