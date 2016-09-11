var fs = require('fs')

fileName = process.argv[2]

var data = fs.readFileSync(fileName)

var newLine = data.toString().split('\n').length

console.log(newLine-1)
