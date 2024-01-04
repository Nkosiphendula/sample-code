const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync("./web.dev/content/first.txt", 'utf8')
const second = readFileSync("./web.dev/content/second.txt", 'utf8')

writeFileSync(
    './web.dev/content/result-sync.txt', 
    `here is the result : ${first}, ${second}`,
    { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')