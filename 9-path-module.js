//PATH MODULE

const path = require('path')

console.log(path.sep)

//path.join joins all the files
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

//path.basename returns the last file
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)