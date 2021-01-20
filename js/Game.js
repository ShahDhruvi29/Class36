class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(25);
     text("Game has Started!",200,100)
     Player.getPlayerInfo(); 
     if(allPlayers !== undefined){
       var display_position = 130;
     for(var i in allPlayers){
       if(i === "player"+ player.index)
       fill("chartreuse")
       else 
       fill("orangered")
       display_position += 30;
       textSize(15);
       text(allPlayers[i].name + ": "+allPlayers[i].distance,150,display_position)
     }
  }
  if (keyDown(UP_ARROW) && player.index!==null){
    player.distance++
    player.update();
  }
}
}