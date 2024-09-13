const player = {
    position : {
        x: 0,
        y: 0
    },
    speed: 0,
    move: {
        right: function(){
            player.position.x += 1 * player.speed
        },
        left: function(){
            player.position.x -= 1 * player.speed
        },
        up: function() {
            player.position.y -= 1 * player.speed
        },
        down: function() {
            player.position.y += 1 * player.speed
        }
    },
    physics: {
        gravityScale: 1,
        applyGravity: function(){
            player.position.y += 1 * player.physics.gravityScale
        },
        forceToBeOnTop() {
            if(player.isGrounded()) {
                player.position. y = 115
            }
        }
    },
    isGrounded: function(){
        return player.position.y >= 115
    }

}

export default player