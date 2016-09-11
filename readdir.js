var fs = require('fs')

fileName = process.argv[2]
var filterName = new RegExp('\.' + process.argv[3])


fs.readdir(fileName, (err, files) => {
if (err) throw err

var list = files


for(var i = 0, len = list.length; i < len; i++) {

if(filterName.test(list[i]))
 console.log(list[i]) 
}
})
