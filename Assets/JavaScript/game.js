 //Variables
        //Used to record how many times a letter can be pressed.
        var doubleLetter = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
                    'y','z'];
        //Create an array of words
        var beachwords = ["beach", "waves", "shovel", "towel", "hat", "sunblock", "sand", "swim", "popsicle", "starfish", "boat"]
        //Chooses a random word from the array.
        
        var underScore = [];
        var RightWord = [];
        var WrongWord = [];
        var GuessesRemain =10;
        var wins = 0;

        
        //Dom manipulation
        
        document.getElementById("underscore-text").textContent = "Current Word: " + underScore.join(' ');
         
        //Displays the number of wins
        document.getElementById("wins").textContent = "Wins: " + wins;
        
        document.getElementById("guesses").textContent = "Number of Guesses Remaining: " + GuessesRemain;
        //Displays the right letters guessed from the right letters array.
        document.getElementById("rightlettersguessed").textContent = "Right Letters Guessed: " + RightWord;
        //Displays the wrong letters guessed from the wrong letters array.
        document.getElementById("wronglettersguessed").textContent = "Wrong Letters Guessed: " + WrongWord;
        
        function resetGame() {
        beachrandom = beachwords[Math.floor(Math.random() * beachwords.length)];
        underScore = [];
        RightWord = [];
        WrongWord = [];
        GuessesRemain =10;
        //Checking if it works
        console.log(beachrandom);
        createUnderscore();
        
        } 
        
        beachrandom = beachwords[Math.floor(Math.random() * beachwords.length)];
        underScore = [];
        RightWord = [];
        WrongWord = [];
        GuessesRemain =10;
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
            GuessesRemain--;
            
            document.getElementById("wronglettersguessed").textContent = "Wrong Letters Guessed: " + WrongWord;
            document.getElementById("guesses").textContent = "Number of Guesses Remaining: " + GuessesRemain;
            document.getElementById("wronglettersguessed").textContent = "Wrong Letters Guessed: " + WrongWord;
            
            }

            if(GuessesRemain === 0) {
                alert("You lose :(");
                resetGame(); 
            }

            
           });  
            
        
                
       
             
            
            

        //     //Sees if the user word matches the guesses
       
        //     }
      
            
        //     }
        
        
        //If user guesses the word correctly after 15 guesses, increase wins.
        //Display the letters the user already guessed.
        
        //have a word bank of words to choose from that get randomly selected.
        //Have the letter that the user picked display in the word if it is a correct letter.
        //If the user already picked a letter and presses the key again, do not decrease the number of guesses .
        //Have a picture display after the user guesses the word correctly.
        