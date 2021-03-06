class Quiz
{
        constructor(){

        }
        getState(){
             var gameStateRef  = database.ref('gameState');
             gameStateRef.on("value",function(data){
                     gameState = data.val();
             })
        }
        update(state){
                database.ref('/').update({
                        gameState : state
                });

        }
        async start(){
           if(gameState==0){

           contestant = new Contestant;

           var contestantCountRef = await database.ref('contestantCount').once("value");
           if(contestantCountRef.exists()){
                   contestantCount = contestantCountRef.val();
                   contestant.getCount();
           }
            question = new Question();
            question.display();

        }
              
    }
    play(){
          question.hide();
          
          background("yellow");

          textSize(40);
          text("Result",120,70);
          Contestant.getContestantInfo();

          if(allContestants!==null){
        
          textSize(20);
          text("Contestants who answered correctly are highlighted in red color",120,220);
          
          var display_position = 260;

          for(var plr in allContestants){
               var correctAns = "2";

               if(correctAns===allContestants[plr].answer)
                  fill("Green")
               else 
                fill("red");

                display_position+=30;
                textSize(25);
                text(allContestants[plr].name+": "+allContestants[plr].answer,120,display_position);
          }
        }
    }
}