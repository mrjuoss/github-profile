let https = require('https')

let profile = require('./profile.js')
// atau import profile from './profile.js'
// Sebelum kita bisa import sebuat module, maka module tersebut harus diexport terlebih dahulu

/*
  profile.get('rizafahmi')
  profile.get('mrjuoss')
  profile.get('user-ngawur')

  get adalah nama method dalam module profile
*/

/*
  Jika ingin seperti ini
  let profiles = ['rizafahmi', 'mrjuoss', 'user-ngawur']
*/

/* Bermain dengan Array Map */
/*
  Array Map berguna untuk mengubah arrat baru. Misal kita punya Array [1,2,3] dan ingin mengubahnya menjadi Array baru dengan nilai [2,4,6] maka solusinya adalah masing-masing array harus dikalikan dengan 2.

  Contoh

let array_lama = [1,2,4]

let array_baru = array_lama.map(item => {
  return item * 2
})

console.log(array_baru)

*/

let profiles = ['rizafahmi', 'yofri', 'ronishak']

profiles.map(user => {
  return profile.get(user)
})
