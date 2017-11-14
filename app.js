let https = require('https')

let profile = require('./profile.js')
// atau import profile from './profile.js'
// Sebelum kita bisa import sebuat module, maka module tersebut harus diexport terlebih dahulu

profile.get('rizafahmi')
profile.get('mrjuoss')
profile.get('user-ngawur')
