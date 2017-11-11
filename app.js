// TODO : [x] Connect to Github API
let https = require('https')

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/users/mrjuoss',
  method: 'GET',
  headers: {
    'user-agent': 'nodejs'
  }
}

// [x] TODO : Read the data
let request = https.request(options, (response) => {
  let body = ''
  console.log('Got response : ', response)
  response.on('data', (data) => {
    body = body + data
  })
  response.on('end', () => {
    //console.log(body)
    //console.log(typeof(body))
    //[x] TODO :Parse the data
      // Convert String to JSON (Javascript Object)
      let profile = JSON.parse(body)
      console.log(profile.avatar_url)
      //console.log(typeof(profile))
  })


  // TODO : Print the data out

})

request.end()

request.on('error', (e) => {
  console.log(e)
})

// Beberapa Cara membuat function di Javascript
// Cara 1 = Cara lama
function namaFungsi(param) {
  console.log('fungsi ini dipanggil ' + param)
}

// Cara 2 = Anonymous Function yang di assign ke sebuat variabel deng keyword let
let namaFungsi2 = function() {
  console.log('Ini adalah fungsi tanpa nama');
}

// Cara 3 = Disebut Arrow Function. Merupakan shortcut dari cara ke 2
let namaFungsi3 = () => {
  console.log('Arrow function')
}

namaFungsi('hallo')

namaFungsi2()

namaFungsi3()
