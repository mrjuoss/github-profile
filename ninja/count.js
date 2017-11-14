let counter = function(params) {
  return 'The are '+ params.length + ' element(s) in this array'
}

let penjumlahan = (a,b) => {
  return `Nilai ${a} + ${b} adalah ${a+b}`
}

let pi = 3.14

/* Cara Export versi pertama */
//module.exports.counter = counter
//module.exports.penjumlahan = penjumlahan
//module.exports.pi = pi

// Penulisan Export Module yang lain //
module.exports.sayHi = (nama) => {
  return `Salam kenal ${nama}`
}

let sayBye = () => {
  return 'Bye..'
}

// Penulisan Export Module yang lain (lagi) //
module.exports = {
  counter: counter,
  penjumlahan: penjumlahan,
  pi: pi,
  sayBye: sayBye
}

// Silahkan pilih Penulisan EXPORTS MODULE salah satu
