var t = window.TrelloPowerUp.iframe()

t.board('id').then(function(board){
    console.log(board)
    Trello.get(`/boards/${board.id}/actions`, function(actions){
        console.log(actions)
        // for(var i = 0; i < actions.length; i++){
        //     if(actions[i].data.old.due){
        //         // new date is in actions[i].data.card.due
        //     }
        // }
    }, function(){
        console.log("error")
    })
})