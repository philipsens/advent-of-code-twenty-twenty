import * as fs from 'fs'

const input = fs.readFileSync('./input.txt').toString().split('\n')

input.forEach((i) =>
    input.forEach((j) =>
        input.forEach((k) => {
            if (+i + +j + +k === 2020)
                console.log(+i * +j * +k)
        })))