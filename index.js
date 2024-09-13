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
let player = {
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
function gameloop() {
    game.draw()
    
    setTimeout(() => {
        game.clear()
        requestAnimationFrame(gameloop)
    }, 10)
    
    
}
document.addEventListener('key', (event) => {
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
          return; // Quit when this doesn't handle the key event.
      }

})


gameloop()