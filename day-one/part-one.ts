import * as fs from 'fs'

const input = fs.readFileSync('./input.txt').toString().split('\n')

input.forEach((i) =>
    input.forEach((j) => {
        if (+i + +j === 2020)
            console.log(+i * +j)
    }))