const fs = require('fs')

const userString = fs.readFileSync('./db/user.json').toString()
const userArray = JSON.parse(userString)


const user3 = {id:3,name:"Tom",password:"zzz"}
userArray.push(user3)
const string = JSON.stringify(userArray)
fs.writeFileSync('./db/user.json',string)

