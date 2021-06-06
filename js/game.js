/*  Name: Frank Kufer  
    Date: November 15th, 2020
    Description: scrpit that creates rock paper and scissors game that stores wins and losses of the user then dispaly a success or fail message in the end 
 */

window.addEventListener("load", function () {
//declaring variable
    let Count=0; 
    let userWin=0;
    let otherPlayerWin=0;
    let feedback= document.getElementById("feedback");
    let finalScore = document.getElementById("finalScore")
    let nameAge = document.getElementById("nameAge");
    let form = document.getElementById("example_form");
 
 
 //listner Form for submit button 
 
    document.forms.example_form.addEventListener("submit", function (event) {
        event.preventDefault();
        let userName = document.forms.example_form.userName.value;
        let age = document.forms.example_form.age.value;
        let color = document.forms.example_form.color.value;
//Side the form 
       form.style.visibility="hidden";
//Show the game that contains three buttons    
       game = document.getElementById("game_example");
       game.style.visibility="visible";
//Setting the name and age to the user's inputs        
       displayName = document.getElementById("displayName").innerHTML='Player Name: ' + userName ;
       displayName = document.getElementById("displayAge").innerHTML='Age: ' + age ;
//Change the background color
       background = document.getElementById("bc");
       background.style.backgroundColor= color;
//Show where the name and the age      
       nameAge.style.visibility = "visible";
//Show the help button        
       document.getElementById("help").style.visibility="visible";
     
       
    
    });

   





//Rock function that stores users and player2 score then display them on the screen 
    function rock(){
        //hide the help button
        document.getElementById("help").style.visibility="hidden";
        // Hide the game window 
        game.style.visibility="hidden";
        // Show the results window 
        final.style.visibility="visible";
       
        //user choice 
        choice = document.getElementById("choice").innerHTML= userName.value +' choice is: Rock';
        //system choice randmoly 
        rand = Math.floor((Math.random() * 3) + 1);
        if(rand ===1){
           
            system = document.getElementById("system").innerHTML="Player2 choice is: Rock";
            document.getElementById("feedback").innerHTML="The Score is Even";
            feedback.style.backgroundColor="black";
            feedback.style.color="yellow";

        }
        else if(rand === 2){
            system = document.getElementById("system").innerHTML="Player2 choice is: Paper";
            document.getElementById("feedback").innerHTML="You Lose";
            otherPlayerWin++;
            feedback.style.backgroundColor="black";
            feedback.style.color="red";

        }
        else if(rand === 3){
            system = document.getElementById("system").innerHTML="Player2 choice is: Scissors";
            document.getElementById("feedback").innerHTML="You Win";
            userWin++;
            feedback= document.getElementById("feedback");
            feedback.style.backgroundColor="black";
            feedback.style.color="green";
        }
    
        //increment the count  
        Count++;
        // if the game round is less than 5 
        if(Count<5){
        playAgain = document.getElementById("playAgain");
        playAgain.style.visibility="visible";
        }
        // otherwise show the success or fail message 
        else{
            //sucess message 
            if(userWin>otherPlayerWin){
               

                score1 = document.getElementById("displayName").innerHTML=userName.value+' score: ' + userWin;
                score2= document.getElementById("displayAge").innerHTML='Player2 score: ' + otherPlayerWin;
                document.getElementById("finalScore").innerHTML='Congratulations ' + userName.value+' you won!';
                finalScore.style.backgroundColor="black";
                finalScore.style.color="green";
            

            }
            //fail success 
            else{
                
                
                score1 = document.getElementById("displayName").innerHTML=userName.value+' score: ' + userWin;
                score2= document.getElementById("displayAge").innerHTML='Player2 score: ' + otherPlayerWin;
                document.getElementById("finalScore").innerHTML='Oopps ' + userName.value +', you lost!';
                finalScore.style.backgroundColor="black";
                finalScore.style.color="red";
           
               
            }
        }
     
    }



    //Paprer function that stores users and player2 score then display them on the screen 
    function paper(){
        //hide the help button
        document.getElementById("help").style.visibility="hidden";
        // Hide the game window 
         game.style.visibility="hidden";
        // Show the results window 
         final.style.visibility="visible";
        
         //user choice 
         choice = document.getElementById("choice").innerHTML=userName.value +' choice is: Paper';
         //system choice randomly 
         rand = Math.floor((Math.random() * 3) + 1);
         if(rand ===1){
             system = document.getElementById("system").innerHTML="Player2 choice is: Rock";
             document.getElementById("feedback").innerHTML="You Win";
             userWin++;
             feedback.style.backgroundColor="black";
             feedback.style.color="green";
 
 
         }
         else if(rand === 2){
             system = document.getElementById("system").innerHTML="Player2 choice is: Paper";
             document.getElementById("feedback").innerHTML="The Score is Even";
             feedback.style.backgroundColor="black";
             feedback.style.color="yellow";
         }
         else if(rand === 3){
             system = document.getElementById("system").innerHTML="Player2 choice is: Scissors";
             document.getElementById("feedback").innerHTML="You Lose";
             otherPlayerWin++;
             feedback.style.backgroundColor="black";
             feedback.style.color="red";
         }
 
         //increment the count 
         Count++;
         // if the game round is less than 5 
         if(Count<5){
         playAgain = document.getElementById("playAgain");
         playAgain.style.visibility="visible";
         }
        // otherwise show the success or fail message 
         else{
            // success message 
            if(userWin>otherPlayerWin){
                score1 = document.getElementById("displayName").innerHTML=userName.value+' score: ' + userWin;
                score2= document.getElementById("displayAge").innerHTML='Player2 score: ' + otherPlayerWin;
                document.getElementById("finalScore").innerHTML='Congratulations ' + userName.value+' you won!';
                finalScore.style.backgroundColor="black";
                finalScore.style.color="green";
              
                

            }
            //fail message 
            else{
                score1 = document.getElementById("displayName").innerHTML=userName.value+' score: ' + userWin;
                score2= document.getElementById("displayAge").innerHTML='Player2 score: ' + otherPlayerWin;
                document.getElementById("finalScore").innerHTML='Oopps ' + userName.value +', you lost!';
                finalScore.style.backgroundColor="black";
                finalScore.style.color="red";
            
               
            }
         }
      
     }


     //Scissors function that stores users and player2 score then display them on the screen 
     function scissors(){
        document.getElementById("help").style.visibility="hidden";
        // Hide the game window 
         game.style.visibility="hidden";
        // Show the results window 
         final.style.visibility="visible";
        
         //user choice 
     
         choice = document.getElementById("choice").innerHTML=userName.value +' choice is: Scissors';;
 
 
         //system choice 
        
         rand = Math.floor((Math.random() * 3) + 1);
         if(rand ===1){
             system = document.getElementById("system").innerHTML="Player2 choice is: Rock";
             document.getElementById("feedback").innerHTML="You Lose";
             otherPlayerWin++;
             feedback.style.backgroundColor="black";
             feedback.style.color="red";
 
         }
         else if(rand === 2){
             system = document.getElementById("system").innerHTML="Player2 choice is: Paper";
             document.getElementById("feedback").innerHTML="You Win";
             userWin++;
             feedback.style.backgroundColor="black";
             feedback.style.color="green";
         }
         else if(rand === 3){
             system = document.getElementById("system").innerHTML="Player2 choice is:  Scissors";
             document.getElementById("feedback").innerHTML="The Score is Even";
             feedback.style.backgroundColor="black";
             feedback.style.color="yellow";
         }
 
         //increment count 
         Count++;
           // if the game round is less than 5 
         if(Count<5){
         playAgain = document.getElementById("playAgain");
         playAgain.style.visibility="visible";
         }
         // otherwise show the success or fail message 
         else{
            //sucess message 
            if(userWin>otherPlayerWin){
                score1 = document.getElementById("displayName").innerHTML=userName.value+' score: ' + userWin;
                score2= document.getElementById("displayAge").innerHTML='Player2 score: ' + otherPlayerWin;
                document.getElementById("finalScore").innerHTML='Ccongratulations ' + userName.value+' you won!';
                finalScore.style.backgroundColor="black";
                finalScore.style.color="green";
           
                
            }
            //fail message 
            else{
                score1 = document.getElementById("displayName").innerHTML=userName.value+' score: ' + userWin;
                score2= document.getElementById("displayAge").innerHTML='Player2 score: ' + otherPlayerWin;
                document.getElementById("finalScore").innerHTML='Oopps ' + userName.value +', you lost!';
                finalScore.style.backgroundColor="black";
                finalScore.style.color="red";
           
            }
         }
      
     }

     
// Play Again Function 
    function again(){
      
        document.getElementById("choice").innerHTML="";
        document.getElementById("system").innerHTML="";
        document.getElementById("system").innerHTML="";
        playAgain.style.visibility="hidden";
        final = document.getElementById("final");
        final.style.visibility="hidden";
        game.style.visibility="visible";
        document.getElementById("help").style.visibility="visible";

    }
    

 // Help function

     function help(){
        
        document.getElementById("game_example").style.visibility="hidden";
        document.getElementById("final").style.visibility="hidden";
        document.getElementById("nameAge").style.visibility="hidden";
        document.getElementById("info").style.visibility="visible";
 
        

    }
// unhelp function
    function unhelp(){
        
        document.getElementById("info").style.visibility="hidden";
        document.getElementById("game_example").style.visibility="visible";
        document.getElementById("nameAge").style.visibility="visible";

    }
    
    
// Add listeners
//rock 
    r = document.getElementById("rock");
    r.addEventListener("click", rock);
//paper     
    p = document.getElementById("paper");
    p.addEventListener("click", paper);
//scissors     
    s = document.getElementById("scissors");
    s.addEventListener("click", scissors);
//playAgain 
    playAgain.addEventListener("click",again);
    



//Help 
    Help = document.getElementById("help");
    Help.addEventListener("click", help);
//unhelp    
    unHelp = document.getElementById("unhelp");
    unHelp.addEventListener("click", unhelp);


//if the name is empty change the name field color to crimson      
    document.forms.example_form.userName.addEventListener("input", function (event) {
        if(this.value.trim() === ""){
            this.style.backgroundColor ="crimson";
          
        }
// otherwise change the color it it's normal         
        else{
            this.style.backgroundColor ="";
        }
    })
//if the age is empty change the age field color to crimson    
    document.forms.example_form.age.addEventListener("input", function (event) {
        if(this.value.trim() === ""){
            this.style.backgroundColor ="crimson";
            
        }
// otherwise change the color it it's normal   
        else{
            this.style.backgroundColor ="";
           
        }
    })
    


});