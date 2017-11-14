/* Tutorial from the net ninja youtube channel */
setTimeout(function () {
  console.log('2 seconds have passed with normal function')
}, 2000)

setTimeout(() => {
  console.log('3 seconds have passed with Arrow Function')
}, 3000)

let time = 0

let timer = setInterval(function() {
  time += 2
  console.log(`${time} seconds have passed`)

  if (time > 5) {
    clearInterval(timer)
  }
}, 2000)

console.log(__dirname)
console.log(__filename)

// Normal function
function sayHi() {
  console.log('Hi')
}

sayHi()

// Function expression (Anonymous Sunction/ Fungsi tanpa nama)
let sayBye = function() {
  console.log('Bye')
}
// Panggil fungsi
sayBye()
// Function expression with Arrow Function

let say = () => {
  console.log('Say to Arrow Function')
}
// Cara memanggil fungsi
say()

// Fungsi di dalam fungsi (Parameter fungsi berupa fungsi yang lain)
function callFunction(nama_fungsi) {
  nama_fungsi()
}

callFunction(sayBye)
