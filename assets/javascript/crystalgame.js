$(document).ready(function(){
    //creates random number from 1-200
    var randomNum = Math.floor(Math.random() * 150 + 1);
    console.log(randomNum);
    //appends random number to random tag in html
    $("#random").append(" " + randomNum);

    //create variables for scores
    var wins = 0;
    var losses = 0;
    var total = 0;

    //creating random number for each jewel from 1-20
    var numBlue =  Math.floor(Math.random()*20 + 1);
    var numRed = Math.floor(Math.random() * 20 + 1);
    var numWhite = Math.floor(Math.random() * 20 + 1);
    var numGreen = Math.floor(Math.random() * 20 + 1);


    //creating reset function
    function resetGame (){
        //reset random # and log in back to html
        randomNum = Math.floor(Math.random() * 200 + 1);
        $("#random").text("Number to get: " + randomNum);
        
       // reset all random numbers on gems
        numBlue = Math.floor(Math.random() * 20 + 1);
        console.log(numBlue);
        numRed = Math.floor(Math.random() * 20 + 1);
        numWhite = Math.floor(Math.random() * 20 + 1);
        numGreen = Math.floor(Math.random() * 20 + 1);
        //reset total to 0 and log it back into html
        total = 0;
        $("#userTotal").text("Your total score is: " + total);

    }

    //creating function for if won
    function winner (){
        alert("YOU WON!!!");
        wins ++;
        $("#userWins").text("Wins: " + wins);
        resetGame();
    }

    //create function for if loss
    function loser(){
        alert("YOU LOST!!!");
        losses ++;
        $("#userLosses").text("Losses: " + losses)
        resetGame();
    }

    //creat event when user clicks on blue gem (why dont i need event in the () of the function )???
    $("#blue").on("click" , function(event){
        total = total + numBlue;
        //log back into total score in html
        $("#userTotal").text("Your total score is: " + total);
        //if user total equal to random number run winner function otherwise if total larger run loser function
        if (total === randomNum){
            winner();
        }
        else if (total > randomNum){
            loser();
        }
    })

    //create event when user clicks on red gem 
    $("#red").on("click", function(event){
        total = total + numRed;
        //log back into total score in html
        $("#userTotal").text("Your total score is: " + total);
        //run winner and loser functions like the last button
        if (total === randomNum){
            winner();
        }
        else if (total > randomNum){
            loser();
        }
    })

    //create event when user clicks white gem 
    $("#white").on("click", function(event){
        total = total + numWhite;
        $("#userTotal").text("Your total score is: " + total);
        if (total === randomNum){
            winner();
        }
        else if (total > randomNum){
            loser();
        }
    })

    //create event when user clicks on green gem
    $("#green").on("click", function(event){
        total = total + numGreen;
        $("#userTotal").text("Your total score is: " + total);
        if (total === randomNum){
            winner();
        }
        else if (total > randomNum){
            loser();
        }
    })
    


    



})