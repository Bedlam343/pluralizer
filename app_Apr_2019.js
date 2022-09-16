
function plural(){
  var word = document.getElementById("in").value;
  word = word.trim(); 
  word = word.toLowerCase(); 
  var lastLetter = word.charAt(word.length - 1); 
  var lastTwo = word.substring(word.length - 2); 
  var secondLast = word.charAt(word.length - 2);
  var letter = "a" || "e" || "i" || "o" || "u"; 
  var result = "";
  
   
     
     //WORDS THAT END WITH F BUT DONT PLURALZIE TP "IVES"//
  if(word == "roof" || word == "belief" || word == "chef" || word =="chief" || word == "spoof" || word == "giraffe" || word == "cliff"){
    result = word + "s";
    
    
    //WORDS THAT DONT CHANGE AT ALL//
  } 
  else if( word == "aircraft" || word == "deer" || word == "fish" || word == "moose" || word == "offspring" || word == "sheep" || word == "species" || word == "trout" || word == "salmon" || word == "bass" || word == "foul" || word == "halibut" || word == "tuna" || word == "spacecraft" || word == "series" || word == "advice" || word == "barracks" || word == "binoculars" || word == "cannon" || word == "cattle" || word == "chalk" || word == "breadfruit" || word == "aluminum" || word == "caribou" || word == "chassis" || word == "chinos" || word == "clippers" || word == "clothing" || word == "cod" || word == "concrete" || word == "corps" || word == "correspondence" || word == "crossroads" || word == "doldrums" || word == "dungarees" || word == "education" || word == "eggfruit" || word == "elk" || word == "eyeglasses" || word == "flares" || word == "food" || word == "furniture" || word == "goldfish" || word == "grapefruit" || word == "gallows" || word == "greenfly" || word == "grouse" || word == "haddock" || word == "headquarters" || word == "help" || word == "homework" || word == "hovercraft" || word == "ides" || word == "insignia" || word == "jackfruit" || word == "jeans" || word == "knickers" || word == "knowledge" || word == "kudos" || word == "leggings" || word == "lego" || word == "luggage" || word == "monkfish" || word == "mullet" || word == "nailclippers" || word == "news" || word == "oxygen" || word == "pants" || word == "pyjamas" || word == "passionfruit" || word == "pike" || word == "pilers" || word == "police" || word == "premises" || word == "reindeer" || word == "scissors" || word == "shambles" || word == "shellfish" || word == "shorts" || word == "shrimp" || word == "smithereens" || word == "squid" || word == "starfruit" || word == "sugar" || word == "swine" || word == "tongs" || word == "trousers" || word == "tweezers" || word == "you" || word == "wheat" || word == "whitebait" || word == "wood" || word=="jagi"){
    result = word; 
  }
  else if(word == "person"){
    result =   "people or persons " ;
  
    
  //WORDS THAT END IN "ON"//
  } else if(lastTwo == "on"){
    result = word.substring(0, word.length - 2) + "a"; 
  }

  
    //WORDS THAT GO FROM IS TO ES//
   else if(word == "crisis" || word == "analysis" || word == "neurosis"){
    result = word.substring(0, word.length - 2) + "es"; 
  }
    
    
    //words ending with f, pluralize to "ves"//
   else if(word == "elf" || word == "half" || word == "scarf" || word == "shelf" || word == "wolf" || word == "loaf" || word == "thief" || word == "self" || word == "dwarfs" || word == "hoof" || word == "wharf"){
     result = word.substring(0, word.length - 1) + "ves";
   } else if(word == "wife" || word == "knife" || word == "life"){
     result = word.substring(0, word.length - 2) + "ves"; 
   }
    
    // WORDS WITH LATIN PLURALIZAIED ENDINGS//
   else if(word == "alga"){
     result = "algae";
  } else if(word == "alumnus"){
    result = "alumni";
  } else if(word == "larva"){
    result = "larvae";
  }
    
    
    // WORDS WITH NO DAMN RULES//
   else if(word == "mouse"){
    result = "mice"; 
  } 
  else if(word == "die"){
    result = "dice"; 
  } else if(word == "child"){
    result = "children";
  } else if(word == "goose"){
    result = "geese"; 
  } else if(word == "man"){
    result = "men"; 
  } else  if(word == "workman"){
    result = "workmen";
  } else if(word == "schoolchild"){
    result = "schoolchildren";
  } else if(word == "woman"){
    result = "women"; 
  } else if(word == "tooth"){
    result = "teeth"; 
  } else if(word == "foot"){
    result = "feet"; 
  } else if(word == "person"){
    result = "people";
     } else if(word == "louse"){
    result = "lice"; 
  } else if(word == "cactus"){
    result = "cacti";
  } else if(word == "appendix"){
    result = "appendices";
  } else if(word == "ox"){
    result = "oxen"; 
  } else if(word == "fez"){
    result = word + "zes";
  } else if(word == "quiz"){
    result = "quizzes";
  }
    
    else if(word == "gas"){
    result = word + "ses"; 
  } else if(word == "bison"){
    result = "bisons"; 
  } else if (word == "tree"){
    result = word + "s" 
    // END OF WORDS WITH NO RULES//
  
    
    //WORDS THAT END WITH O//
  } else if(word == "expresso" || word == "risotto" || word == "solo" || word == "zero" || word == "avocado" || word == "zoo" || word == "photo" || word == "studio" || word == "embryo" || word == "cargo" || word == "soprano" || word == "duo" || word == "piano" || word == "auto" || word == "bravo" || word == "bronco" || word == "casino" || word == "combo" || word == "gazebo" || word == "kilo" || word == "kimono" || word == "logo" || word == "memo" || word == "poncho" || word == "photo" || word == "pimento" || word == "pro" || word == "sombrero" || word == "taco" || word == "memo" || word == "tobacco" || word == "torso" || word == "tipo"){
    result = word + "s"; 
    
  } else if(lastLetter == "o"){
    if(secondLast == "a" || secondLast == "e" || secondLast == "i" || secondLast == "o" || secondLast == "u"){
      result = word + "s"; 
    } else {
      result = word + "es";
    }
  }

 //WORDS ENDING WITH Y//
   else if(lastLetter == "y"){
    if(secondLast == "a" || secondLast == "e" || secondLast == "i" || secondLast == "o" || secondLast == "u"){
      result = word + "s";
    } else {
      result = word.substring(0, word.length - 1) + "ies"; 
    }
    
    
    //DONT KNOW WHAT THIS IS//
    } else if(lastTwo == "sh" || lastLetter == "s" || lastTwo == "ss" || lastTwo == "ch" || lastLetter == "x" || lastLetter == "z"){
    result = word + "es";
      
     // JUST FOR BACKUP  IF I MISS SOME WORD//
  } else if(lastLetter == "a" || lastLetter == "b" || lastLetter == "c" || lastLetter =="d" || lastLetter == "e" || lastLetter == "f" || lastLetter =="g" || lastLetter == "h" || lastLetter == "i" || lastLetter == "j" || lastLetter == "k" || lastLetter =="l" || lastLetter == "m" || lastLetter == "n" || lastLetter == "o" || lastLetter == "p" || lastLetter == "q" || lastLetter == "r" || lastLetter == "s" || lastLetter == "t" || lastLetter == "u" || lastLetter == "v" || lastLetter == "w" || lastLetter == "x" || lastLetter == "y" || lastLetter == "z"){
   result = word + "s"; 
 }
  //output to screen
  document.getElementById("out").innerHTML = result;  
}


//Allows you to call the plural function if 'enter' key is pressed while in input box
document.getElementById("in").onkeydown = function(event) {
    if (event.keyCode == 13) {
        plural();
    }
}
function notVowel(){
  if(secondLast == "b" || secondLast == "c" || secondLast == "d" || secondLast == "f" || secondLast == "g" || secondLast == "h" || secondLast == "j" || secondLast == "k" || secondLast == "l" || secondLast == "m" || secondLast == "n" || secondLast == "p" || secondLast == "q" || secondLast == "r" || secondLast == "s" || secondLast == "t" || secondLast == "v" || secondLast == "w" || secondLast == "x" || secondLast == "y" || secondLast == "z"){
    result = true; 
  } else {
    result = false; 
  }
}

