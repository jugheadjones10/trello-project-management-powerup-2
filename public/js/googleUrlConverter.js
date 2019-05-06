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
    latitude : latitude
  }
  
  return coords
}