class Question
{
   constructor(){
        this.title = createElement('h1');
        this.question = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.button = createButton("Submit");
        this.input1 = createInput("Name");
        this.input2 = createInput("Correct Option");

   }
   hide(){
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
      this.title.hide();
   }
   display(){
          this.title.html("My Quiz Game");
          this.title.position(15,10);

          this.question.html("Question :- What start and end with letter 'E' but has only one letter? ");
          this.question.position(20,80);

          this.option1.html("1 : Everyone");
          this.option1.position(25,125);

          this.option2.html("2 : Envelope");
          this.option2.position(25,155);

          this.input1.position(150,230);
          this.input2.position(150,260);
          this.button.position(150,290);

          this.button.mousePressed(()=>{

            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            this.title.hide();

            contestant.name = this.input1.value();
            contestant.answer  = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
          })
   }
}