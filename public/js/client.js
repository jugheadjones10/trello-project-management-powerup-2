var Promise = TrelloPowerUp.Promise
var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421'

TrelloPowerUp.initialize({
    'board-buttons': function (t, opts) {
        return [{
            text: 'Myanmar Map',
            callback: function (t, options) {
                // var boardName
                // var boardShortLink
                // t.board("shorLink", "name").then(function(stuff){
                //   boardName = stuff.name
                //   boardShortLink = stuff.shortLink
                // })

                //var urlTo = "https://trello.com/b/" + boardID + "/" + boardName 
                // t.navigate({
                //   url: "https://trello.com/c/U1VQSrJX/16-myanmar-map"
                // });

                t.boardBar({
                    url: './myanmar-map.html',
                    accentColor: '#F2D600',
                    height: 5000,
                    callback: () => console.log('Goodbye.'),
                    resizable: true,
                    title: "Project Location Overview",
                })


            },
            condition: 'edit'
        }]
    },

    'attachment-sections': function (t, options) {
        // options.entries is a list of the attachments for this card
        // you can look through them and 'claim' any that you want to
        // include in your section.

        var claimed = options.entries.filter(function (attachment) {
            return attachment.url.indexOf("https://www.google.com/maps/place/") === 0
        })

        if (claimed && claimed.length > 0) {
            //Why do I need to check if claimed exists? Isn't checking if its length is larger than 0 already checking if it exists?

            // if the title for your section requires a network call or other
            // potentially lengthy operation you can provide a function for the title
            // that returns the section title. If you do so, provide a unique id for
            // your section
            return [{
                id: 'Project Location', // optional if you aren't using a function for the title
                claimed: claimed,
                icon: BLACK_ROCKET_ICON, // Must be a gray icon, colored icons not allowed.
                title: "Project Location",
                content: {
                    type: 'iframe',
                    url: t.signUrl('./attachment-section.html', {
                        arg: 'you can pass your section args here'
                    }),
                    height: 320
                }
            }]
        }else {
            return []
        }
    },

    'card-buttons': function (t, options) {

        return [{
            icon: BLACK_ROCKET_ICON,
            text: "Start project",
            callback: function (t, options) {
                t.get("card", "shared", "startTime")
                    .then(function (startTime) {
                        if (!startTime) {
                            t.alert({
                                message: 'Project has started',
                                display: 'success'
                            })
                            return t.set("card", "shared", "startTime", new Date())
                        } else {
                            t.alert({
                                message: 'Project has already been started',
                                display: 'error'
                            })
                        }
                    })
            }
        },

        {
            icon: BLACK_ROCKET_ICON,
            text: "Stop project",
            callback: function (t, options) {
                t.getAll("card", "shared")
                    .then(function (sharedData) {
                        if (Object.keys(sharedData).length > 0) {
                            var { card: { shared: { startTime, stopTime } } } = sharedData
                            if (startTime && !stopTime) {
                                t.alert({
                                    message: 'Project completed',
                                    display: 'success'
                                })
                                t.set("card", "shared", "stopTime", new Date())
                            } else {
                                t.alert({
                                    message: 'Project has already been completed',
                                    display: 'error'
                                })
                            }
                        } else {
                            t.alert({
                                message: 'Project has not been started',
                                display: 'error'
                            })
                        }
                    })
            }
        }];
    }
    ,

    "card-badges": function (t, options) {
        return t.getAll("card", "shared")
            .then(function (sharedData) {
                if (Object.keys(sharedData).length > 0) {
                    var { card: { shared: { startTime, stopTime } } } = sharedData
                    if (startTime) {
                        return [
                            {
                                text: numberOfDays(new Date("2018-10-15"))
                            }
                        ]
                    } else {
                        return []
                    }
                }

            })
    }



})



