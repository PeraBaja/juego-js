import player from './player.js'
let canvas = document.getElementById('game')
let context = canvas.getContext('2d')
let mario = document.getElementById('mario')

let game = {
    draw: function(){ 
        context.drawImage(mario, player.position.x, player.position.y)
    },
    clear: function(){
        context.clearRect(0, 0, 600, 600)
    }
}

function gameloop() {
    game.draw()
    player.speed = 2.5
    if(!player.isGrounded()){
        player.physics.applyGravity()
    }
    player.physics.forceToBeOnTop()
    
    setTimeout(() => {
        game.clear()
        requestAnimationFrame(gameloop)
    }, 10)
    
    
}
document.addEventListener('keydown', (event) => {
    event.preventDefault()
    console.log(event.key)

    switch (event.key) {
        case "ArrowDown":
          player.move.down()
          break;
        case "ArrowUp":
            player.move.up()
          break;
        case "ArrowLeft":
            player.move.left()
          break;
        case "ArrowRight":
            player.move.right()
          break;
        default:
          return;
      }

})


gameloop()