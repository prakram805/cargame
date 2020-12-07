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

 async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef= await database.ref('playerCount').once("value")
      if(playerCountRef.exists()){
     playerCount=playerCountRef.val();
      
      player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play(){
form.hide();
textSize(30)
text("start Game",100,200)
Player.getPlayerInfo();

if(allPLayer!==undefined){

var display_position=130;
for(var plr in allPlayers){
if(i==="player"+player.index){
fill("red")
}
else 
fill("black")
}
display_position+=20
textSize(15);
text(allPlayers [plr].name +":"+allPlayer[plr].distance,110,display_position)
}

  }
}
if( (UP_ARROW)&&player.index!==null){
player.distance+=50;
player.update();
}
