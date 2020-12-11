import * as fs from 'fs'

const input = fs.readFileSync('./input.txt').toString().split('\n')

let validCount = 0

input.forEach((line) => {
    const [rule, password] = line.split(': ')
    const [ruleRange, ruleLetter] = rule.split(' ')
    const [ruleRangeMin, ruleRangeMax] = ruleRange.split('-')
    const matches = password.match(new RegExp(ruleLetter, 'g'))
    if (+ruleRangeMin <= matches?.length && matches?.length <= +ruleRangeMax) validCount++
})

console.log(validCount)