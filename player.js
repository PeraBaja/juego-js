const player = {
    position : {
        x: 0,
        y: 0
    },
    move: {
        right: function(){
            player.position.x += 1
        },
        left: function(){
            player.position.x -= 1
        },
        up: function() {
            player.position.y -= 1
        },
        down: function() {
            player.position.y += 1
        }
    }
}

export default player