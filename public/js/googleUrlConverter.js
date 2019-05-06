var t = window.TrelloPowerUp.iframe()

function GoogleMapsURLToEmbedURL(GoogleMapsURL){
  
  var splitUrl = GoogleMapsURL.split('!3d')
  var latLong = splitUrl[splitUrl.length-1].split('!4d')
  var longitude
  if (latLong.indexOf('?') !== -1){
      longitude = latLong[1].split('\\?')[0]
  } else {
      longitude = latLong[1]
  }
  var latitude = latLong[0]

  var coords = {
    longitude : longitude,
    latitude : latitude,
    enabled: true
  }
  
  //t.set("card", "shared", coords)
  t.set("card", "shared", "coords", coords)
  
//   t.set("card", "shared", "latitude", 12)
//   t.set("card", "shared", "longitude", l34)
  
//   t.get("card", "shared", "latitude").then(function(lati){
//     console.log(lati)
//   })
//   t.get("card", "shared", "longitude").then(function(info){
//     console.log(info)
//   })

}

  // t.get("card", "shared", "latitude").then(function(lati){
  //   console.log(lati)
  // })
  // t.get("card", "shared", "long").then(function(info){
  //   console.log(info)
  // })

//         var coords = /\@([0-9\.\,\-a-zA-Z]*)/.exec(GoogleMapsURL);
//         console.log(coords)
//         if(coords!=null)
//         {
//             var coordsArray = coords[1].split(',')
//             t.set("card", "shared", "longitude", coordsArray[1])
//             t.set("card", "shared", "latitude", coordsArray[0])

//              t.get("card", "shared", "latitude").then(function(lati){
//                 t.get("card", "shared", "longitude").then(function(longi){
//                   console.log(longi)
//                   console.log(lati)
//             })
//             })
//         }
