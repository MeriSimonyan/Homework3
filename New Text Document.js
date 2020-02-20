//1
let sent = '_, we have a _.'
let words = ['Houston', 'problem']
words.length
words.toString()
letpos = sent.match('_')
let n = sent.replace('_', words[0])
let m = n.replace('_', words[1])
console.log(m)
