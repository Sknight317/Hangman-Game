 //Variables
       
        //Create an array of words
        var beachwords = ["beach", "waves", "shovel", "towel", "hat", "sunblock", "sand", "swim", "boat"]
        //Chooses a random word from the array.
        
        var underScore = [];
        var RightWord = [];
        var WrongWord = [];
        var GuessesRemain =10;
        var wins = 0;

        function resetGame() {
        beachrandom = beachwords[Math.floor(Math.random() * beachwords.length)];
        underScore =[];
        RightWord =[];
        WrongWord =[];
        GuessesRemain =10;
        
        //Checking if it works
        
        console.log(beachrandom);
        document.getElementById("underscore-text").textContent = "Current Word: " + underScore.join(' ');
        document.getElementById("rightlettersguessed").textContent = "Right Letters Guessed: " + RightWord;
        document.getElementById("guesses").textContent = "Number of Guesses Remaining: " + GuessesRemain;
        }

   
        //Dom manipulation
        
        document.getElementById("underscore-text").textContent = "Current Word: " + underScore.join(' ');
         
        //Displays the number of wins
        document.getElementById("wins").textContent = "Wins: " + wins;
        
        document.getElementById("guesses").textContent = "Number of Guesses Remaining: " + GuessesRemain;
        //Displays the right letters guessed from the right letters array.
        document.getElementById("rightlettersguessed").textContent = "Right Letters Guessed: " + RightWord;
        //Displays the wrong letters guessed from the wrong letters array.
        document.getElementById("wronglettersguessed").textContent = "Wrong Letters Guessed: " + WrongWord;
        
        
        
        beachrandom = beachwords[Math.floor(Math.random() * beachwords.length)];
        
        //Checking if it works
        console.log(beachrandom);  
        
        
        //Create underscores based on length of words.
        var createUnderscore = function() {
            for (var i = 0; i < beachrandom.length; i++) {
            underScore.push('_');
            
            
        }
        return underScore;
        }
        //Test
        console.log(createUnderscore());
    
        //When user presses a key, capture what the user presses and see if each letter matches a letter in a random word.//Have user press keys to try to guess the word.
        document.addEventListener('keypress', function(event) {
            var keycode = event.keyCode;
            var newword = String.fromCharCode(keycode);
            
        console.log(newword);

        
        //If user's guess is right
             
            if(beachrandom.indexOf(newword) > -1) {
        //Decrease the amount of guesses remaining
                GuessesRemain--;
                document.getElementById("guesses").textContent = "Number of Guesses Remaining: " + GuessesRemain;
        // Push to the right words array
                RightWord.push(newword);
                document.getElementById("rightlettersguessed").textContent = "Right Letters Guessed: " + RightWord;
        //Replace underscore with the right letter
                underScore[beachrandom.indexOf(newword)] = newword;
                document.getElementById("underscore-text").textContent = "Current Word: " + underScore.join(' ');
            
        
            
        //Checks to see if the actual word matches the guesses
            if(underScore.join('') === beachrandom) {
                alert("You Win!!");
                wins++;
                document.getElementById("wins").textContent = "Wins: " + wins;
                resetGame();
            }

           
        }
        
            else {
            //Pushes wrong letters into the wrong words array
                WrongWord.push(newword);
            //Decreases the amount of guesses remaining
                GuessesRemain--;
            //Displays both in the html
                document.getElementById("wronglettersguessed").textContent = "Wrong Letters Guessed: " + WrongWord;
                document.getElementById("guesses").textContent = "Number of Guesses Remaining: " + GuessesRemain;
                
            
            }

            if(GuessesRemain === 0) {
                alert("You lose :(");
                resetGame(); 
            }

        
           });  
            
         
                
       
             
            
            

       
        