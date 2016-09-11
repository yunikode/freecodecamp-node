var fs = require('fs')

fileName = process.argv[2]

fs.readFile(fileName, (err, data) => {
if (err) throw err
console.log(data.toString().split('\n').length - 1)
})

