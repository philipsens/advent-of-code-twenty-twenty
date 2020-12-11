import * as fs from 'fs'

const input = fs.readFileSync('./input.txt').toString().split('\n')

let validCount = 0

input.forEach((line) => {
    const [rule, password] = line.split(': ')
    const [rulePosition, ruleLetter] = rule.split(' ')
    const [rulePositionOne, rulePositionTwo] = rulePosition.split('-')
    if (password.charAt(+rulePositionOne - 1) == ruleLetter ?
        password.charAt(+rulePositionTwo - 1) != ruleLetter :
        password.charAt(+rulePositionTwo - 1) == ruleLetter)
        validCount++
})

console.log(validCount)