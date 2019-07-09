var t = window.TrelloPowerUp.iframe()

// you can access arguments passed to your iframe like so
var arg = t.arg('arg');

t.render(function(){
    function GoogleMapsURLToEmbedURL(GoogleMapsURL){
      var coords = /\@([0-9\.\,\-a-zA-Z]*)/.exec(GoogleMapsURL);
      if(coords!=null)
      {
          var coordsArray = coords[1].split(',')
          t.set("card", "shared", "longitude", coordsArray[1])
          t.set("card", "shared", "latitude", coordsArray[0])
      }
    }
  
  
  
  t.card("attachments").then(function(thing){
    console.log(thing)
  })
  
  t.card("attachments").then(function(thing){
    console.log(thing.attachments)
  })
  
  t.card('attachments')
  .get('attachments')
  .filter(function(attachment){
    return attachment.url.indexOf('https://www.google.com/maps/place/') == 0;
  })
  .then(function(attachArray){
    var urls = attachArray.map(function(a){ return a.url; });
    GoogleMapsURLToEmbedURL(urls)
    
    // var iFrame = jQuery(`<iframe src="${newURL}" width="512" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`)
    // jQuery("#googleIFRAME").append(iFrame)
    // document.getElementById('urls').textContent = urls.join(', ');
  })
  .then(function(){
    return t.sizeTo('#content');
  });
});